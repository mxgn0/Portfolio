/**
 * MXGN BLOG — anonyme Kommentare & Likes, Cloudflare Worker
 * © 2026 MXGN
 *
 * Deploy (einmalig, ~5 Minuten, Free-Tier reicht locker — gleiches
 * Prinzip wie das Rennings-Leaderboard):
 *   1. wrangler kv namespace create BLOG
 *      → die ausgegebene id in wrangler-blog.toml eintragen
 *   2. wrangler deploy -c wrangler-blog.toml
 *      → gibt die Worker-URL aus, z.B. https://mxgn-blog.mxgn-studio.workers.dev
 *   3. Falls die URL anders lautet: in lib/blog.js oben bei BLOG_API einsetzen.
 *
 * Moderation (Kommentar löschen):
 *   wrangler kv key get "t:<post-id>" --binding BLOG -c wrangler-blog.toml --remote
 *   → JSON bearbeiten (Kommentar aus dem Array entfernen), dann:
 *   wrangler kv key put "t:<post-id>" '<JSON>' --binding BLOG -c wrangler-blog.toml --remote
 *
 * API:
 *   GET  /counts?ids=a,b,c   → { a: {likes, comments}, ... }  (für die Übersicht)
 *   GET  /thread?id=x        → { likes, comments: [...] }
 *   POST /like     { id }            → { ok, likes }
 *   POST /unlike   { id }            → { ok, likes }
 *   POST /comment  { id, name, text, website } → { ok, comment }
 *                  (website ist ein Honeypot — Bots füllen es aus,
 *                   der Kommentar wird dann still verworfen)
 *   POST /comment-like { id, cid }   → { ok, likes }
 *
 * Hinweise: alles anonym, kein Login. Namen sind optional. Pro IP gilt
 * eine 60s-Abklingzeit zwischen Kommentaren. KV ist eventual consistent —
 * bei gleichzeitigen Likes kann mal einer verloren gehen; für einen Blog
 * völlig okay.
 */

const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

const ID_RE = /^[a-z0-9_-]{1,64}$/;
const MAX_COMMENTS = 300;   // pro Beitrag
const COOLDOWN_S = 60;      // Sekunden zwischen Kommentaren derselben IP

function json(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { 'Content-Type': 'application/json', ...CORS },
    });
}

function sanitizeName(s) {
    return String(s || '')
        .replace(/[^\p{L}\p{N} _\-.!]/gu, '')
        .trim()
        .slice(0, 24);
}

function sanitizeText(s) {
    return String(s || '')
        .replace(/\r/g, '')
        .replace(/[\u0000-\u0008\u000B-\u001F\u007F]/g, '')
        .replace(/\n{3,}/g, '\n\n')
        .trim()
        .slice(0, 2000);
}

const KEY = (id) => 't:' + id;

async function readThread(env, id) {
    const raw = await env.BLOG.get(KEY(id));
    const t = raw ? JSON.parse(raw) : {};
    return {
        likes: Math.max(0, Math.floor(Number(t.likes)) || 0),
        comments: Array.isArray(t.comments) ? t.comments : [],
    };
}

async function writeThread(env, id, t) {
    await env.BLOG.put(KEY(id), JSON.stringify(t));
}

export default {
    async fetch(request, env) {
        if (request.method === 'OPTIONS') {
            return new Response(null, { headers: CORS });
        }
        const url = new URL(request.url);
        const path = url.pathname;

        if (request.method === 'GET') {
            if (path === '/counts') {
                const ids = (url.searchParams.get('ids') || '')
                    .split(',')
                    .filter((x) => ID_RE.test(x))
                    .slice(0, 50);
                const out = {};
                await Promise.all(ids.map(async (id) => {
                    const t = await readThread(env, id);
                    out[id] = { likes: t.likes, comments: t.comments.length };
                }));
                return json(out);
            }
            if (path === '/thread') {
                const id = url.searchParams.get('id') || '';
                if (!ID_RE.test(id)) return json({ error: 'bad id' }, 400);
                return json(await readThread(env, id));
            }
            return json({ error: 'not found' }, 404);
        }

        if (request.method !== 'POST') return json({ error: 'not found' }, 404);

        let b;
        try { b = await request.json(); } catch (e) { return json({ error: 'bad json' }, 400); }
        const id = String(b.id || '');
        if (!ID_RE.test(id)) return json({ error: 'bad id' }, 400);

        if (path === '/like' || path === '/unlike') {
            const t = await readThread(env, id);
            t.likes = Math.max(0, t.likes + (path === '/like' ? 1 : -1));
            await writeThread(env, id, t);
            return json({ ok: true, likes: t.likes });
        }

        if (path === '/comment-like') {
            const cid = String(b.cid || '').slice(0, 32);
            const t = await readThread(env, id);
            const c = t.comments.find((c) => c.cid === cid);
            if (!c) return json({ error: 'not found' }, 404);
            c.likes = (c.likes || 0) + 1;
            await writeThread(env, id, t);
            return json({ ok: true, likes: c.likes });
        }

        if (path === '/comment') {
            // Honeypot: Menschen sehen das Feld nie — ist es gefüllt, war's ein Bot.
            // Wir tun so, als wäre alles gut, speichern aber nichts.
            if (b.website) return json({ ok: true });

            const text = sanitizeText(b.text);
            if (!text) return json({ error: 'empty' }, 400);
            const name = sanitizeName(b.name);

            const ip = request.headers.get('CF-Connecting-IP') || '0';
            const rlKey = 'rl:' + ip;
            if (await env.BLOG.get(rlKey)) return json({ error: 'slow down' }, 429);
            await env.BLOG.put(rlKey, '1', { expirationTtl: COOLDOWN_S });

            const t = await readThread(env, id);
            if (t.comments.length >= MAX_COMMENTS) return json({ error: 'thread full' }, 409);

            const comment = {
                cid: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
                name,
                text,
                likes: 0,
                date: new Date().toISOString(),
            };
            t.comments.push(comment);
            await writeThread(env, id, t);
            return json({ ok: true, comment });
        }

        return json({ error: 'not found' }, 404);
    },
};

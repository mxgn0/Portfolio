/**
 * RENNINGS — global leaderboard, Cloudflare Worker
 * © 2026 MXGN
 *
 * Deploy (once, ~5 minutes, free tier is plenty):
 *   1. npm install -g wrangler && wrangler login
 *   2. wrangler kv namespace create SCORES
 *      → note the printed id
 *   3. Create wrangler.toml next to this file:
 *
 *        name = "rennings-board"
 *        main = "cf-worker-leaderboard.js"
 *        compatibility_date = "2026-01-01"
 *
 *        [[kv_namespaces]]
 *        binding = "SCORES"
 *        id = "<the id from step 2>"
 *
 *   4. wrangler deploy
 *      → prints your worker URL, e.g. https://rennings-board.<you>.workers.dev
 *   5. Paste that URL into rennings.html:  const BOARD_API = 'https://...';
 *
 * API:
 *   GET  /top     → JSON array of top 50 scores
 *   POST /submit  → { name, score, d, theme, seed, t, stars } → { ok, rank }
 */

const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

const THEMES = ['meadow', 'jungle', 'mountain', 'cave'];
const MAX_BOARD = 100;

function json(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { 'Content-Type': 'application/json', ...CORS },
    });
}

export default {
    async fetch(request, env) {
        if (request.method === 'OPTIONS') {
            return new Response(null, { headers: CORS });
        }
        const url = new URL(request.url);

        if (url.pathname === '/top' && request.method === 'GET') {
            const board = JSON.parse((await env.SCORES.get('board')) || '[]');
            return json(board.slice(0, 50));
        }

        if (url.pathname === '/submit' && request.method === 'POST') {
            let b;
            try { b = await request.json(); } catch (e) { return json({ error: 'bad json' }, 400); }

            // validate & sanitize — this is a toy board, not a bank
            const name = String(b.name || '')
                .replace(/[^\p{L}\p{N} _\-.!]/gu, '')
                .trim()
                .slice(0, 12);
            const score = Math.floor(Number(b.score));
            const d = Math.floor(Number(b.d));
            const t = Math.floor(Number(b.t));
            const stars = Math.min(3, Math.max(1, Math.floor(Number(b.stars) || 1)));
            const seed = Math.floor(Number(b.seed)) || 0;
            const theme = THEMES.includes(b.theme) ? b.theme : 'meadow';

            if (!name) return json({ error: 'name required' }, 400);
            if (!(score > 0 && score <= 100000)) return json({ error: 'invalid score' }, 400);
            if (!(d >= 1 && d <= 4)) return json({ error: 'invalid difficulty' }, 400);
            if (!(t >= 5 && t <= 3600)) return json({ error: 'invalid time' }, 400);

            const entry = {
                name, score, d, t, stars, seed, theme,
                date: new Date().toISOString().slice(0, 10),
            };

            const board = JSON.parse((await env.SCORES.get('board')) || '[]');
            board.push(entry);
            board.sort((a, z) => z.score - a.score);
            const trimmed = board.slice(0, MAX_BOARD);
            await env.SCORES.put('board', JSON.stringify(trimmed));

            const rank = trimmed.findIndex(
                (e) => e === entry || (e.name === name && e.score === score && e.date === entry.date)
            ) + 1;
            return json({ ok: true, rank: rank > 0 ? rank : null });
        }

        return json({ error: 'not found' }, 404);
    },
};

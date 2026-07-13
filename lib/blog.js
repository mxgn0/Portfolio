/* MXGN blog engine — renders the post list (blog.html) and single posts
   (post.html) from window.BLOG_POSTS (lib/blog-posts.js), in the language
   chosen via the site's lang toggle (localStorage 'site_lang').

   Comments & likes are anonymous — no account, no login. They live in a
   tiny Cloudflare Worker (cf-worker-blog.js). Deploy it once with
   `wrangler deploy -c wrangler-blog.toml` and, if the printed URL differs,
   paste it into BLOG_API below. While the worker is unreachable the blog
   still works — comments & likes just show a small offline note. */
(function () {
    'use strict';

    var BLOG_API = 'https://mxgn-blog.mxgn-studio.workers.dev';

    var POSTS = (window.BLOG_POSTS || []).slice().sort(function (a, b) {
        return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
    });

    /* ---------- ui strings (the blog manages its own, so dynamically
       rendered elements switch language together with the page) ---------- */
    var S = {
        en: {
            empty: 'no posts yet — soon.',
            readMore: 'read more',
            backToBlog: '← back to blog',
            notFound: 'this post does not exist (anymore).',
            comments: 'comments',
            noComments: 'no comments yet — be the first.',
            loading: 'loading…',
            offline: 'comments & likes are offline right now — the post is still all yours to read.',
            namePh: 'name (optional — anonymous is fine)',
            textPh: 'write a comment… no account needed.',
            send: 'send',
            sending: 'sending…',
            error: 'something went wrong — please try again in a minute.',
            anon: 'anonymous',
            like: 'like',
            liked: 'liked'
        },
        de: {
            empty: 'noch keine beiträge — bald.',
            readMore: 'weiterlesen',
            backToBlog: '← zurück zum blog',
            notFound: 'diesen beitrag gibt es nicht (mehr).',
            comments: 'kommentare',
            noComments: 'noch keine kommentare — sei der/die erste.',
            loading: 'lädt…',
            offline: 'kommentare & likes sind gerade offline — der beitrag lässt sich trotzdem lesen.',
            namePh: 'name (optional — anonym ist völlig okay)',
            textPh: 'schreib einen kommentar… ganz ohne anmeldung.',
            send: 'senden',
            sending: 'sendet…',
            error: 'da ist etwas schiefgelaufen — bitte gleich nochmal versuchen.',
            anon: 'anonym',
            like: 'gefällt mir',
            liked: 'gefällt dir'
        }
    };

    function lang() {
        try { return localStorage.getItem('site_lang') === 'de' ? 'de' : 'en'; }
        catch (e) { return 'en'; }
    }
    function t(key) {
        var d = S[lang()] || S.en;
        return d[key] !== undefined ? d[key] : S.en[key];
    }
    function loc(post) {
        return post[lang()] || post.en || post.de || {};
    }
    function fmtDate(iso) {
        try {
            var d = new Date(iso);
            if (isNaN(d)) return iso;
            return d.toLocaleDateString(lang() === 'de' ? 'de-DE' : 'en-GB',
                { day: 'numeric', month: 'long', year: 'numeric' });
        } catch (e) { return iso; }
    }

    function api(path, opts) {
        return fetch(BLOG_API.replace(/\/$/, '') + path, opts).then(function (r) {
            if (!r.ok) throw new Error('http ' + r.status);
            return r.json();
        });
    }
    function post(path, body) {
        return api(path, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
    }

    /* which posts/comments this browser has liked (client-side dedupe) */
    var likedMap = {};
    try { likedMap = JSON.parse(localStorage.getItem('blog_likes') || '{}'); } catch (e) {}
    function saveLiked() {
        try { localStorage.setItem('blog_likes', JSON.stringify(likedMap)); } catch (e) {}
    }

    function el(tag, cls, text) {
        var e = document.createElement(tag);
        if (cls) e.className = cls;
        if (text !== undefined) e.textContent = text;
        return e;
    }

    /* =========================================================
       overview page (blog.html): #blog-list
       ========================================================= */
    var listRoot = document.getElementById('blog-list');
    var counts = null;

    function renderList() {
        if (!listRoot) return;
        listRoot.innerHTML = '';
        if (!POSTS.length) {
            listRoot.appendChild(el('p', 'blog-note', t('empty')));
            return;
        }
        POSTS.forEach(function (p) {
            var L = loc(p);
            var a = el('a', 'post-card');
            a.href = 'post.html?id=' + encodeURIComponent(p.id);
            a.appendChild(el('div', 'post-date', fmtDate(p.date)));
            a.appendChild(el('h3', 'post-title', L.title || p.id));
            var tz = el('p', 'post-teaser');
            tz.innerHTML = L.teaser || '';
            a.appendChild(tz);
            var meta = el('div', 'post-meta');
            var c = counts && counts[p.id];
            if (c) {
                meta.appendChild(el('span', 'meta-count', '♥ ' + c.likes));
                meta.appendChild(el('span', 'meta-count', '💬 ' + c.comments));
            }
            meta.appendChild(el('span', 'read-more', t('readMore') + ' →'));
            a.appendChild(meta);
            listRoot.appendChild(a);
        });
    }

    if (listRoot) {
        renderList();
        if (POSTS.length) {
            var ids = POSTS.map(function (p) { return p.id; }).join(',');
            api('/counts?ids=' + encodeURIComponent(ids))
                .then(function (res) { counts = res; renderList(); })
                .catch(function () { /* worker offline — list works without counts */ });
        }
    }

    /* =========================================================
       single post page (post.html): #post-root + #comments-root
       ========================================================= */
    var postRoot = document.getElementById('post-root');
    var commentsRoot = document.getElementById('comments-root');
    var postId = null, thePost = null, thread = null, threadFailed = false;

    function updateLikeBtn(btn) {
        var n = thread ? thread.likes : null;
        var mine = !!likedMap[postId];
        btn.textContent = '♥ ' + (n === null ? '–' : n) + '  ·  ' + (mine ? t('liked') : t('like'));
        btn.classList.toggle('liked', mine);
    }

    function renderPost() {
        if (!postRoot) return;
        postRoot.innerHTML = '';
        if (!thePost) {
            postRoot.appendChild(el('p', 'blog-note', t('notFound')));
            var back0 = el('a', 'back-link', t('backToBlog'));
            back0.href = 'blog.html';
            postRoot.appendChild(back0);
            return;
        }
        var L = loc(thePost);
        document.title = 'MXGN — ' + (L.title || thePost.id);
        postRoot.appendChild(el('div', 'post-date', fmtDate(thePost.date)));
        postRoot.appendChild(el('h2', 'post-title', L.title || thePost.id));
        var body = el('div', 'post-body');
        body.innerHTML = L.body || '';
        postRoot.appendChild(body);

        var row = el('div', 'like-row');
        var likeBtn = el('button', 'like-btn');
        likeBtn.type = 'button';
        updateLikeBtn(likeBtn);
        likeBtn.addEventListener('click', function () {
            if (threadFailed) return;
            if (!thread) thread = { likes: 0, comments: [] };
            var hadLiked = !!likedMap[postId];
            if (hadLiked) delete likedMap[postId];
            else likedMap[postId] = true;
            saveLiked();
            thread.likes = Math.max(0, (thread.likes || 0) + (hadLiked ? -1 : 1));
            updateLikeBtn(likeBtn);
            post(hadLiked ? '/unlike' : '/like', { id: postId })
                .then(function (res) {
                    if (res && typeof res.likes === 'number') {
                        thread.likes = res.likes;
                        updateLikeBtn(likeBtn);
                    }
                })
                .catch(function () {});
        });
        row.appendChild(likeBtn);
        postRoot.appendChild(row);

        var back = el('a', 'back-link', t('backToBlog'));
        back.href = 'blog.html';
        postRoot.appendChild(back);
    }

    function renderComments() {
        if (!commentsRoot || !thePost) return;
        commentsRoot.innerHTML = '';
        var h = el('h2', 'comments-h',
            t('comments') + (thread ? ' (' + thread.comments.length + ')' : ''));
        commentsRoot.appendChild(h);

        if (threadFailed) {
            commentsRoot.appendChild(el('p', 'blog-note', t('offline')));
            return;
        }
        if (!thread) {
            commentsRoot.appendChild(el('p', 'blog-note', t('loading')));
            return;
        }

        if (!thread.comments.length) {
            commentsRoot.appendChild(el('p', 'blog-note', t('noComments')));
        }
        thread.comments.forEach(function (c) {
            var item = el('div', 'comment');
            var head = el('div', 'comment-head');
            head.appendChild(el('span', 'comment-name', c.name || t('anon')));
            head.appendChild(el('span', 'comment-date', fmtDate(c.date)));
            item.appendChild(head);
            item.appendChild(el('p', 'comment-text', c.text));

            var lk = el('button', 'comment-like', '♥ ' + (c.likes || 0));
            lk.type = 'button';
            var key = postId + '/' + c.cid;
            if (likedMap[key]) lk.classList.add('liked');
            lk.addEventListener('click', function () {
                if (likedMap[key]) return;
                likedMap[key] = true;
                saveLiked();
                c.likes = (c.likes || 0) + 1;
                lk.textContent = '♥ ' + c.likes;
                lk.classList.add('liked');
                post('/comment-like', { id: postId, cid: c.cid }).catch(function () {});
            });
            item.appendChild(lk);
            commentsRoot.appendChild(item);
        });

        /* the form: name optional, honeypot against bots, no login anywhere */
        var form = el('form', 'comment-form');
        var name = el('input');
        name.name = 'name';
        name.maxLength = 24;
        name.placeholder = t('namePh');
        name.autocomplete = 'off';
        var hp = el('input', 'hp');
        hp.name = 'website';
        hp.tabIndex = -1;
        hp.autocomplete = 'off';
        hp.setAttribute('aria-hidden', 'true');
        var text = el('textarea');
        text.name = 'text';
        text.maxLength = 2000;
        text.rows = 4;
        text.required = true;
        text.placeholder = t('textPh');
        var row = el('div', 'form-row');
        var send = el('button', 'send-btn', t('send'));
        send.type = 'submit';
        var status = el('span', 'form-status', '');
        row.appendChild(send);
        row.appendChild(status);
        form.appendChild(name);
        form.appendChild(hp);
        form.appendChild(text);
        form.appendChild(row);
        form.addEventListener('submit', function (ev) {
            ev.preventDefault();
            var val = text.value.trim();
            if (!val) return;
            send.disabled = true;
            status.textContent = t('sending');
            post('/comment', { id: postId, name: name.value, text: val, website: hp.value })
                .then(function (res) {
                    if (res && res.comment) thread.comments.push(res.comment);
                    renderComments();
                })
                .catch(function () {
                    send.disabled = false;
                    status.textContent = t('error');
                });
        });
        commentsRoot.appendChild(form);
    }

    if (postRoot) {
        postId = new URLSearchParams(location.search).get('id') || '';
        thePost = POSTS.filter(function (p) { return p.id === postId; })[0] || null;
        renderPost();
        renderComments();
        if (thePost) {
            api('/thread?id=' + encodeURIComponent(postId))
                .then(function (res) {
                    thread = { likes: res.likes || 0, comments: res.comments || [] };
                    renderPost();
                    renderComments();
                })
                .catch(function () {
                    threadFailed = true;
                    renderComments();
                });
        }
    }

    /* re-render everything when the site language toggles —
       lib/i18n.js sets <html lang="…"> on every switch */
    new MutationObserver(function () {
        if (listRoot) renderList();
        if (postRoot) { renderPost(); renderComments(); }
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();

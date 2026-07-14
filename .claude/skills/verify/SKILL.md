---
name: verify
description: How to verify changes to this static portfolio site in a real browser.
---

# Verifying changes on this site

Pure static site — no build step. Serve the repo root and drive it with
Playwright against the pre-installed Chromium:

```bash
python3 -m http.server 8710 &   # serve repo root
# playwright-core + executablePath: '/opt/pw-browsers/chromium'
```

Useful flows:
- Blog list: `http://localhost:8710/blog.html`
- Single post: `http://localhost:8710/post.html?id=<id>` — ids live in
  `lib/blog-posts.js` (`grep -o "id: '[^']*'" lib/blog-posts.js`)
- Language: `localStorage.site_lang` = `'de'` | `'en'` (default en)
- Contrast/read mode: `localStorage.readable` = `'true'`, toggled by
  `#readability-toggle`; adds `body.readable`
- Blog font size: `localStorage.blog_font_scale` (0.85–1.6), A−/A+ buttons
  on post.html set `--blog-font-scale`

Gotchas:
- Comments/likes call a Cloudflare Worker (`BLOG_API` in `lib/blog.js`);
  offline locally, the UI shows a graceful offline note — that's expected.
- Test tablet (820×1180) and phone (390×844) viewports; the site is
  mostly viewed on mobile.

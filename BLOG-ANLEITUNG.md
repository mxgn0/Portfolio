# Blog — Anleitung

Der Blog besteht aus drei Teilen:

| Datei | Zweck |
|---|---|
| `blog.html` | Übersichtsseite mit allen Beiträgen + Lab-/Game-Dev-Teasern |
| `post.html` | Einzelansicht eines Beitrags (`post.html?id=…`) mit Kommentaren & Likes |
| `lib/blog-posts.js` | **Deine Vorlage** — hier kommen alle Texte rein |

## 1. Neuen Beitrag schreiben

Öffne `lib/blog-posts.js`. Ganz oben in der Datei steht eine Kopiervorlage —
den Block kopieren, oben in die Liste `window.BLOG_POSTS` einfügen und deine
Texte einsetzen:

- `id`: einmalig, nur Kleinbuchstaben/Zahlen/`-`/`_` (landet in der URL und
  ist der Schlüssel für Kommentare & Likes — später nicht mehr ändern!)
- `date`: `JJJJ-MM-TT` — danach wird sortiert (neuester zuerst)
- `de` und `en`: jeweils `title`, `teaser` (für die Übersicht) und `body`
  (der eigentliche Text als HTML, Absätze in `<p>…</p>`)

Bilder/Videos im Text gehen ganz normal:

```html
<img src="images/mein-bild.jpg" alt="">
<video class="content-video" src="videos/mein-video.mp4" controls muted playsinline></video>
```

Datei speichern, committen, pushen — fertig. Mehr ist nicht nötig.
Die Sprache wechselt automatisch mit dem DE/EN-Umschalter unten links.

## 2. Kommentare & Likes aktivieren (einmalig)

Die Kommentare laufen über einen kleinen Cloudflare Worker — gleiches Prinzip
wie dein Rennings-Leaderboard, kostenlos im Free-Tier:

```bash
wrangler kv namespace create BLOG
# → die ausgegebene id in wrangler-blog.toml bei "REPLACE_ME" eintragen

wrangler deploy -c wrangler-blog.toml
# → gibt die Worker-URL aus
```

`lib/blog.js` erwartet standardmäßig `https://mxgn-blog.mxgn-studio.workers.dev`.
Falls deine Worker-URL anders lautet, trage sie oben in `lib/blog.js` bei
`BLOG_API` ein.

Solange der Worker nicht deployt ist, funktioniert der Blog trotzdem —
Kommentare & Likes zeigen dann nur einen dezenten Offline-Hinweis.

**So funktionieren Kommentare:** komplett anonym, kein Login. Name ist
optional (leer = „anonym"). Gegen Spam gibt es ein unsichtbares
Honeypot-Feld und eine 60-Sekunden-Abklingzeit pro IP. Likes gibt es
für Beiträge (an/aus pro Browser) und für einzelne Kommentare.

## 3. Kommentar löschen (Moderation)

```bash
# Thread ansehen (post-id = die id aus blog-posts.js):
wrangler kv key get "t:hallo-blog" --binding BLOG -c wrangler-blog.toml --remote

# JSON kopieren, den Kommentar aus dem "comments"-Array entfernen, zurückschreiben:
wrangler kv key put "t:hallo-blog" '<bearbeitetes JSON>' --binding BLOG -c wrangler-blog.toml --remote
```

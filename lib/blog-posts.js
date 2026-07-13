/* ============================================================
   MXGN BLOG — BEITRÄGE / POSTS
   ============================================================

   NEUEN BEITRAG HINZUFÜGEN — so geht's:

   1. Den Vorlagen-Block unten kopieren.
   2. Ihn oben in die Liste window.BLOG_POSTS einfügen
      (die Reihenfolge ist egal — sortiert wird nach `date`).
   3. Deutsche und englische Texte einsetzen. Fertig.

   ---------- VORLAGE (kopieren & ausfüllen) ----------

    {
        id: 'mein-beitrag',          // einmalig & url-tauglich: nur a-z, 0-9, - und _
        date: '2026-07-13',          // JJJJ-MM-TT — bestimmt die Sortierung
        de: {
            title: 'Titel auf Deutsch',
            teaser: 'Ein bis zwei Sätze für die Übersichtsseite.',
            body: `
                <p>Dein deutscher Text. Jeder Absatz kommt in ein &lt;p&gt;…&lt;/p&gt;.</p>
                <p>Zwischenüberschriften, Bilder und Videos gehen auch:</p>
                <h3>Eine Zwischenüberschrift</h3>
                <img src="images/beispiel.jpg" alt="">
                <video class="content-video" src="videos/beispiel.mp4" controls muted playsinline></video>
            `
        },
        en: {
            title: 'Title in English',
            teaser: 'One or two sentences for the overview page.',
            body: `
                <p>Your English text. Each paragraph goes into a &lt;p&gt;…&lt;/p&gt;.</p>
            `
        }
    },

   ----------------------------------------------------

   Hinweise:
   - Im body KEINE Backticks (`) verwenden — falls nötig, als \` schreiben.
   - Die id landet in der URL (post.html?id=mein-beitrag) und ist der
     Schlüssel für Kommentare & Likes — nach dem Veröffentlichen nicht
     mehr ändern, sonst „verliert" der Beitrag seine Kommentare.
   - Fehlt eine Sprache, wird automatisch die andere angezeigt.
   ============================================================ */

window.BLOG_POSTS = [

    {
        id: 'hallo-blog',
        date: '2026-07-13',
        de: {
            title: 'hallo — der blog ist da',
            teaser: 'Gedanken, Breakdowns und Blicke hinter die Kulissen — ab jetzt auf Deutsch und Englisch.',
            body: `
                <p>Willkommen! Hier entsteht ab jetzt der Blog zu meiner Arbeit: Houdini-Setups, prozedurale Experimente, Game-Dev-Notizen aus den <a href="play.html">Demos</a>, und was im <a href="lab.html">Lab</a> gerade so wächst.</p>
                <p>Jeder Beitrag erscheint auf Deutsch und Englisch — der Sprachumschalter unten links wechselt die Sprache der ganzen Seite.</p>
                <p>Und: Du kannst direkt kommentieren, ganz ohne Anmeldung. Name ist optional, anonym ist völlig okay. Wenn dir ein Beitrag gefällt, lass ein &hearts; da.</p>
            `
        },
        en: {
            title: 'hello — the blog is live',
            teaser: 'Thoughts, breakdowns and behind-the-scenes looks — in English and German from now on.',
            body: `
                <p>Welcome! This is where the blog around my work starts: Houdini setups, procedural experiments, game dev notes from the <a href="play.html">demos</a>, and whatever is currently growing in the <a href="lab.html">lab</a>.</p>
                <p>Every post is published in English and German — the language toggle in the bottom-left corner switches the whole site.</p>
                <p>And: you can comment right away, no account needed. A name is optional, staying anonymous is perfectly fine. If you like a post, leave a &hearts;.</p>
            `
        }
    }

];

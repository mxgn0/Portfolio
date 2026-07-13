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
    id: 'ueberleben-3d-medienproduktion',
    date: '2026-07-13',
    de: {
        title: 'Überleben in der 3D-Medienproduktion — psychische Autonomie und Marktzyklen in der Kunst',
        teaser: 'Eine Untersuchung über kreative Unabhängigkeit, den Konflikt zwischen Ausdruck und Verwertbarkeit und die Herausforderung, in einer überfüllten digitalen Welt ein eigenes Signal zu bewahren.',
        body: `
            <p><strong>I. Das Problem der erzwungenen Ideenfindung</strong></p>

            <p>Ich habe mich viel zu lange in der Schleife verloren, ununterbrochen und krampfhaft nach neuen Ideen zu suchen. Meine wichtigste neue Erkenntnis bricht mit diesem Zwang: Ich entziehe meine Kunst dem fremden Blick und kopple den gesamten Prozess von der Erwartungshaltung anderer ab.</p>

            <p>Sobald man seine kreative Produktion darauf programmiert, primär das wirtschaftliche Überleben zu sichern oder fremde Erwartungen zu spiegeln, liefert man sich einem System aus, das sich selbst ständig verändert und kaum vorhersehbar ist.</p>

            <p>Das erinnert an den Psychologen Erich Fromm, der den Konflikt beschrieb, ob der Mensch im Modus des Habens (Verwertbarkeit, Status) oder im Modus des Seins (reiner Ausdruck) operiert. Wenn ich versuche, Kunst an den Markt anzupassen, verliere ich das reine Sein.</p>

            <p>Ich habe viel zu selten und meistens völlig unbewusst einfach mit einer rohen Emotion angefangen, ohne an das Ergebnis zu denken. Die Lösung gegen das Overthinking ist radikal: kein Motiv, keine Farbe, kein Thema im Kopf vorzugeben – sondern ausschließlich im aktuellen inneren Zustand zu verbleiben.</p>

            <p>Prinzipien für die Arbeit sind gut, aber feste Regeln und Abhängigkeiten blockieren alles.</p>


            <p><strong>II. Die Lücke zwischen künstlerischem Ventil und Dienstleistung — über die Psyche des Künstlers als Produktionsstätte</strong></p>

            <p>Die zunehmende Beschleunigung unserer Gesellschaft verändert die Bedingungen, unter denen Kunst entsteht. Sobald der eigene Lebensunterhalt unmittelbar von künstlerischer Produktion abhängt, verändert sich häufig auch ihr Charakter grundlegend.</p>

            <p>Authentischer Ausdruck gerät in Spannung zur ökonomischen Verwertbarkeit – insbesondere dann, wenn Kunst zugleich als psychisches Ventil dient. Emotionen folgen keinem Produktionsplan.</p>

            <p>In der zeitgenössischen Kreativarbeit zeigt sich deshalb ein wiederkehrendes Muster: Ideenfindung wird als Arbeitsschritt verstanden, der sich durch Disziplin, Wiederholung und kognitive Anstrengung erzwingen lasse.</p>

            <p>Diese Vorstellung folgt jener Leistungslogik, die Byung-Chul Han als Grundmuster der spätmodernen Subjektivität beschreibt: Das Subjekt optimiert sich selbst, selbst dort, wo es eigentlich um Ausdruck gehen sollte. Kreativität wird zum Projekt – und damit zum Gegenstand von Overthinking.</p>

            <p>Dem steht eine alternative Praxis gegenüber, die sich weniger auf das Erzeugen als auf das Zulassen richtet: das Beginnen mit einer Emotion.</p>

            <p>Nicht Motiv, nicht Farbe, nicht Thema bilden den Ausgangspunkt, sondern ein innerer Zustand – ein Sein, das der Formfindung vorausgeht. Diese Umkehrung verschiebt die künstlerische Produktion von einem intentionalen, zielgerichteten Modus in einen rezeptiven Prozess, in dem das Werk aus dem Zustand entsteht, statt gegen ihn erarbeitet zu werden.</p>

            <p>Entscheidend ist dabei die Abwesenheit bindender Regeln: Prinzipien als Orientierung, ja – Abhängigkeiten als Zwang, nein.</p>

            <p>Genau diese Differenz zwischen Prinzip und Regel markiert die Grenze zwischen Autonomie und Fremdbestimmung im schöpferischen Prozess.</p>

            <p>Gerade hierin liegt das zentrale Paradoxon kreativer Arbeit: Ein Zustand vollständiger psychischer Harmonie führt häufig nicht zu intensiverem Ausdruck, sondern zu Beliebigkeit.</p>

            <p>Schmerz, Krisen und Brüche sind oft die eigentlichen Katalysatoren künstlerischer Verdichtung. Entscheidend ist daher nicht die Abwesenheit psychischer Belastung, sondern die Fähigkeit, die eigene Psyche fortwährend zu reflektieren und produktiv zu transformieren.</p>

            <p>Unter den Bedingungen digitaler Netzwerke verschärft sich dieses Spannungsverhältnis zusätzlich. Persönliche Krisen, kollektive Erfahrungen und gesellschaftliche Umbrüche werden permanent dokumentiert, kommentiert und beschleunigt.</p>

            <p>In einem solchen hypermedialen Raum wird Stillstand nahezu unmöglich. Die kontinuierliche Entwicklung der eigenen Psyche und des eigenen Ausdrucks wird damit zu einer Voraussetzung, überhaupt noch ein unverwechselbares Signal im permanenten Strom reproduzierbarer Inhalte zu erzeugen.</p>


            <p><strong>IV. Das Paradoxon des Ausdrucks auf Abruf</strong></p>

            <p>Wer mit Kunst seinen Lebensunterhalt bestreiten möchte, gerät zwangsläufig in Konflikt mit einer zentralen Anforderung des modernen Kulturkapitalismus: Der Markt verlangt die permanente Verfügbarkeit von Ausdruck.</p>

            <p>Emotion soll planbar, terminierbar und wirtschaftlich verwertbar werden.</p>

            <p>Gerade an diesem Punkt gerät das künstlerische Ventil an seine Grenze. Das System verlangt, dass emotionaler Gehalt exakt dann produziert wird, wenn Budgets, Deadlines oder Auftraggeber es vorgeben – und ebenso verschwindet, wenn kein ökonomisches Interesse mehr besteht.</p>

            <p>Für Menschen, deren Kunst aus einem inneren Prozess hervorgeht, bedeutet dies eine tiefgreifende Form psychischer Fremdbestimmung.</p>

            <p>Aus eigener Erfahrung weiß ich, wie schwer es ist, auf Abruf ausdrucksfähig zu sein. Genau hierin zeigt sich jene Form der Selbstausbeutung, die Byung-Chul Han als Krankheitsbild der Leistungsgesellschaft beschreibt: Im Namen vermeintlicher Freiheit wird der Mensch zum Unternehmer seiner eigenen Psyche.</p>

            <p>Mein persönlicher Schluss besteht deshalb nicht darin, den Ausdruck stärker zu disziplinieren, sondern meine Autonomie gegenüber dieser Logik bewusst zurückzugewinnen.</p>


            <p><strong>V. Empirische Evidenz der Marktzyklizität am Beispiel der digitalen 3D-Entwicklung</strong></p>

            <p>Meine berufliche Entwicklung als 3D-Designer verdeutlicht exemplarisch, wie stark kreative Berufe wirtschaftlichen Zyklen unterliegen.</p>

            <p>Zu Beginn meiner Laufbahn existierte in meiner Heimatregion kaum ein Markt für digitales 3D-Design. Erst mit der fortschreitenden Digitalisierung entstand allmählich Nachfrage.</p>

            <p>Wenige Jahre später führte der NFT-Boom zu einem explosionsartigen Wachstum digitaler Kunstmärkte und außergewöhnlich hohen Budgets – bevor dieser Markt innerhalb kurzer Zeit nahezu vollständig kollabierte.</p>

            <p>Dieser Verlauf ist kein Ausnahmefall, sondern Ausdruck einer grundlegenden Eigenschaft wirtschaftlicher Systeme: Kreativmärkte entwickeln sich selten kontinuierlich. Sie entstehen, wachsen, sättigen sich und brechen teilweise wieder zusammen.</p>

            <p>Wer seine gesamte Existenz an einen einzelnen Markt koppelt, macht sich zwangsläufig von dessen Zyklus abhängig.</p>

            <p>Rückblickend bestand mein strategischer Fehler darin, meine Möglichkeiten auf den nationalen Markt zu begrenzen. Fehlende Sprachkenntnisse, begrenzter Internetzugang und mangelndes Kapital verstärkten diese Fixierung zusätzlich.</p>

            <p>Sinnvoller wäre es gewesen, digitale 3D-Produktion von Beginn an international, branchenübergreifend und unabhängig von einzelnen Hypes zu denken.</p>

            <p>Musik, Spielzeug, Produktvisualisierung, Architektur, Film oder Games sind keine getrennten Welten, sondern unterschiedliche Anwendungsfelder derselben gestalterischen Kompetenz.</p>

            <p>Die eigentliche Konsequenz lautet deshalb nicht, den nächsten Marktzyklus vorherzusagen. Sie besteht darin, ein eigenständiges Projekt aufzubauen, das Marktbewegungen nutzt, ohne vollständig von ihnen abhängig zu werden.</p>


            <p><strong>VI. Signalökonomie und das Überleben im Datenmüll</strong></p>

            <p>Noch nie in der Geschichte wurden täglich derart große Mengen digitaler Inhalte produziert wie heute. Bilder, Videos, Musik und Texte entstehen in einer Geschwindigkeit, die ihre tatsächliche Aufnahmefähigkeit längst übersteigt.</p>

            <p>Der überwiegende Teil dieser Inhalte besitzt nur eine sehr kurze Lebensdauer. Er erzeugt kurzfristige Aufmerksamkeit und verschwindet anschließend nahezu vollständig im digitalen Hintergrundrauschen.</p>

            <p>Diese Entwicklung verändert den Wert authentischer Arbeiten grundlegend.</p>

            <p>Je stärker die Informationsdichte zunimmt, desto bedeutender wird das einzelne Signal, das sich von der Masse unterscheidet. Nicht durch Lautstärke oder technische Perfektion, sondern durch Authentizität.</p>

            <p>Originalität entsteht nicht dadurch, dass man möglichst außergewöhnliche Ideen produziert. Sie entsteht vielmehr dort, wo ein Werk unmittelbar aus einer individuellen Erfahrung hervorgeht und dadurch Informationen transportiert, die nicht beliebig reproduzierbar sind.</p>

            <p>Wenn Kunst lediglich versucht, bestehende Trends zu bedienen oder Algorithmen zufriedenzustellen, erhöht sie letztlich nur die Menge des vorhandenen Datenmaterials.</p>

            <p>Entsteht sie dagegen aus einem echten inneren Zustand, besitzt sie zumindest die Möglichkeit, sich vom allgemeinen Rauschen abzuheben.</p>
        `
    },
    en: {
        title: 'survival in 3D media production — psychological autonomy and market cycles in art',
        teaser: 'An investigation into creative independence, the conflict between expression and monetization, and the challenge of preserving an authentic signal in an overloaded digital world.',
        body: `
            <p>English version coming soon.</p>
        `
    }
},
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

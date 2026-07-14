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

            <p>Lange Zeit bin ich immer wieder gegen dieselbe gedankliche Wand gelaufen. Jedes neue Werk sollte möglichst origineller sein als das vorherige. Jede Komposition musste beweisen, dass ich noch kreativ bin. Ich wollte dem Markt zeigen, dass ich existiere – immer außergewöhnlichere Ideen entwickeln, den letzten Post übertreffen und etwas erschaffen, das Aufmerksamkeit erzeugt.</p>

            <p>Immer häufiger begann ich deshalb nicht mehr mit einer Emotion, sondern mit der Frage, was funktionieren könnte. Was gefällt anderen? Was verkauft sich? Was wirkt? Selbst in den Momenten, in denen ich finanziellen Spielraum hatte, investierte ich ihn vor allem in die Hoffnung, dadurch mehr verkaufen oder sichtbarer werden zu können.</p>

            <p>Rückblickend erkenne ich darin einen grundlegenden Denkfehler. Je stärker ich versuchte, Originalität bewusst zu erzwingen, desto weiter entfernte ich mich von dem Zustand, aus dem meine besten Arbeiten überhaupt entstanden waren. Ich suchte nach Ideen, obwohl ich eigentlich nach Ausdruck hätte suchen müssen.</p>

            <p>Meine wichtigste Erkenntnis besteht deshalb seit einer Weile darin, meine Kunst wieder dem fremden Blick zu entziehen. Nicht aus Ablehnung gegenüber dem Publikum, sondern um den Entstehungsprozess von der Erwartung anderer zu befreien.</p>

            <p>Natürlich muss ich von meiner Arbeit leben. Kunst entsteht nicht außerhalb wirtschaftlicher Realität. Doch genau darin liegt das Paradox unserer Zeit.</p>

            <p>Sobald man seine kreative Produktion darauf programmiert, primär das wirtschaftliche Überleben zu sichern oder fremde Erwartungen zu spiegeln, liefert man sich einem System aus, das sich selbst ständig verändert und kaum vorhersehbar ist.</p>

            <p>Das erinnert an den Psychologen Erich Fromm, der den Konflikt zwischen dem Modus des Habens und dem Modus des Seins beschreibt. Im Modus des Habens stehen Verwertbarkeit, Status und Anerkennung im Vordergrund. Im Modus des Seins hingegen geht es um unmittelbaren Ausdruck und authentisches Erleben. Wenn ich versuche, Kunst an den Markt anzupassen, verliere ich genau dieses Sein.</p>

            <p>Ich habe viel zu selten – und meistens völlig unbewusst – einfach mit einer rohen Emotion angefangen, ohne an das Ergebnis zu denken. Die Lösung gegen das Overthinking ist für mich deshalb radikal: kein Motiv, keine Farbe und kein Thema im Kopf vorzugeben, sondern ausschließlich im aktuellen inneren Zustand zu verbleiben.</p>

            <p>Für mich ist Kunst heute weniger ein Mittel, um Erwartungen zu erfüllen, als ein Mittel, um die eigene Wahrnehmung zu verstehen. Sie ist kein Werkzeug, mit dem ich den Markt überzeuge, sondern ein Werkzeug, mit dem ich mich selbst erkenne. Wirtschaftlicher Erfolg kann daraus entstehen – er darf aber nicht länger der Ausgangspunkt sein.</p>

            <p>Prinzipien für die Arbeit sind gut. Feste Regeln und Abhängigkeiten blockieren jedoch genau das, worum es in der Kunst eigentlich geht: einen authentischen Ausdruck entstehen zu lassen.</p>

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
    },
    en: {
          title: 'Surviving in 3D Media Production — Psychological Autonomy and Market Cycles in Art',
          teaser: 'An exploration of creative independence, the conflict between expression and marketability, and the challenge of preserving an authentic signal within an increasingly saturated digital world.',
          body:
              <p><strong>I. The Problem of Forced Ideation</strong></p>
         
              <p>For a long time, I kept running into the same mental wall. Every new piece had to be more original than the last. Every composition had to prove that I was still creative. I wanted to show the market that I existed—to develop increasingly extraordinary ideas, surpass my previous post, and create something capable of attracting attention.</p>
         
              <p>Gradually, I stopped beginning with an emotion and instead began with a question: What will work? What do people like? What sells? What captures attention? Even during periods when I had financial freedom, I invested that freedom primarily in the hope of selling more or becoming more visible.</p>
         
              <p>Looking back, I recognize this as a fundamental mistake. The harder I tried to consciously force originality, the further I drifted away from the state in which my strongest work had always emerged. I searched for ideas when I should have been searching for expression.</p>
         
              <p>My most important realization over the past years has therefore been to withdraw my art from the constant gaze of others. Not because I reject an audience, but because I want to free the creative process from the expectations imposed upon it.</p>
         
              <p>Of course, I have to make a living. Art does not exist outside economic reality. Yet this is precisely the paradox of our time.</p>
         
              <p>Once creative work is programmed primarily for economic survival or to reflect the expectations of others, it becomes dependent on a system that is constantly changing and fundamentally unpredictable.</p>
         
              <p>This recalls Erich Fromm's distinction between the mode of <em>having</em> and the mode of <em>being</em>. In the mode of having, value is measured through marketability, status, and recognition. In the mode of being, value emerges through direct experience and authentic expression. Whenever I attempt to adapt my art to the market, I inevitably lose that state of being.</p>
         
              <p>Far too rarely—and mostly without even realizing it—did I simply begin with a raw emotion, without thinking about the final result. For me, the solution to overthinking has therefore become radical: no predetermined subject, no color palette, no concept. Only the present inner state should determine where the work begins.</p>
         
              <p>Today, I no longer see art primarily as a means of meeting expectations, but as a way of understanding my own perception. It is not a tool for convincing the market; it is a tool for understanding myself. Financial success may emerge from this process, but it can no longer be its point of departure.</p>
         
              <p>Principles provide orientation. Rigid rules and dependencies, however, obstruct precisely what art should make possible: the emergence of authentic expression.</p>
         
              <p><strong>II. The Gap Between Artistic Catharsis and Professional Service — The Artist's Psyche as a Site of Production</strong></p>
         
              <p>The accelerating pace of contemporary society fundamentally changes the conditions under which art is created. As soon as one's livelihood depends directly on artistic production, the nature of that production often changes as well.</p>
         
              <p>Authentic expression inevitably comes into conflict with economic value—especially when artistic practice simultaneously functions as a psychological outlet. Emotions do not follow production schedules.</p>
         
              <p>Within contemporary creative industries, ideation is often treated as a procedural task that can supposedly be generated through discipline, repetition, and cognitive effort alone.</p>
         
              <p>This assumption reflects what Byung-Chul Han identifies as the central logic of the achievement society: the individual continuously optimizes the self, even in domains where genuine expression should prevail. Creativity becomes another project—and therefore another source of overthinking.</p>
         
              <p>An alternative practice begins not with producing, but with allowing. Its point of departure is not an idea but an emotion.</p>
         
              <p>Neither subject, color, nor concept should determine the beginning of a work. Instead, creation starts from an internal state—a mode of being that precedes form itself. This reversal transforms artistic production from an intentional, goal-oriented activity into a receptive process in which the work emerges from one's condition rather than being forced against it.</p>
         
              <p>The decisive factor is the absence of binding rules: principles provide orientation, dependencies create constraint.</p>
         
              <p>This distinction between principle and rule marks the boundary between autonomy and external determination within the creative process.</p>
         
              <p>Paradoxically, complete psychological harmony often produces weaker artistic expression rather than stronger work.</p>
         
              <p>Pain, crisis, and rupture frequently become the true catalysts of artistic condensation. The decisive factor is therefore not the absence of psychological struggle but the ability to continuously reflect upon and transform one's inner life into creative form.</p>
         
              <p>Within digital networks, this tension intensifies even further. Personal crises, collective experiences, and social upheavals are permanently documented, commented upon, and accelerated.</p>
         
              <p>In such a hyper-mediated environment, genuine stillness becomes increasingly rare. The continuous evolution of one's psyche and artistic voice therefore becomes a prerequisite for producing a signal capable of distinguishing itself from an endless stream of reproducible content.</p>
         
              <p><strong>IV. The Paradox of Expression on Demand</strong></p>
         
              <p>Anyone attempting to earn a living through art inevitably confronts one of the central demands of contemporary cultural capitalism: the market expects expression to be permanently available.</p>
         
              <p>Emotion is expected to become schedulable, predictable, and economically exploitable.</p>
         
              <p>At precisely this point, artistic catharsis reaches its limits. The system demands emotional authenticity exactly when budgets, deadlines, or clients require it—and just as readily discards it when economic interest disappears.</p>
         
              <p>For artists whose work emerges from genuine internal processes, this constitutes a profound form of psychological alienation.</p>
         
              <p>From personal experience, I know how difficult it is to become expressive on command. This is precisely the form of self-exploitation that Byung-Chul Han describes as the pathology of the achievement society: under the illusion of freedom, individuals become entrepreneurs of their own psyche.</p>
         
              <p>My conclusion is therefore not to discipline expression more rigorously, but to consciously reclaim my autonomy from this logic.</p>
         
              <p><strong>V. Empirical Evidence of Market Cyclicality in Digital 3D Production</strong></p>
         
              <p>My own professional development as a 3D artist illustrates how strongly creative professions are shaped by economic cycles.</p>
         
              <p>At the beginning of my career, there was virtually no local market for digital 3D design. Only through ongoing digitalization did demand gradually emerge.</p>
         
              <p>A few years later, the NFT boom generated explosive growth within digital art markets and unprecedented budgets—before collapsing almost entirely within a remarkably short period of time.</p>
         
              <p>This trajectory is not exceptional but reflects a fundamental characteristic of economic systems: creative markets rarely evolve linearly. They emerge, expand, saturate, and sometimes collapse.</p>
         
              <p>Anyone whose entire livelihood depends on a single market inevitably becomes dependent on its cycle.</p>
         
              <p>Looking back, my strategic mistake was limiting my perspective to my domestic market. Limited language skills, restricted internet access during my early years, and a lack of financial resources reinforced this dependency.</p>
         
              <p>A more resilient strategy would have been to think internationally and across industries from the very beginning.</p>
         
              <p>Music, toys, product visualization, architecture, film, and games are not separate worlds—they are simply different applications of the same creative competence.</p>
         
              <p>The real conclusion, therefore, is not to predict the next market cycle. It is to build an independent project capable of benefiting from market movements without becoming entirely dependent upon them.</p>
         
              <p><strong>VI. Signal Economics and Surviving the Noise</strong></p>
         
              <p>Never before in history has humanity produced as much digital content each day as it does today. Images, videos, music, and text are created at a speed that far exceeds our collective capacity to absorb them.</p>
         
              <p>Most of this content exists only briefly. It captures attention for a moment before disappearing almost completely into the background noise of the internet.</p>
         
              <p>This development fundamentally changes the value of authentic creative work.</p>
         
              <p>The denser the information landscape becomes, the more valuable every individual signal that genuinely differs from the rest becomes—not through volume or technical perfection, but through authenticity.</p>
         
              <p>Originality does not arise from producing increasingly unusual ideas. It emerges when a work grows directly out of individual experience and therefore communicates something that cannot simply be reproduced.</p>
         
              <p>If art merely attempts to follow trends or satisfy algorithms, it ultimately contributes little more than additional data to an already oversaturated environment.</p>
         
              <p>If, however, it emerges from an authentic inner condition, it at least possesses the possibility of rising above the noise.</p>
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

    }

];

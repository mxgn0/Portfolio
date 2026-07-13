/* Site language toggle — English is the default, German is opt-in.
   The HTML is written in English; elements marked with data-i18n get their
   German text from the dictionary below when DE is active. The choice is
   stored in localStorage and applied on every page that includes this file.
   In-game text (fauna, murmel, rennings canvas UI) and the Impressum legal
   text stay in one language on purpose. */
(function () {
  'use strict';

  var DE = {
    /* shared chrome */
    'back-overview': '&larr; zur&uuml;ck zum portfolio',
    'project-desc': 'Projektbeschreibung',
    'nav-overview': 'portfolio',
    'nav-about': '&uuml;ber mich',
    'footer-rights': '&copy; 2026 Max Jänichen. Alle Rechte vorbehalten.',
    'contact-h2': 'Kontakt',
    'contact-email': 'E-Mail: mxgn.studio@gmail.com',

    /* shared section headings */
    'h2-visualisation': 'Visualisierung',
    'h2-video-sketches': 'Videobeispiele / Skizzen',
    'h2-stills-gallery': 'Standbild-Galerie',
    'h2-stills': 'Standbilder',
    'h2-gallery': 'Galerie',

    /* archived / removed pages */
    'gone-code': 'nicht mehr vorhanden',
    'gone-h2': 'Dieser Inhalt ist nicht mehr verf&uuml;gbar',
    'gone-lead': 'Das Projekt wurde archiviert oder entfernt. Auf der &Uuml;bersicht findest du die aktuellen Arbeiten.',
    'ab-h1': 'Windows-Systemadministrator',
    'nft01-h1': 'NFT-Kollaboration 01',
    'nft02-h1': 'NFT-Kollaboration 02',
    'nft03-h1': 'mxgn0.eth · prozedurale Hard Surface',
    'yugen-h1': 'Yugen Studios · NFT-Kollektionen',

    /* index */
    'index-tagline': '3D Motion Design & Look Dev, Prozeduralismus, visuelle Experimente, Technologie & Kunst',
    'idx-ab': '9-to-5 Windows-Systemadministrator... + wieder Spaß haben',
    'idx-alientools': 'AlienTools GmbH - gelaserte Diamantfräswerkzeuge - CAD-Retopology, VFX, Produktvisualisierung',
    'idx-said': 'Schmuck-Produktvisualisierung',
    'idx-lindt': 'Lindt - Schokoladenbecken-Simulation',
    'idx-medical': 'medizinische Animation - Ohrimplantat',
    'idx-ameira': 'AMEIRA x 2Radwerk - Fahrradschloss-Produktvisualisierung - Amazon-Produktrichtlinien',
    'idx-clouds': 'VFX, Auto fährt durch Wolken',
    'idx-civo': 'VFX, Intro',
    'idx-tym': 'VFX, 3D-Avatar, Facetracking, Bühnenvisualisierung der Sandstorm-Tour',
    'idx-yugen': 'NFT-Kollektionen mit yugenstudios.eth (alecto.eth, mxgn0.eth)',
    'idx-procedural': 'prozedurales Design',
    'idx-nft03': 'mxgn0.eth-Setup, Forschung an prozeduralen Hard-Surface-Algorithmen (...)',
    'idx-nft02': 'NFT-Kollaboration 02 - "For The Culture NFT" von XXXXX &amp; XXXXX (...)',
    'idx-nft01': 'NFT-Kollaboration 01 - "XXXXXX" (...)',
    'idx-thesis': 'Bachelorarbeit an der Hochschule Mittweida (B.Sc.) - Darstellung physikalischer Scherwellen',
    'idx-laser': 'Produkt-/Prozessvisualisierung am Laserzentrum Mittweida - Wissenschaft und Wirtschaft 2',

    /* about */
    'about-h1': '&Uuml;ber mich',
    'about-p1': '(geb. 1995 in Sachsen) ist ein in Berlin lebender 3D-Artist mit Schwerpunkt auf prozeduralen Simulationen, Motion Design und zeitgenössischer Kunst.',
    'about-p2': 'Getrieben von einer breiten, beständigen Neugier bewegt sich Max sicher zwischen den Disziplinen — von prozeduralen Systemen, Simulation und Echtzeitgrafik bis hin zu Rendering, Informatik und generativer Kunst. Es gibt kaum ein Projekt, bei dem ihn nicht die tieferen Nuancen jeder einzelnen Facette von selbst faszinieren. Statt an einem Ort zu bleiben, war sein Weg von ständigen Umzügen durch verschiedene Regionen Deutschlands geprägt, wodurch er während seines Studiums mit vielen Menschen in Großstädten in Kontakt kam. Nach dem Bachelorabschluss in Medieninformatik in Sachsen zog er nach Berlin, wo er heute lebt.',
    'about-p3': '2021 stieg er in den digitalen Kunstmarkt ein, indem er mit vier Kollegen ein Projekt mitgründete, das rund 800.000&nbsp;$ Umsatz erzielte. Es war das erste Mal, dass er digitale Kunst verkaufte. Dieser Erfolg fühlte sich für ihn wie eine tiefe Belohnung und Bestätigung für 13 Jahre Hingabe an 3D und Kunst an. Sein größtes Lebensziel zu erreichen — nicht nur von seiner Kunst zu leben, sondern außergewöhnlich gut von ihr zu leben — hat ihn als Künstler und Mensch grundlegend verändert und eine intensive Reise zu seinem neuen Selbst angestoßen.',
    'about-p4': 'Während viele Krypto derzeit für komplett verzichtbar halten, sieht er darin eine äußerst clevere Infrastruktur, die die Kraft hat, den Kunstmarkt dauerhaft zu digitalisieren — auch wenn ihre langfristige Zukunft offen bleibt und institutionelle Interessen ihre Dynamik unweigerlich neu formen werden. Diese Umbrüche zu navigieren hat seine grundlegende Haltung nur bestärkt: Nachdem die rasante Digitalisierung der letzten Jahre das Tempo des Wandels beschleunigt hat, ist eine besonnene, reflektierte Perspektive wertvoller denn je.',

    /* AlienTools */
    'at-h1': 'Kunde: AlienTools GmbH',
    'at-h2-milling': 'Fräswerkzeuge',
    'at-h2-process': 'Prozess',
    'at-cap-iguana': 'Iguana – Diamantfräswerkzeug, Turntable',
    'at-cap-marlin': 'Marlin – Diamantfräswerkzeug, Turntable',
    'at-cap-retopo': 'Retopology-Arbeitsumgebung',
    'at-cap-pfv-spread': 'Punkte aus Volumen – Streuung',
    'at-cap-pfv-spreadrot': 'Punkte aus Volumen – Streuung &amp; Rotation',
    'at-cap-carving': 'Carving von Punkten aus Volumen',
    'at-cap-smoke': 'Rauchsimulation',
    'at-cap-uv': 'Fräs-UV-Test',
    'at-cap-particles': 'Fräspartikel',
    'at-cap-drill-rot': 'Bohrer – Rauch in den Rotationsbereichen',
    'at-cap-drill-test': 'Bohrer – Rauchtest',
    'at-cap-zecha': 'Zecha – überarbeiteter Rauch',
    'at-desc': 'CAD-Retopology, UV-Erstellung für Materialien, Animation, VFX (Rauch, Partikel)',

    /* Laserzentrum */
    'lz-cap-laser': 'Laserhärteprozess – Produktvisualisierung',
    'lz-desc': 'Produktvisualisierung eines Laserprozesses zur Härtung von Metall für medizinische Anwendungen',

    /* Lindt */
    'lindt-cap-final': 'Schokoladenbecken – finale Simulation',
    'lindt-cap-dev0': 'Viskosität &amp; Oberflächenspannung – Entwicklungsdurchlauf 0',
    'lindt-cap-dev1': 'Viskosität &amp; Oberflächenspannung – Entwicklungsdurchlauf 1',
    'lindt-cap-dev2': 'Viskosität &amp; Oberflächenspannung – Entwicklungsdurchlauf 2',
    'lindt-cap-dev3': 'Viskosität &amp; Oberflächenspannung – Entwicklungsdurchlauf 3',
    'lindt-cap-dev4': 'Viskosität &amp; Oberflächenspannung – Entwicklungsdurchlauf 4',
    'lindt-cap-dev5': 'Viskosität &amp; Oberflächenspannung – Entwicklungsdurchlauf 5',
    'lindt-cap-dev6': 'Viskosität &amp; Oberflächenspannung – Entwicklungsdurchlauf 6',
    'lindt-cap-dev7': 'Viskosität &amp; Oberflächenspannung – Entwicklungsdurchlauf 7',
    'lindt-desc': 'Simulation eines Schokoladenbeckens',

    /* Medical Animation */
    'med-h1': 'Medizinische Animation',
    'med-cap-preview': 'Elektrodeninsertion – Vorschau',
    'med-cap-eased': 'Elektrodeninsertion – geglättet, Feedback-Durchlauf 4',
    'med-cap-beauty': 'Beauty-Render',
    'med-desc': 'Ohrimplantat – Elektrodeninsertion.',

    /* Portraits / Facetracking */
    'por-h1': 'Porträts, Facetracking',
    'por-cap-headrig': 'Prozedurales Kopfpose-Rig',
    'por-cap-metahuman': 'Metahuman-Skizze',
    'por-cap-ft1': 'Facetracking-Test 1',
    'por-cap-ft3': 'Facetracking-Test 3',
    'por-cap-ft4': 'Facetracking-Test 4',
    'por-cap-cables': 'Kabelschleifen-Simulation',
    'por-cap-mx1': 'Metahuman x Houdini – Durchlauf 1',
    'por-cap-mx2': 'Metahuman x Houdini – Durchlauf 2',
    'por-cap-tym': 'TYM Spacecowboy Tour - Bühnenvisualisierung &amp; digitaler Avatar',
    'por-desc': ' - Workflow für prozedurale Metahuman-Assets und Simulationen',

    /* Product Visualizations (Ameira) */
    'pv-h1': 'Fahrradschloss-Produktvisualisierung, CAD-Retopology, prozedurales Setup',
    'pv-client': 'Kunde: Ameira - 2Radwerk',
    'pv-desc': 'Prozeduraler CAD-Retopology-Workflow, Korrekturen am Geometriemodell, Compositing, gebunden an die Amazon-Produktbild-Richtlinien',

    /* Scaffolding */
    'sc-h1': 'prozedurales Gerüst-Experiment',
    'sc-h2': 'Detailstufen',
    'sc-cap-01': 'Detailstufe 01',
    'sc-cap-first2': 'Die ersten zwei Detaildurchläufe',
    'sc-cap-base': 'Grundstruktur',
    'sc-desc': 'unendliche Gerüststrukturen, wachsende Detailstufen, meditative Erkundung',

    /* Thesis */
    'th-h1': 'Bachelorarbeit an der Hochschule Mittweida (B.Sc.) - Darstellung physikalischer Scherwellen',
    'th-cap-homog': 'Darstellung homogenen Gewebes',
    'th-cap-inhomog': 'Darstellung inhomogenen Gewebes',
    'th-desc': 'Dieses Projekt zeigt eine 3D-Simulation, in der ein Raster aus Kugeln Hautstrukturen vereinfacht abbildet. Die Kugeln kollidieren physikalisch korrekt miteinander und stellen so hartes oder weiches Gewebe während einer Ultraschalluntersuchung dar. Die Simulation wird an der Charité Berlin als Lehrvideo eingesetzt.',

    /* CIVO */
    'civo-cap': 'Song-Intro-VFX – „Smash or Pass“',
    'civo-desc': 'VFX-Intro für das Musikvideo „CIVO - Smash or Pass“',

    /* clouds (IH Motion) */
    'cl-h1': 'VFX-Simulationsunterstützung für IH Motion',
    'cl-h2': 'Wolkensimulation',
    'cl-cap-car1': 'Auto fährt durch Wolken – Durchlauf 1',
    'cl-cap-car2': 'Auto fährt durch Wolken – Durchlauf 2',
    'cl-cap-study1': 'Wolkensimulation – Studie 1',
    'cl-cap-study2': 'Wolkensimulation – Studie 2',
    'cl-cap-study3': 'Wolkensimulation – Studie 3',
    'cl-desc': 'Wolkenkollisions-Experimente mit Houdini',

    /* said (jewelry) */
    'said-h1': 'Produktvisualisierung, prozedurales Setup',
    'said-cap': 'Schmuck-Render – Skizzendurchlauf',
    'said-desc': 'Prozedurale Retopology, Korrekturen am Geometriemodell, Compositing, Postproduktion in Karma und Copernicus.',

    /* TYM */
    'tym-cap-hero': 'TYM Spacecowboy Tour - Festival-Bühnenvisualisierung &amp; digitaler Avatar (Splash Festival 2024)',
    'tym-h3-spacecar': 'Spacecar 200 – Hard-Surface-Design &amp; Rendering',
    'tym-h3-sandstorm': 'Spacecar 200 – Sandsturm-Umgebung, Rauchsimulation &amp; Wüsten-Heightfield',
    'tym-h3-avatar': '3D-TYM-Avatar – Facetracking, Accessoires, Stoff- &amp; Haarsimulation, gameready',
    'tym-h3-poster': 'Sandstorm-Tour – Konzept &amp; Poster',
    'tym-h3-butterfly': 'Butterfly Tribal Slime – Simulation, Cover, Canvas',
    'tym-desc': 'verschiedene Projekte, Management',

    /* procedural hard surface (R&D) */
    'phs-h1': 'F&amp;E / Simulation',
    'phs-h2-volume': 'Volume Noise auf dem Torso',
    'phs-cap-v': 'Volume Noise – vertikal',
    'phs-cap-h': 'Volume Noise – horizontal',
    'phs-desc': 'prozedurale Experimente',

    /* play (game dev demos) */
    'play-tagline': 'game dev demos &mdash; prozedural, physikalisch &amp; simulationen',
    'play-h2': 'Spielen',
    'play-hint': 'am besten auf dem Handy &mdash; einfach kippen. Desktop geht auch: Pfeiltasten verschieben die Schwerkraft.',
    'tag-play': '&#9654; jetzt spielen',
    'tag-soon': 'bald verf&uuml;gbar',
    'card-lemmings': 'Auf der Flucht. Kipp dein Handy &ndash; die ganze Welt ist physikalischer Pixelsand, aber dein Vorrat an Sand &amp; Wasser ist begrenzt. F&uuml;hre sie durch prozedurale Welten mit 1&ndash;4 Etagen: schwimmen, segeln, hacken, brennen, klettern, Br&uuml;cken bauen, Tore &ouml;ffnen. Punkte, Sterne, Serien &amp; Bestenliste. &copy; MXGN',
    'card-moerble': 'Eine Murmel im prozeduralen Labyrinth &mdash; die Schwerkraft ist dein einziger Controller. Kipp dein Handy, um sie an L&ouml;chern, Sand, Eis und Lava vorbeizurollen, sammle M&uuml;nzen, erreiche Checkpoints und den Zielring. Drei Murmeln, vier Labyrinthgr&ouml;&szlig;en, Sterne &amp; Bestenliste. &copy; MXGN',
    'card-fauna': 'Ein 2D-Lauf durch prozedurale Wildnis. W&auml;hle ein Tier &mdash; Affe (Doppelsprung), Hund (Sprinter), Luchs (weite S&auml;tze) oder Storch (Gleiter) &mdash;, sprinte und springe &uuml;ber generiertes Terrain, sammle die goldenen Orbs und erreiche den Bau. Auf Zeit, mit lokaler Bestenliste. Tastatur oder Touch. &copy; MXGN',
    'card-slot4': 'Prozeduraler Spielplatz. Irgendwas mit 3D, Rotation der ganzen Welt, Skins &amp; Freischaltbarem. Ideen reifen.',

    /* blog */
    'blog-tagline': 'blog &mdash; gedanken, breakdowns &amp; blicke hinter die kulissen',
    'blog-explore-h2': 'mehr entdecken',
    'blog-explore-lab': 'live-code-experimente direkt im browser &mdash; simulationen, felder, prozedurales. alles reagiert auf hover, touch und kippen.',
    'blog-explore-play': 'kleine browser-games &mdash; prozedural, physikalisch, mit globalen bestenlisten. am besten am handy: einfach kippen.',
    'tag-lab': '&#9879; zum labor',
    'ql-play': 'game dev demos',
    'ql-play2': 'game dev demos',

    /* lab */
    'lab-tagline': 'visuelles labor - code-experimente',
    'lab-hint': 'alles auf dieser seite ist live-code &mdash; keine videodateien. hover, touch, ziehen oder kippen &mdash; &#x26F6; f&uuml;r vollbild.',
    'lab-h2-dynamics': 'dynamik',
    'lab-h2-matter': 'materie',
    'lab-h2-procedural': 'prozedural',
    'lab-h2-fields': 'felder',
    'tilt-btn': 'neigung aktivieren',
    'lab-tile-pendulum': '<strong>doppelpendel</strong> zwei gelenke, pures chaos. der äußere pendelkörper zeichnet seine bahn in grün — greif ihn, zieh ihn herum und lass los.',
    'lab-tile-ik': '<strong>kinefx ik</strong> eine kette aus 12 gelenken, jedes frame mit fabrik-inverser-kinematik gelöst. das rig jagt deinem cursor hinterher — oder seinem eigenen leerlaufziel, wenn du weg bist.',
    'lab-tile-rbd': '<strong>rbd wall</strong> eine ziegelwand, die auf ihren abriss wartet. klicke oder tippe, um eine ladung zu zünden — die teile nehmen den impuls auf, stürzen, kommen zur ruhe, und die wand stapelt sich neu.',
    'lab-tile-softbody': '<strong>softbody</strong> ein druck-softbody: ein ring aus verlet-punkten, federn und innerem gasdruck. stups ihn an, schieb ihn über den boden, kipp dein handy.',
    'lab-tile-cloth': '<strong>vellum cloth</strong> stoff, an der oberkante festgesteckt — verlet-constraints und etwas wind. zieh fest genug und die nähte reißen; zerfetzt näht er sich selbst wieder zusammen.',
    'lab-tile-lava': '<strong>lava</strong> metaball-lava — hitze steigt auf, kühle klumpen sinken zurück in die schmelze. halte den cursor auf einen klumpen, um ihn aufzuheizen.',
    'lab-tile-wax': '<strong>wachs</strong> eine flamme wandert über eine wachsoberfläche. wo sie verweilt, schmilzt das wachs, ebnet sich und glüht — steuere die flamme mit deinem cursor.',
    'lab-tile-snow': '<strong>schnee</strong> schneefall mit ansammlung: flocken setzen sich zu verwehungen, die mit der zeit absacken und glätten. schieb den wind mit deinem cursor umher.',
    'lab-tile-sand': '<strong>sand</strong> ein falling-sand-zellularautomat. gieße mit dem finger, lass ihn sich auf den vorsprüngen türmen — wird es zu voll, entleert sich der boden.',
    'lab-tile-pyro': '<strong>pyro burst</strong> druckwelle, feuerball, trümmer, rauch. tippe irgendwohin, um zu detonieren — oder warte einfach, es geht gern von allein los.',
    'lab-tile-hardsurface': '<strong>hard surface</strong> prozedural gepanzerte hüllenplatten im greeble-stil. eine scanline fegt über die oberfläche und baut die platten im vorbeigehen neu — hover, um eine zu inspizieren.',
    'lab-tile-growth': '<strong>abstraktes wachstum</strong> space-colonization-wachstum: äste strecken sich nach unsichtbaren attraktorpunkten, spitzen glühen beim wachsen. hover, um es zu füttern — fertig gewachsen beginnt es von vorn.',
    'lab-tile-sparks': '<strong>spark surge</strong> eine cpu-last-visualisierung. hover oder berühre nahe am kern, um die last hochzutreiben — bei volllast laufen die funken rotglühend, schnell, und spalten sich in kleine ableger.',
    'lab-tile-flow': '<strong>flow field</strong> ein paar hundert partikel reiten auf einem unsichtbaren, sich langsam drehenden windfeld. zieh mit cursor oder finger hindurch, um sie vom kurs abzubringen.',
    'lab-tile-lattice': '<strong>punktgitter</strong> ein raster aus punkten, von federn an ort und stelle gehalten. der cursor verbiegt das feld, das kippen deines handys verschiebt das ganze gitter.',
    'lab-tile-parallax': '<strong>parallax ridge</strong> gestaffelte tiefe — sterne, mond und bergkämme bewegen sich unterschiedlich schnell. fahre mit dem cursor darüber oder kipp dein handy.',
    'lab-tile-ripple': '<strong>ripple pool</strong> eine kleine wellengleichungs-simulation. berühre die oberfläche, um wellen hineinzuwerfen — und ab und zu regnet es von selbst.',
    'lab-tile-boids': '<strong>boids</strong> ein kleiner schwarm mit drei regeln: trennen, ausrichten, zusammenhalten. dein cursor ist der jäger — auf der flucht leuchten sie orange.',
    'lab-tile-arc': '<strong>arc gap</strong> hochspannungsbögen springen über eine funkenstrecke — portiert von einem server-monitoring-dashboard, wo das die cpu-last visualisierte; hier steigen entladungsrate und helligkeit einfach an. hover, um den bogen auf deinem cursor zu erden; leg zwei oder mehr finger auf, und sie werden zu den polen.'
  };

  var STORAGE = 'site_lang';
  var EN = {};   // original English innerHTML, captured on first apply

  function currentLang() {
    try { return localStorage.getItem(STORAGE) === 'de' ? 'de' : 'en'; }
    catch (e) { return 'en'; }
  }

  function apply(lang) {
    document.documentElement.setAttribute('lang', lang);
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute('data-i18n');
      if (!(key in EN)) EN[key] = el.innerHTML;
      if (lang === 'de' && DE[key]) el.innerHTML = DE[key];
      else el.innerHTML = EN[key];
    }
    if (btn) {
      btn.textContent = lang === 'de' ? 'EN' : 'DE';
      btn.setAttribute('aria-label', lang === 'de' ? 'Switch to English' : 'Auf Deutsch umschalten');
      btn.title = btn.getAttribute('aria-label');
    }
  }

  /* toggle button — bottom-left counterpart to the floating home button */
  var btn = document.createElement('button');
  btn.id = 'lang-toggle';
  btn.className = 'lang-toggle';
  btn.type = 'button';
  btn.addEventListener('click', function () {
    var next = currentLang() === 'de' ? 'en' : 'de';
    try { localStorage.setItem(STORAGE, next); } catch (e) {}
    apply(next);
  });
  document.body.appendChild(btn);

  apply(currentLang());
})();

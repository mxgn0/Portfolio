/* Site language toggle — English is the default, German is opt-in.
   The HTML is written in English; elements marked with data-i18n get their
   German text from the dictionary below when DE is active. The choice is
   stored in localStorage and applied on every page that includes this file.
   Games (fauna, murmel, rennings) and the lab tiles stay English on purpose —
   their text is part of the game/canvas UI. */
(function () {
  'use strict';

  var DE = {
    /* shared chrome */
    'back-overview': '&larr; zur&uuml;ck zur &Uuml;bersicht',
    'project-desc': 'Projektbeschreibung',
    'nav-overview': '&uuml;bersicht',
    'nav-about': '&uuml;ber mich',

    /* archived / removed pages */
    'gone-code': 'nicht mehr vorhanden',
    'gone-h2': 'Dieser Inhalt ist nicht mehr verf&uuml;gbar',
    'gone-lead': 'Das Projekt wurde archiviert oder entfernt. Auf der &Uuml;bersicht findest du die aktuellen Arbeiten.',

    /* index */
    'index-tagline': '3D Motion Design & Look Dev, Prozeduralismus, visuelle Experimente, Technologie & Kunst',

    /* about */
    'about-h1': '&Uuml;ber mich',
    'about-p1': '(geb. 1995 in Sachsen) ist ein in Berlin lebender 3D-Artist mit Schwerpunkt auf prozeduralen Simulationen, Motion Design und zeitgen&ouml;ssischer Kunst.',
    'about-p2': 'Getrieben von einer breiten, best&auml;ndigen Neugier bewegt sich Max sicher zwischen den Disziplinen &mdash; von prozeduralen Systemen, Simulation und Echtzeitgrafik bis hin zu Rendering, Informatik und generativer Kunst. Es gibt kaum ein Projekt, bei dem ihn nicht die tieferen Nuancen jeder einzelnen Facette faszinieren. Statt an einem Ort zu bleiben, war sein Weg von st&auml;ndigen Umz&uuml;gen durch verschiedene Regionen Deutschlands gepr&auml;gt, wodurch er w&auml;hrend seines ersten Studiums mit vielen Menschen in den gro&szlig;en St&auml;dten in Verbindung kam. Nach dem Abschluss seines Bachelors in Medieninformatik in Sachsen zog er nach Berlin, wo er heute lebt.',
    'about-p3': '2021 betrat er den digitalen Kunstmarkt, indem er gemeinsam mit vier Kollegen ein Projekt gr&uuml;ndete, das rund 800.000&nbsp;US-Dollar Umsatz erzielte &mdash; sein erster Verkauf digitaler Kunst. F&uuml;r ihn f&uuml;hlte sich dieser Erfolg wie eine tiefe Belohnung und Best&auml;tigung f&uuml;r 13 Jahre Hingabe an 3D und Kunst an. Sein gr&ouml;&szlig;tes Lebensziel &mdash; nicht nur von seiner Kunst zu leben, sondern au&szlig;ergew&ouml;hnlich gut von ihr zu leben &mdash; war damit erreicht; dieser Meilenstein ver&auml;nderte ihn als K&uuml;nstler wie als Mensch grundlegend und stie&szlig; eine intensive Auseinandersetzung mit seinem neuen Selbst an.',
    'about-p4': 'W&auml;hrend viele Krypto derzeit pauschal abtun, sieht er darin eine &auml;u&szlig;erst clevere Infrastruktur, die den Kunstmarkt dauerhaft digitalisieren kann &mdash; auch wenn ihre langfristige Zukunft offen bleibt und institutionelle Interessen ihre Dynamik unweigerlich ver&auml;ndern werden. Der Umgang mit diesen Umbr&uuml;chen hat seine grundlegende Haltung nur best&auml;rkt: Nachdem die rasante Digitalisierung der letzten Jahre das Tempo des Wandels noch einmal beschleunigt hat, ist eine besonnene, reflektierte Perspektive wertvoller denn je.',

    /* play (game dev demos) */
    'play-tagline': 'game dev demos &mdash; prozedural, physikalisch & simulationen',
    'play-h2': 'Spielen',
    'play-hint': 'am besten auf dem Handy &mdash; einfach kippen. Desktop geht auch: Pfeiltasten verschieben die Schwerkraft.',
    'tag-play': '&#9654; jetzt spielen',
    'tag-soon': 'bald verf&uuml;gbar',
    'card-lemmings': 'Auf der Flucht. Kipp dein Handy &ndash; die ganze Welt ist physikalischer Pixelsand, aber dein Vorrat an Sand &amp; Wasser ist begrenzt. F&uuml;hre sie durch prozedurale Welten mit 1&ndash;4 Etagen: schwimmen, segeln, hacken, brennen, klettern, Br&uuml;cken bauen, Tore &ouml;ffnen. Punkte, Sterne, Serien &amp; Bestenliste. &copy; MXGN',
    'card-moerble': 'Eine Murmel im prozeduralen Labyrinth &mdash; die Schwerkraft ist dein einziger Controller. Kipp dein Handy, um sie an L&ouml;chern, Sand, Eis und Lava vorbeizurollen, sammle M&uuml;nzen, erreiche Checkpoints und den Zielring. Drei Murmeln, vier Labyrinthgr&ouml;&szlig;en, Sterne &amp; Bestenliste. &copy; MXGN',
    'card-fauna': 'Ein 2D-Lauf durch prozedurale Wildnis. W&auml;hle ein Tier &mdash; Affe (Doppelsprung), Hund (Sprinter), Luchs (weite S&auml;tze) oder Storch (Gleiter) &mdash;, sprinte und springe &uuml;ber generiertes Terrain, sammle die goldenen Orbs und erreiche den Bau. Auf Zeit, mit lokaler Bestenliste. Tastatur oder Touch. &copy; MXGN',
    'card-slot4': 'Prozeduraler Spielplatz. Irgendwas mit 3D, Rotation der ganzen Welt, Skins &amp; Freischaltbarem. Ideen reifen.',

    /* lab */
    'lab-tagline': 'visuelles labor - code-experimente',
    'lab-hint': 'alles auf dieser seite ist live-code &mdash; keine videodateien. hover, touch, ziehen oder kippen &mdash; &#x26F6; f&uuml;r vollbild.'
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
      /* label names the language you switch TO, styled like "x contrast" */
      btn.textContent = lang === 'de' ? 'x english' : 'x deutsch';
      btn.setAttribute('aria-label', lang === 'de' ? 'Switch to English' : 'Auf Deutsch umschalten');
      btn.title = btn.getAttribute('aria-label');
    }
  }

  /* floating toggle — text chip top right, right under the contrast toggle */
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

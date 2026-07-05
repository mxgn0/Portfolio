/* Floating navigation button – shared across all pages.
   On sub-pages: a fixed "back to home" button that scrolls along with the page.
   On the homepage: a "scroll to top" button that appears once you've scrolled down. */
(function () {
  if (document.getElementById('floating-home')) return;

  function arrowBackSVG() {
    return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
      '<path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  function arrowUpSVG() {
    return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
      '<path d="M12 19V6M6 12l6-6 6 6" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  var path = location.pathname;
  var isIndex =
    document.body.getAttribute('data-page') === 'index' ||
    path === '/' ||
    /\/index\.html?$/.test(path) ||
    /\/Portfolio\/?$/.test(path);

  var btn = document.createElement('a');
  btn.id = 'floating-home';
  btn.className = 'floating-home';

  if (isIndex) {
    btn.href = '#home';
    btn.setAttribute('aria-label', 'Nach oben scrollen');
    btn.title = 'nach oben';
    btn.innerHTML = arrowUpSVG();
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    var onScroll = function () {
      if (window.scrollY > 300) btn.classList.add('visible');
      else btn.classList.remove('visible');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  } else {
    btn.href = 'index.html';
    btn.setAttribute('aria-label', 'Zurück zur Startseite');
    btn.title = 'home';
    btn.innerHTML = arrowBackSVG();
    btn.classList.add('visible');
  }

  document.body.appendChild(btn);

  // Wire up the custom cursor rotation, matching the site's existing hover behaviour.
  var cursor = document.getElementById('cursor-dot');
  if (cursor) {
    btn.addEventListener('mouseenter', function () { cursor.classList.add('rotate'); });
    btn.addEventListener('mouseleave', function () { cursor.classList.remove('rotate'); });
  }
})();

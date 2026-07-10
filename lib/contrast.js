/* Contrast / read-mode toggle — shared across all content pages.
   Injects the same "x contrast" control the homepage had, toggles
   body.readable (light background, dark text — rules live in style.css)
   and persists the choice in localStorage under the same key the
   homepage always used, so existing visitors keep their setting. */
(function () {
  'use strict';
  if (document.getElementById('readability-toggle')) return;

  var body = document.body;

  var toggle = document.createElement('div');
  toggle.id = 'readability-toggle';
  toggle.className = 'readability-toggle';
  toggle.setAttribute('role', 'button');
  toggle.setAttribute('tabindex', '0');
  toggle.setAttribute('aria-label', 'Toggle high-contrast read mode');

  function label() {
    toggle.textContent = body.classList.contains('readable') ? 'o contrast' : 'x contrast';
  }

  try {
    if (localStorage.getItem('readable') === 'true') body.classList.add('readable');
  } catch (e) {}
  label();

  function flip() {
    body.classList.toggle('readable');
    try { localStorage.setItem('readable', body.classList.contains('readable')); } catch (e) {}
    label();
  }
  toggle.addEventListener('click', flip);
  toggle.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); }
  });

  document.body.appendChild(toggle);
})();

// script.js - Toggle menú hamburguesa accesible
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.nav-toggle');
  const navList = document.getElementById('primary-navigation');

  if (!btn || !navList) return;

  btn.addEventListener('click', function () {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navList.classList.contains('open')) {
      navList.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });

  document.addEventListener('click', function (e) {
    if (!navList.classList.contains('open')) return;
    const clickDentro = navList.contains(e.target) || btn.contains(e.target);
    if (!clickDentro) {
      navList.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});
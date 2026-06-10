/* Shared nav behaviour — included on every inner page */
(function () {
  const toggle   = document.getElementById('nt');
  const menu     = document.getElementById('mn');
  const hamOpen  = document.getElementById('io');
  const hamClose = document.getElementById('ic');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      if (hamOpen)  hamOpen.style.display  = open ? 'none' : '';
      if (hamClose) hamClose.style.display = open ? ''     : 'none';
    });
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
        if (hamOpen)  hamOpen.style.display  = '';
        if (hamClose) hamClose.style.display = 'none';
      });
    });
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -28px 0px' }
    );
    revealEls.forEach(el => obs.observe(el));
  }
})();

(() => {
  const init = () => {
    // Toggle mostrar/ocultar contraseña (ojo con slash)
    const pwInput = document.querySelector('.pasword-input');
    const toggleBtn = document.querySelector('.toggle-password');

    if (pwInput && toggleBtn) {
      const setState = (visible) => {
        toggleBtn.classList.toggle('is-visible', visible);
        toggleBtn.setAttribute('aria-pressed', String(visible));
        toggleBtn.setAttribute('aria-label', visible ? 'Ocultar contraseña' : 'Mostrar contraseña');
      };

      // Estado inicial: password oculto
      setState(false);

      toggleBtn.addEventListener('click', () => {
        const willShow = pwInput.type === 'password';
        pwInput.type = willShow ? 'text' : 'password';
        setState(willShow);
      });
    }

    // Menu hamburguesa (cuando reduces ventana)
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.menu-overlay');

    if (hamburger && menu && overlay) {
      const setOpen = (open) => {
        hamburger.classList.toggle('active', open);
        menu.classList.toggle('active', open);
        overlay.classList.toggle('active', open);
        hamburger.setAttribute('aria-expanded', String(open));
      };

      hamburger.addEventListener('click', () => {
        setOpen(!menu.classList.contains('active'));
      });

      overlay.addEventListener('click', () => setOpen(false));

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setOpen(false);
      });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

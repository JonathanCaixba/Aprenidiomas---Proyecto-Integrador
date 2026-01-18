// Animación del logo al cargar la página y al hacer clic

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    const video = document.querySelector("#parrot-video");

    // Función para activar la animación del logo
    const triggerAnimation = () => {
        logo.classList.remove("animate-logo");
        void logo.offsetWidth;
        logo.classList.add("animate-logo");
    };

    // 1. Acción al cargar la página para el logo
    triggerAnimation();

    // 2. Acción al hacer clic en el logo
    logo.addEventListener("click", triggerAnimation);

    // Control del video: reproducir al cargar y loop con delay de 30 segundos
    const playVideoWithDelay = () => {
        video.play();  // Reproduce el video
    };

    // Inicia el video al cargar la página
    playVideoWithDelay();

    // Al terminar el video, espera 20 segundos y reproduce de nuevo
    video.addEventListener("ended", () => {
        setTimeout(playVideoWithDelay, 20000);  // 20000 ms = 20 segundos
    });
});

// Lógica del menú hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.menu-overlay');
    const body = document.body;

    function toggleMenu() {
        // Alternar clases activas
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');

        // Lógica de Scroll Lock
        if (navMenu.classList.contains('active')) {
            body.style.overflow = 'hidden'; // Congela el fondo
            hamburger.setAttribute('aria-expanded', 'true');
        } else {
            body.style.overflow = 'visible'; // Libera el fondo
            hamburger.setAttribute('aria-expanded', 'false');
        }
    }

    // Eventos
    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu); // Cerrar al dar click fuera

    // Cerrar menú al elegir una opción
    document.querySelectorAll('.nav-links a[data-link]').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) toggleMenu();
        });
    });
});
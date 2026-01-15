// Animación del logo al cargar la página y al hacer clic

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");

    // Función para activar la animación
    const triggerAnimation = () => {
        logo.classList.remove("animate-logo");
        void logo.offsetWidth;
        logo.classList.add("animate-logo");
    };

    // 1. Acción al cargar la página
    triggerAnimation();

    // 2. Acción al hacer clic
    logo.addEventListener("click", triggerAnimation);
});


// Animación de título letra por letra
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    const text = title.textContent.trim();
    title.textContent = "";

    let charIndex = 0;

    const words = text.split(" ");

    words.forEach((wordText) => {
        const wordSpan = document.createElement("span");
        wordSpan.classList.add("word");
        const chars = wordText.split("");
        chars.forEach((char) => {
            const charSpan = document.createElement("span");
            charSpan.classList.add("char");
            charSpan.textContent = char;
            charSpan.style.animationDelay = `${charIndex * 0.05}s`;
            wordSpan.appendChild(charSpan);
            charIndex++;
        });
        title.appendChild(wordSpan);
        charIndex++;
    });
});


// Lógica del menú hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.menu-overlay');
    const body = document.body;
    const html = document.documentElement;

    function toggleMenu() {
        // Alternar clases activas
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');

        // Lógica de Scroll Lock (Senior UX)
        if (navMenu.classList.contains('active')) {
            body.classList.add('no-scroll');
            html.classList.add('no-scroll'); // Add to HTML too
            // ...
        } else {
            body.classList.remove('no-scroll');
            html.classList.remove('no-scroll');
            // ...
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

//cards de panel 4

const cards = document.querySelectorAll('.flip-card');

document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", () => {
        document.querySelectorAll(".flip-card").forEach(c => {
            if (c !== card) c.classList.remove("is-flipped");
        });
        card.classList.toggle("is-flipped");
    });
});

//dots de panel 2

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.stats-track');
    const slides = document.querySelectorAll('.stat-item');
    const dotsContainer = document.querySelector('.stats-dots');

    if (!track || slides.length === 0 || !dotsContainer) return;

    let index = 0;
    let interval;
    let startX = 0;

    /* Crear dots */
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('button');

    function goToSlide(i) {
        index = i;
        track.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        goToSlide(index);
    }

    /* Autoplay */
    function startAutoPlay() {
        interval = setInterval(nextSlide, 3500);
    }

    function stopAutoPlay() {
        clearInterval(interval);
    }

    startAutoPlay();

    /* Pausa al hover */
    track.addEventListener('mouseenter', stopAutoPlay);
    track.addEventListener('mouseleave', startAutoPlay);

    /* Swipe móvil */
    track.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', e => {
        const endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) nextSlide();
        if (endX - startX > 50) {
            index = (index - 1 + slides.length) % slides.length;
            goToSlide(index);
        }
    });
});
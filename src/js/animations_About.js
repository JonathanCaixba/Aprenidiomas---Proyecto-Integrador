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
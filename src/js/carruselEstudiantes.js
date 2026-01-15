document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const imgs = document.querySelectorAll('.carousel-track img');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  const total = imgs.length;
  let index = 1; 
  const size = 100;
  let isMoving = false;

  // Posición inicial
  track.style.transform = `translateX(-${index * size}%)`;

  function moveNext() {
    if (isMoving) return;
    isMoving = true;

    index++;
    track.style.transition = 'transform 0.45s ease';
    track.style.transform = `translateX(-${index * size}%)`;
  }

  function movePrev() {
    if (isMoving) return;
    isMoving = true;

    index--;
    track.style.transition = 'transform 0.45s ease';
    track.style.transform = `translateX(-${index * size}%)`;
  }

  track.addEventListener('transitionend', () => {
    // Si estamos en el clon del final, saltamos al primero
    if (index === total - 1) {
      track.style.transition = 'none';
      index = 1;
      track.style.transform = `translateX(-${index * size}%)`;
    }

    // Si estamos en el clon del inicio, saltamos al último 
    if (index === 0) {
      track.style.transition = 'none';
      index = total - 2;
      track.style.transform = `translateX(-${index * size}%)`;
    }

    isMoving = false;
  });

  nextBtn.addEventListener('click', moveNext);
  prevBtn.addEventListener('click', movePrev);
});
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.text-carousel-track');
  const slides = document.querySelectorAll('.text-slide');
  const nextBtn = document.querySelector('.text-next');
  const prevBtn = document.querySelector('.text-prev');

  const total = slides.length;
  let index = 1;
  const size = 100;
  let isMoving = false;

  // posición inicial
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
    // clon final → primer real
    if (index === total - 1) {
      track.style.transition = 'none';
      index = 1;
      track.style.transform = `translateX(-${index * size}%)`;
    }

    // clon inicial → último real
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

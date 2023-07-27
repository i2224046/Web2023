const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
  updateSlider();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slider.children.length;
  updateSlider();
});

function updateSlider() {
  const slideWidth = slider.children[0].offsetWidth;
  const offset = -currentIndex * slideWidth;
  slider.style.transform = `translateX(${offset}px)`;
}


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





const fadeInElements = document.querySelectorAll('.fade-in-element');

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function fadeElementsOnScroll() {
  fadeInElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.style.opacity = 1;
    }
  });
}

window.addEventListener('scroll', fadeElementsOnScroll);
fadeElementsOnScroll();

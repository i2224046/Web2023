// クラス名を持つ要素を全て取得
const sliderContainers = document.querySelectorAll('.slider-container');

sliderContainers.forEach(container => {
  const slider = container.querySelector('.slider');
  const prevButton = container.querySelector('.prev-button');
  const nextButton = container.querySelector('.next-button');
  
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
});

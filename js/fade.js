const fadeInElements = document.querySelectorAll('.card-container');

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

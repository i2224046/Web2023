$(document).ready(function() {
  const desiredWidth = 600;
  const desiredHeight = 600;

  const image = document.getElementById('cardImg');
  const naturalWidth = image.naturalWidth;
  const naturalHeight = image.naturalHeight;

  if (naturalWidth > desiredWidth || naturalHeight > desiredHeight) {
    if (naturalWidth / naturalHeight > desiredWidth / desiredHeight) {
      image.style.width = desiredWidth + 'px';
      image.style.height = 'auto';
    } else {
      image.style.width = 'auto';
      image.style.height = desiredHeight + 'px';
    }
  }
});

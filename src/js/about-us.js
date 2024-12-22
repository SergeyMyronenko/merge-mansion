const moreBtn = document.querySelector('.more-button');
const blurImages = document.querySelectorAll('.about-blur');
const plusIcon = document.querySelectorAll('.about-blur-image');

moreBtn.addEventListener('click', readMore);
blurImages.forEach(image => image.addEventListener('touchstart', onblurImage));
blurImages.forEach(image => {
  const plusIcon = image.querySelector('.about-blur-image');
  image.addEventListener('mousemove', () => onblurImage(image, plusIcon));
});

function readMore() {
  const moreText = document.querySelector('.more-text');

  if (moreText.style.display === 'inline') {
    moreText.style.display = 'none';
    moreBtn.textContent = 'Read more';
  } else {
    moreText.style.display = 'inline';
    moreBtn.textContent = 'Close';
  }
}

function onblurImage(image, plusIcon) {
  image.classList.remove('about-blur');
  image.classList.add('about-blur-touch');
  plusIcon.classList.remove('about-blur-image');
  plusIcon.classList.add('about-blur-image-touch');

  setTimeout(() => {
    image.classList.add('about-blur');
    image.classList.remove('about-blur-touch');
    plusIcon.classList.add('about-blur-image');
    plusIcon.classList.remove('about-blur-image-touch');
  }, 5000);
}

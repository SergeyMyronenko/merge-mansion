const moreBtn = document.querySelector('.more-button');
const blurImages = document.querySelectorAll('.about-blur');

moreBtn.addEventListener('click', readMore);
blurImages.forEach(image => image.addEventListener('touchstart', onblurImage));
blurImages.forEach(image =>
  image.addEventListener('mouseover/mouseout', onblurImage)
);

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

function onblurImage(e) {
  e.target.style.backdropFilter = 'none';
  setTimeout(() => {
    e.target.style.backdropFilter = '5px';
  }, 2000);
}

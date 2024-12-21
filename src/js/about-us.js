function readMore() {
  const moreText = document.querySelector('.more-text');
  const moreBtn = document.querySelector('.more-button');

  if (moreText.style.display === 'inline') {
    moreText.style.display = 'none';
    moreBtn.textContent = 'Read more';
  } else {
    moreText.style.display = 'inline';
    moreBtn.textContent = 'Close';
  }
}

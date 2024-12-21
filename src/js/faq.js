import sprite from '../img/sprite.svg';

const faqBtns = document.querySelectorAll('.faq-list-item');
faqBtns.forEach(btn => btn.addEventListener('click', onBtnClick));

function onBtnClick(e) {
  const faqContainer = e.currentTarget;
  const faqIcon = faqContainer.querySelector('use');
  const faqBottomText = faqContainer.querySelector('.faq-bottom-text');

  const isVisible = faqBottomText.classList.contains('is-visible');

  document.querySelectorAll('.faq-list-item').forEach(item => {
    if (item !== faqContainer) {
      item.classList.remove('faq-open');
      item.querySelector('.faq-bottom-text').classList.remove('is-visible');
      item.querySelector('use').setAttribute('href', `${sprite}#icon-down`);
    }
  });

  if (isVisible) {
    faqContainer.classList.remove('faq-open');
    faqBottomText.classList.remove('is-visible');
    faqIcon.setAttribute('href', `${sprite}#icon-down`);
  } else {
    faqContainer.classList.add('faq-open');
    faqBottomText.classList.add('is-visible');
    faqIcon.setAttribute('href', `${sprite}#icon-up`);
  }
}

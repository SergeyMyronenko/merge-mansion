import Swiper from 'swiper';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  const leftArrow = document.getElementById('leftArrow');
  const rightArrow = document.getElementById('rightArrow');

  const gallerySwiper = new Swiper('.gallery-swiper-container', {
    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    slidesPerView: 1,
    initialSlide: 1,
    spaceBetween: 0,
    allowTouchMove: true,
    speed: 800,
    breakpoints: {
      1200: {
        spaceBetween: 20,
        slidesPerView: 3,
        centeredSlides: true,
      },
    },
    on: {
      init: function () {
        document
          .querySelector('.gallery-swiper-container')
          .classList.add('show');
        updateArrows(this);
      },

      slideChange: function () {
        updateArrows(this);
      },
    },
    observer: true,
    observeParents: true,
    watchOverflow: true,
  });

  function updateArrows(swiperInstance) {
    leftArrow.disabled = swiperInstance.isBeginning;
    rightArrow.disabled = swiperInstance.isEnd;
  }

  leftArrow.addEventListener('click', () => {
    gallerySwiper.slidePrev();
  });

  rightArrow.addEventListener('click', () => {
    gallerySwiper.slideNext();
  });
});

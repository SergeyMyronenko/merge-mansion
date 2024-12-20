// import Swiper from 'swiper';
// import 'swiper/css/bundle';

// const leftArrow = document.getElementById('leftArrow');
// const rightArrow = document.getElementById('rightArrow');

// const gallerySwiper = new Swiper('.gallery-swiper-container', {
//   direction: 'horizontal',
//   loop: false,
//   grabCursor: true,
//   slidesPerView: 1,
//   initialSlide: 0,
//   spaceBetween: 2,
//   grabCursor: true,
//   allowTouchMove: true,
//   speed: 500,
//   breakpoints: {
//     1200: {
//       spaceBetween: 2,
//     },
//   },
//   on: {
//     init: () => {
//       document.querySelector('.gallery-swiper-container').classList.add('show');
//     },
//     slideChange: () => {
//       updateArrows();
//     },
//   },
// });

// function updateArrows() {
//   leftArrow.disabled = gallerySwiper.isBeginning;
//   rightArrow.disabled = gallerySwiper.isEnd;
// }

// updateArrows();

// leftArrow.addEventListener('click', () => {
//   gallerySwiper.slidePrev();
// });

// rightArrow.addEventListener('click', () => {
//   gallerySwiper.slideNext();
// });

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
    speed: 500,
    breakpoints: {
      1200: {
        spaceBetween: 2,
      },
    },
    on: {
      init: function () {
        console.log('Swiper initialized');
        document
          .querySelector('.gallery-swiper-container')
          .classList.add('show');
        updateArrows(this);
      },

      slideChange: function () {
        console.log('Slide changed to:', this.realIndex);
        updateArrows(this);
      },
    },
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

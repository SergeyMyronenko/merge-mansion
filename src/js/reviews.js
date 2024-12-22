import Swiper from 'swiper';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  const reviewsDots = document.querySelectorAll('.reviews-dot');

  const reviewsSwiper = new Swiper('.reviews-swiper-container', {
    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    slidesPerView: 1,
    initialSlide: 0,
    spaceBetween: 24,
    speed: 500,
    on: {
      slideChange: () => {
        updateReviewsDots(reviewsSwiper.realIndex);
      },
    },
  });

  function updateReviewsDots(index) {
    reviewsDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  updateReviewsDots(reviewsSwiper.realIndex);

  reviewsDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      reviewsSwiper.slideTo(index);
    });
  });
});

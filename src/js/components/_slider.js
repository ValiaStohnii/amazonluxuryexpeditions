import Swiper, { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';

const swiperTeam = new Swiper('.about-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.about .btn--next',
    prevEl: '.about .btn--prev',
  },
});

const swiperPortfolio = new Swiper('.portfolio-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  draggable: true,
  grabCursor: true,
});

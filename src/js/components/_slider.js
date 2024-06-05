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

const swiperFeatured = new Swiper('.featured-slider', {
  direction: "horizontal",
  slidesPerView: '2',
  spaceBetween: 2,
  mousewheel: true,
});

const swiperDiscover = new Swiper('.discover-slider', {
  direction: "horizontal",
  slidesPerView: 'auto',
  spaceBetween: 2,
  mousewheel: true,
});

const swiperTestimonials = new Swiper('.testimonials-slider', {
  direction: "vertical",
  slidesPerView: '1',
  spaceBetween: 2,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.testimonials .btn--next',
    prevEl: '.testimonials .btn--prev',
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

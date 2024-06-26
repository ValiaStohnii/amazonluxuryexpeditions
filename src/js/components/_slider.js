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
  slidesPerView: 1.2,
  spaceBetween: 2,
  mousewheel: true,
  breakpoints: {
    576: {
      slidesPerView: 2
    }
  }
});

const swiperFeaturedWildlife = new Swiper('.featured-slider--wildlife', {
  direction: "horizontal",
  slidesPerView: '1.2',
  spaceBetween: 10,
  mousewheel: true,
  breakpoints: {
    450: {
      slidesPerView: 1.5
    },
    665: {
      slidesPerView: 2.1
    },
    990: {
      slidesPerView: 2.5
    },
    1230: {
      slidesPerView: 2.74,
      spaceBetween: 30
    }
  }
});

const swiperDiscover = new Swiper('.discover-slider', {
  direction: "horizontal",
  slidesPerView: 1.2,
  spaceBetween: 2,
  mousewheel: true,
  breakpoints: {
    576: {
      slidesPerView: 'auto'
    }
  }
});

const swiperTestimonials = new Swiper('.testimonials-slider', {
  direction: "vertical",
  slidesPerView: '1',
  spaceBetween: 1,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.testimonials .btn--next',
    prevEl: '.testimonials .btn--prev',
  },
});

const swiperFaq = new Swiper('.faq-slider', {
  direction: "vertical",
  slidesPerView: '1',
  spaceBetween: 0,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.faq .btn--next',
    prevEl: '.faq .btn--prev',
  },
});

const swiperValues = new Swiper('.values-slider', {
  direction: "vertical",
  slidesPerView: '1',
  spaceBetween: 1,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.values .btn--next',
    prevEl: '.values .btn--prev',
  },
});

const swiperProfiles = new Swiper('.profiles-slider', {
  slidesPerView: 1,
  spaceBetween: 1,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.profiles .btn--next',
    prevEl: '.profiles .btn--prev',
  },
  draggable: true,
  grabCursor: true,
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

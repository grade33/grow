let xxl = 1400;
let xl = 1200;
let lg = 992;
let md = 768;
let sm = 576;

let obj = {
  name: 1
}

import Swiper, {
  Navigation,
  Scrollbar,
  Pagination,
  Autoplay
} from 'swiper';

const presntationSwiper = new Swiper('.swiper-1', {
  modules: [Navigation, Pagination, Autoplay],
  loop: true,
  speed: 1000,
  simulateTouch: false,
  watchSlidesProgress: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return current < 10 ? `0${current}` : current
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const quizSwiper = new Swiper('.swiper-2', {
  modules: [Navigation, Pagination],
  speed: 500,
  simulateTouch: false,
  watchSlidesProgress: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      return `${current} / ${total - 1}`
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const newsSwiper = new Swiper('.swiper-3', {
  modules: [Navigation],
  slidesPerView: 1,
  slidesPerGroup: 1,
  speed: 500,
  simulateTouch: false,
  watchSlidesProgress: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    [sm]: {
      freeMode: false,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    // when window width is >= 480px
    [lg]: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    // when window width is >= 640px
    [xl]: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    }
  }
});

const reviewSwiper = new Swiper('.swiper-4', {
  modules: [Navigation],
  speed: 500,
  simulateTouch: false,
  watchSlidesProgress: true,
  spaceBetween: 42,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const productMenuSwiper = new Swiper('.swiper-5', {
  modules: [Navigation],
  speed: 500,
  simulateTouch: false,
  watchSlidesProgress: true,
  spaceBetween: 45,
  slidesPerView: 4,
  slidesPerGroup: 4,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

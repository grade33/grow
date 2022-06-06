import Swiper, {
  Navigation
} from 'swiper';

const swiperNav1 = new Swiper('.swiper.swiper-nav', {
  modules: [Navigation],
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const swiperNav1El = swiperNav1.$el[0];

setActiveSlideNum();

swiperNav1.on('slideChange', function () {
  setActiveSlideNum();
});

function setActiveSlideNum() {
  const activeSlideNum = swiperNav1El.querySelector('.swiper-active-slide-num');
  activeSlideNum.innerHTML = swiperNav1.activeIndex + 1;
}

const swiperQuiz = new Swiper('.swiper.home-quiz__swiper', {
  modules: [Navigation],
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 50,
});
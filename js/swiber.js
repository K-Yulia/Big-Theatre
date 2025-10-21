const thumbsSwiper = new Swiper(".thumbs-slider", {
  spaceBetween: 10,
  slidesPerView: 1,
  watchSlidesProgress: true,
  simulateTouch: false,
});
const mainSwiper = new Swiper(".main-slider", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: thumbsSwiper,
  },
  watchSlidesProgress: true,
  simulateTouch: false,
});

const projectsSwiper = new Swiper(".projects__slider", {
  slidesPerView: 4,
  navigation: {
    nextEl: ".projects__slider__next",
    prevEl: ".projects__slider__prev",
  },
  breakpoints: {
    1440: { slidesPerView: 4 },
    992: { slidesPerView: 1.56 },
    768: { slidesPerView: 1.55 },
    576: { slidesPerView: 1.15 },
    320: { slidesPerView: 1 },
  },
});

const swiper = new Swiper(".partners__slider", {
  slidesPerView: 4,
  // simulateTouch: false,
  navigation: {
    nextEl: ".partners__slider__next",
    prevEl: ".partners__slider__prev",
  },

  breakpoints: {
    1440: { spaceBetween: 29, slidesPerView: 4 },
    992: {
      spaceBetween: 27,
      slidesPerView: 2.41,
    },
    768: { spaceBetween: 28, slidesPerView: 2.45 },
    576: { spaceBetween: 27, slidesPerView: 1.8 },
    320: {
      // spaceBetween: 25,
      slidesPerView: 1.0,
    },
  },
});

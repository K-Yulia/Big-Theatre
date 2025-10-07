const thumbsSwiper = new Swiper('.thumbs-slider',
    { spaceBetween: 10,
        slidesPerView: 1,
        // freeMode: true,
        watchSlidesProgress: true, 
        simulateTouch: false,
    }); 
const mainSwiper = new Swiper('.main-slider',
    { 
        // loop: true,
        spaceBetween: 10,
        navigation: { 
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev', 
        },
        thumbs: { 
            swiper: thumbsSwiper,
        }, 
        watchSlidesProgress: true, 
        simulateTouch: false,
    });

    const swiper = new Swiper('.projects__slider', {
    slidesPerView: 4,
    // spaceBetween: 20,
    // loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: { slidesPerView: 4 },
      992: { slidesPerView: 1.56 },
      768: { slidesPerView: 1.55 },
      576: { slidesPerView: 1.15 },
    },
  });
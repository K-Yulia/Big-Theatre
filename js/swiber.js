const thumbsSwiper = new Swiper('.thumbs-slider',
    { spaceBetween: 10,
        slidesPerView: 1,
        allowTouchMove: false,
        // freeMode: true,
        // watchSlidesProgress: true, 
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
    });
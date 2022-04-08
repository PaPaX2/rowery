import Swiper from 'swiper/bundle';

const swiperMain = new Swiper('.slider--main', {
    autoplay: {
      delay: 4500,
    },
    disableOnInteraction: false,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 600,
    pagination: {
      el: '.swiper-pagination-main',
    },
  });

  const swiperProducts = new Swiper('.slider--products', {
    autoplay: {
      delay: 4000,
    },
    slidesPerView: 3,
    spaceBetween: 40,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.slider-button-next--products',
      prevEl: '.slider-button-prev--products',
    },
  });

  const swiperYours = new Swiper('.slider--yours', {
    autoplay: {
      delay: 4000,
    },
    slidesPerView: 5,
    loop: true,
  });

  export {swiperMain, swiperProducts, swiperYours};

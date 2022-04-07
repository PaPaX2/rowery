import Swiper from 'swiper/bundle';

const swiperMain = new Swiper('.slider--main', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 600,
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination-main',
    },
  });

  const swiperProducts = new Swiper('.slider--products', {
    autoplay: {
      delay: 5000,
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
      delay: 7500,
    },
    slidesPerView: 5,
    loop: true,
    pagination: {
      el: ".slider-pagination--yours",
      clickable: true
    }
  });

  export {swiperMain, swiperProducts, swiperYours};

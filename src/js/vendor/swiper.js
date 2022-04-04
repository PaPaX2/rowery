import Swiper from 'swiper/bundle';
//import 'swiper/css';

const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 600,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    centeredSlides: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });

  export default swiper;
import Swiper from "swiper/bundle";

const swiperMenu = new Swiper(".product--menu", {
  init: false,
  preloadImages: false,
  lazy: true,
  autoplay: {
    delay: 4500,
  },
  disableOnInteraction: false,
  loop: true,
  pagination: {
    el: ".swiper-pagination-menu",
  },
});

const swiperMain = new Swiper(".product--main", {
  autoplay: {
    delay: 4500,
  },
  disableOnInteraction: false,
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 600,
  pagination: {
    el: ".swiper-pagination-main",
  },
});

const swiperProducts = new Swiper(".product--products", {
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 3,
    },
  },
  loop: true,
  navigation: {
    nextEl: ".product-button-next--products",
    prevEl: ".product-button-prev--products",
  },
});

const swiperYours = new Swiper(".product--yours", {
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    460: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
  loop: true,
});

export default swiper;

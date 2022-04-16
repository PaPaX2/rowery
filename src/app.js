"use strict";

import "./sass/style.scss";
import Swiper from "./js/vendor/swiper";

const section = document.querySelector(".section--menu");
const menuJs = document.querySelectorAll(".menuJS");
let i = 0;

menuJs.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault;
    section.classList.toggle("active");

    if (section.classList.contains("active")) {
      if (i === 0) {
        Swiper.swiperMenu.init(".product--menu");
        i = 1;
      } else {
        Swiper.swiperMenu.autoplay.start();
      }
    } else {
      Swiper.swiperMenu.autoplay.stop();
    }
  });
});

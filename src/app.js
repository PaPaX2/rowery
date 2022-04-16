"use strict";

import "./sass/style.scss";
import { swiperMenu } from "./js/vendor/swiper";

//swiperMain;
//swiperYours;

const section = document.querySelector(".section--menu");
const menuJs = document.querySelectorAll(".menuJS");
let i = 0;

menuJs.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault;
    section.classList.toggle("active");

    if (section.classList.contains("active")) {
      if (i === 0) {
        swiperMenu.init(".slider--menu");
        i = 1;
      } else {
        swiperMenu.autoplay.start();
      }
    } else {
      swiperMenu.autoplay.stop();
    }
  });
});

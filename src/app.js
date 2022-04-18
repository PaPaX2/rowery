"use strict";

import "./sass/style.scss";
import SwiperMenu from "./js/vendor/swiper";
import Modal from "./js/components/modal";

const section = document.querySelector(".section--menu");
const menuJs = document.querySelectorAll(".menuJS");
let i = 0;

menuJs.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault;
    section.classList.toggle("active");

    if (section.classList.contains("active")) {
      if (i === 0) {
        SwiperMenu.init(".product--menu");
        i = 1;
      } else {
        SwiperMenu.autoplay.start();
      }
    } else {
      SwiperMenu.autoplay.stop();
    }
  });
});

Modal();

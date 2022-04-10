"use strict"

import "./sass/style.scss";
import {swiperMain, swiperProducts, swiperYours} from "./js/vendor/swiper";

swiperMain;
swiperProducts;
swiperYours;

const section = document.querySelector('.section--menu');
const menuJs = document.querySelectorAll('.menuJs');

menuJs.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault;
        section.classList.toggle('active');
    });
})

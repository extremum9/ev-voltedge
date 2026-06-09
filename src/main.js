import Swiper from 'swiper';
import { A11y, Pagination } from 'swiper/modules';

import initTopbar from './modules/topbar';

initTopbar();

new Swiper('.js-interior-gallery-slider', {
  modules: [Pagination, A11y],
  pagination: {
    el: '.interior-gallery-slider-pagination',
    clickable: true
  },
  slidesPerView: 3,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 14
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

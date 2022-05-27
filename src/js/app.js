import { webpSupportTest } from './modules/webp-support-test.js';
import { HeaderScroll } from './modules/header-scroll.js';
import { historySliderControl } from './modules/history-slider-control.js';
import { Accordeon } from './modules/toggle-accordeon.js';
import { toggleClass, yearsCountChanger } from './modules/helpers.js';
import { TabManager } from './modules/tabs-manager.js';

import Swiper, {
  Pagination,
  Navigation,
  Mousewheel,
  Parallax,
  EffectFade,
  Lazy,
  Autoplay,
  Thumbs,
  Keyboard,
  A11y,
  Controller,
} from 'swiper';

import 'swiper/css';
import 'swiper/css/a11y';
// import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
// import 'swiper/css/pagination';

webpSupportTest();

const headerControl = new HeaderScroll('.header', {
  container: document,
  classHide: 'header--hide',
  fillClass: 'header--theme-white',
  elementsOnWhichDisable: ['.slider-history'],
  enableOnPoint: {
    triggerElementSelector: '.page__hero',
  },
});
//========================================================================================================================================================
const historySliderPagination = new Swiper('.slider-history__pagination', {
  modules: [Mousewheel],
  mousewheel: true,
  slidesPerView: 'auto',
});

const historySlider = new Swiper('.slider-history__slider', {
  modules: [Mousewheel, Parallax, Navigation, Thumbs, Controller],
  controller: {
    control: historySliderPagination,
  },
  thumbs: {
    swiper: historySliderPagination,
  },
  mousewheel: true,
  // mousewheel: {
  //   forceToAxis: true,
  // },
  speed: 1000,
  direction: 'vertical',
  parallax: false,
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      yearsCountChanger('.slider-history__heading', this);
    },
  },
});

//Контроллер для слайдера секции "История",
historySliderControl(historySlider, headerControl);
//========================================================================================================================================================

// const historyPagination = new PaginationMove({
//   sliderVar: historySlider, //переменная свайпер-слайдера
//   paginationSelector: '.slider-history__pagination',
//   step: 50,
// });

// historySlider.on('slideChange', () => {
//   changeYear();
//   historyPagination.move();
// });

//========================================================================================================================================================
const sertificationSlider = new Swiper('.swiper-sertification', {
  modules: [Navigation],
  speed: 1000,
  slidesPerView: 4,
  spaceBetween: 40,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    1400: {
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: '.sertification-section__btn--next',
    prevEl: '.sertification-section__btn--prev',
  },
});
//========================================================================================================================================================
const burgerBtn = document.querySelector('.header__trigger');
const burgerMenu = document.querySelector('.header__dropdown');
const header = document.querySelector('.header');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  header.classList.toggle('active');
  document.body.classList.toggle('_lock');
});
//========================================================================================================================================================
const solutionSliderPagination = new Swiper('.solution-slider__pagination .swiper', {
  slidesPerView: 2,
  slideToClickedSlide: true,
  breakpoints: {
    576: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    },
  },
});

const solutionSlider = new Swiper('.solution-swiper', {
  modules: [Thumbs, EffectFade, Keyboard, A11y, Controller],
  controller: {
    control: solutionSliderPagination,
  },
  a11y: {
    enabled: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  thumbs: {
    swiper: solutionSliderPagination,
  },
  spaceBetween: 50,
  slidesPerView: 1,
});

//todo переделать логику движения лайдера, сделать проверку на наличие/отсутствие переменных
// const solutionPagination = new PaginationMove({
//   sliderVar: solutionSlider, //переменная свайпер-слайдера
//   paginationSelector: '.solution-slider__pagination',
//   step: 100,
// });

// solutionSlider.on('slideChange', () => {
//   solutionPagination.move();
// });
//========================================================================================================================================================
// const philosophyList = document.querySelector('.nav-philosophy__list');

// philosophyList.addEventListener('click', (e) => {
//   let listItem = e.target.closest('.nav-philosophy__item');

//   if (!listItem) return;

//   if (!philosophyList.contains(listItem)) return;

//   listItem.classList.toggle('active');
// });
//========================================================================================================================================================
const reviewsSlider = new Swiper('.solution-reviews__slider', {
  modules: [Navigation],
  speed: 1000,
  // spaceBetween: 40,
  breakpoints: {
    320: {
      spaceBetween: 50,
    },
    768: {
      spaceBetween: 75,
    },
    992: {
      spaceBetween: 100,
    },
    1400: {
      spaceBetween: 150,
    },
  },
  navigation: {
    nextEl: '.solution-reviews__button--next',
    prevEl: '.solution-reviews__button--prev',
  },
});
//========================================================================================================================================================
const accord = new Accordeon({
  blockSelector: '.accordeon',
  trigger: '.item-accordeon__top',
});
//========================================================================================================================================================
// //todo нужно подвязать к philosophyToggler
// toggleClass({
//   containerSelector: '.modal-philosophy',
//   eTargetSelector: '.modal-philosophy',
//   toggleClass: 'modal-philosophy--close',
//   // additionalElement: '.modal-philosophy',
//   // additionalClassName: 'modal-philosophy--close',
//   // rmClasses: true,
// });

//========================================================================================================================================================
// const heroSlider = new Swiper('.hero-section__slider-inner', {
//   modules: [EffectFade, Lazy, Autoplay],
//   effect: 'fade',
//   fadeEffect: {
//     crossFade: true,
//   },
//   preloadImages: false,
//   lazy: {
//     loadOnTransitionStart: true,
//     loadPrevNext: true,
//     // loadPrevNextAmount: 3,
//   },
//   autoplay: {
//     delay: 15000,
//     disableOnInteraction: false,
//     waitForTransition: false,
//   },
//   on: {
//     init() {
//       window.addEventListener('scroll', () => {
//         let sliderBottom = this.el.getBoundingClientRect().bottom;

//         if (sliderBottom)
//           if (sliderBottom <= 0 && this.autoplay.running) {
//             this.autoplay.stop();
//           } else if (sliderBottom > 0 && !this.autoplay.running) {
//             this.autoplay.start();
//           }
//       });
//     },
//     autoplayStop() {
//       this.slideTo(0);
//     },
//   },
// });
//========================================================================================================================================================
const philosophyTabs = new TabManager('philosophy-tabs', {
  tabListSelector: '.nav-philosophy__list',
  tabBtnSelector: '.nav-philosophy__item',
  tabPanelSelector: '.modal-philosophy__item',

  tabActiveClass: 'js-active-tab',
  panelActiveClass: 'show',
});

//from helpers.js
const philosophyToggler = toggleClass({
  containerSelector: '.nav-philosophy__list',
  cardSelector: '.nav-philosophy__item',
  cardActiveClass: 'show',
  modalSelector: '.modal-philosophy',
  modalActiveClass: 'modal-philosophy--open',
  closeModalButtonSelector: '.modal-philosophy__button',
});

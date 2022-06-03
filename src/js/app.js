import { webpSupportTest } from './modules/webp-support-test.js';
import { HeaderScroll } from './modules/header-scroll.js';
import { historySliderControl } from './modules/history-slider-control.js';
import { Accordeon } from './modules/toggle-accordeon.js';
import { toggleCards, yearsCountChanger } from './modules/helpers.js';
import { TabManager } from './modules/tabs-manager.js';

import Swiper, {
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
import 'swiper/css/lazy';
import 'swiper/css/a11y';
import 'swiper/css/effect-fade';

/* Burger menu toggler */
const burgerMenuToggler = () => {
  const burgerBtn = document.querySelector('.header__trigger');
  const burgerMenu = document.querySelector('.header__dropdown');
  const header = document.querySelector('.header');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    header.classList.toggle('active');
    document.body.classList.toggle('_lock');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  burgerMenuToggler();
});

/* Header "hide on scroll" controller*/
const headerControl = new HeaderScroll('.header', {
  container: document,
  classHide: 'header--hide',
  fillClass: 'header--theme-white',
  elementsOnWhichDisable: ['.slider-history'],
  enableOnPoint: {
    triggerElementSelector: '.page__hero',
  },
});

/* Hero slider */
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

/* Solution section scripts */
const solutionSliderPagination = new Swiper('.solutions__pagination-slider .swiper', {
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

const solutionSlider = new Swiper('.solutions__slider', {
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

/* Philosophy section scripts */
const philosophyTabs = new TabManager('philosophy-tabs', {
  tabListSelector: '.nav-philosophy__list',
  tabBtnSelector: '.nav-philosophy__item',
  tabPanelSelector: '.modal-philosophy__item',
  tabParams: {
    disableTabActiveClass: true,
    tabActiveClass: 'js-active-tab',
  },
  panelParams: {
    disablePanelActiveClass: false,
    panelActiveClass: 'show',
  },
  keyboard: false,
});

const philosophyToggler = toggleCards({
  containerSelector: '.nav-philosophy__list',
  cardSelector: '.nav-philosophy__item',
  cardActiveClass: 'show',
  modalSelector: '.modal-philosophy',
  modalActiveClass: 'modal-philosophy--open',
  closeModalButtonSelector: '.modal-philosophy__button',
});

/* History section scripts */
const historySliderPagination = new Swiper('.slider-history__pagination', {
  modules: [Mousewheel],
  mousewheel: true,
  slidesPerView: 'auto',
});

const historySlider = new Swiper('.slider-history__slider', {
  modules: [Mousewheel, Parallax, Navigation, Thumbs, Controller, Lazy],
  lazy: {
    loadPrevNext: true,
  },
  preloadImages: false,
  controller: {
    control: historySliderPagination,
  },
  thumbs: {
    swiper: historySliderPagination,
  },
  mousewheel: true,
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

historySliderControl(historySlider, headerControl); //Контроллер для слайдера секции "История",

/* Sertification slider */
const sertificationSlider = new Swiper('.sertification-section__slider', {
  modules: [Navigation, Lazy],
  lazy: true,
  loadPrevNext: true,
  preloadImages: false,
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

/* Review slider */
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

/* Questions section accordeon */
const questionsAccordeon = new Accordeon({
  blockSelector: '.questions__accordeon',
  openingBlock: '.item-accordeon__top',
});

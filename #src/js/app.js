import { webpSupportTest } from './modules/webp-support-test.js';
import { HeaderScroll } from './modules/header-scroll.js';
import { scrollWidthCalc } from './modules/calc-scroll-width.js';
// import { test } from './modules/test.js';
import { Scroll } from './modules/scroll.js';
import { PaginationMove } from './modules/pagination-move.js';
import { Accordeon } from './modules/toggle-accordeon.js';
import { toggleClass } from './modules/helpers.js';

import Swiper, { Pagination, Navigation, Mousewheel, Parallax } from 'swiper';
import 'swiper/css';
// import 'swiper/css/pagination';

webpSupportTest();

new HeaderScroll('.header', {
  // blockFixedAfter: '.solution-slider',
  // bodyWillLock: true, //Пока отключил, т.к. при ресайзе срабатывает ложно
});

//========================================================================================================================================================
const historySlider = new Swiper('.swiper-history', {
  modules: [Pagination, Mousewheel, Parallax, Navigation],
  speed: 1000,
  direction: 'vertical',
  parallax: false,
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.slider-history__pagination',
    bulletClass: 'slider-history__pagination-bullet',
    bulletActiveClass: 'slider-history__pagination-bullet-active',
    clickable: true,
    // dynamicBullets: true,
    // renderBullet: (index, className) => {
    //   return '<span class="' + className + '">' + '<span>' + '</span>' + '</span>';
    // },
  },
});
//========================================================================================================================================================

const historyPagination = new PaginationMove({
  sliderVar: historySlider, //переменная свайпер-слайдера
  paginationSelector: '.slider-history__pagination',
  step: 50,
});

historySlider.on('slideChange', () => {
  changeYear();
  historyPagination.move();
});
//========================================================================================================================================================
function changeYear() {
  const domElement = document.querySelector('.slider-history__heading');

  let content = domElement.innerHTML;
  let isTargetNum = Number.isInteger(+content);
  // let paginationTransform;

  if (!isTargetNum) return;
  // console.log(historySlider.previousIndex);
  if (historySlider.activeIndex > historySlider.previousIndex) {
    domElement.innerHTML =
      +domElement.innerHTML + +historySlider.activeIndex - +historySlider.previousIndex;
  } else if (historySlider.activeIndex < historySlider.previousIndex) {
    domElement.innerHTML =
      +domElement.innerHTML - +historySlider.previousIndex + +historySlider.activeIndex;
  }
}
//========================================================================================================================================================
const scroll = new Scroll();

// function sliderEvents() {
const historySection = document.querySelector('.slider-history');
const historyBtn = document.querySelector('.slider-history__btn.skip');

document.addEventListener('scroll', fixSlider);

if (historyBtn) {
  historyBtn.addEventListener('click', skipSlider);
}

function skipSlider(event) {
  // event.currentTarget.removeEventListener(event.type, fixSlider);
  // document.removeEventListener('scroll', fixSlider);
  document.body.style.overflowY = '';
  document.body.style.paddingRight = 0;
  historySlider.mousewheel.disable();
  const elementPosition = getCoords(historySection);

  let offsetPosition = scroll.isUp
    ? elementPosition.top - elementPosition.height
    : elementPosition.bottom;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth',
  });
  event.currentTarget.removeEventListener(event.type, skipSlider);
  setTimeout(() => {
    document.addEventListener('scroll', fixSlider);
  }, 500);
}

function fixSlider(event) {
  const elemCoords = getCoords(historySection);
  // console.log(elemCoords.top);
  if (!elemCoords) return;
  if (elemCoords.top >= -50 && elemCoords.top <= 50) {
    historySection.scrollIntoView();
    // window.scrollBy({
    //   top: elemCoords.top,
    //   behavior: 'smooth',
    // });

    // setTimeout(() => {
    document.body.style.paddingRight = scrollWidthCalc() + 'px';
    document.body.style.overflowY = 'hidden';
    historySlider.mousewheel.enable();
    historySlider.on('touchmove', () => {
      console.log('hey');
    });
    // }, 500);
    event.currentTarget.removeEventListener(event.type, fixSlider);
    historyBtn.addEventListener('click', skipSlider);
  }
}
// получаем координаты элемента в контексте документа
function getCoords(elem) {
  if (!elem) return;

  let box = elem.getBoundingClientRect();

  return {
    top: box.top,
    right: box.right,
    bottom: box.bottom,
    left: box.left,
    height: box.height,
  };
}
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
const solutionSlider = new Swiper('.solution-swiper', {
  modules: [Pagination],
  // speed: 1000,
  // spaceBetween: 100,
  slidesPerView: 1,
  pagination: {
    el: '.solution-slider__pagination',
    bulletClass: 'solution-slider__pagination-bullet',
    bulletActiveClass: 'solution-slider__pagination-bullet-active',
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className}">
                <span></span>
              </span>`;
    },
  },
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
const philosophyList = document.querySelector('.nav-philosophy__list');
//from helpers.js
toggleClass({
  container: philosophyList,
  eTargetSelector: '.nav-philosophy__item',
  toggleClass: 'active',
});
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
  openingBlock: '.item-accordeon__top',
});

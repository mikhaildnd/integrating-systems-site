import { webpSupportTest } from './modules/webp-support-test.js';
import { HeaderScroll } from './modules/header-scroll.js';
import { scrollWidthCalc } from './modules/calc-scroll-width.js';
// import { test } from './modules/test.js';
import { Scroll } from './modules/scroll.js';

import Swiper, { Pagination, Navigation, Mousewheel, Parallax } from 'swiper';
import 'swiper/css';
// import 'swiper/css/pagination';

webpSupportTest();

// const H = new HeaderScroll('.header', {
//   blockFixedAfter: '.page__solutions',
//   // bodyWillLock: true, //Пока отключил, т.к. при ресайзе срабатывает ложно
// });

const solutionsSlider = new Swiper('.swiper-solutions', {
  modules: [Pagination],
  pagination: {
    el: '.slider-solutions__pagination',
    bulletClass: 'slider-solutions__pagination-bullet',
    bulletActiveClass: 'slider-solutions__pagination-bullet-active',
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className}">
                <span></span>
              </span>`;
    },
  },
});
const historySlider = new Swiper('.swiper-history', {
  modules: [Pagination, Mousewheel, Parallax],
  speed: 1000,
  direction: 'vertical',
  parallax: true,
  slidesPerView: 1,
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

historySlider.on('slideChange', () => {
  changeYear();
  movePagination();
});

function movePagination() {
  const pagination = document.querySelector('.slider-history__pagination');

  const style = getComputedStyle(pagination);

  let leftPosition = parseFloat(style.left);
  let step = 50;

  if (historySlider.activeIndex > historySlider.previousIndex) {
    leftPosition -= step * (+historySlider.activeIndex - +historySlider.previousIndex);
  } else if (historySlider.activeIndex < historySlider.previousIndex) {
    leftPosition += step * (+historySlider.previousIndex - +historySlider.activeIndex);
  }

  pagination.style.left = leftPosition + 'px';
}

function changeYear() {
  const domElement = document.querySelector('.slider-history__heading');

  let content = domElement.innerHTML;
  let isTargetNum = Number.isInteger(+content);
  let paginationTransform;

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
const historySection = document.querySelector('.history-section');
const historyBtn = document.querySelector('.slider-history__btn ');

document.addEventListener('scroll', fixSlider);

historyBtn.addEventListener('click', skipSlider);

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
    // }, 500);
    event.currentTarget.removeEventListener(event.type, fixSlider);
    historyBtn.addEventListener('click', skipSlider);
  }
}

// получаем координаты элемента в контексте документа
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top,
    right: box.right,
    bottom: box.bottom,
    left: box.left,
    height: box.height,
  };
}
// }

// sliderEvents();

//========================================================================================================================================================
const sertificationSlider = new Swiper('.swiper-sertification', {
  modules: [Navigation],
  speed: 1000,
  slidesPerView: 4,
  spaceBetween: 40,
  navigation: {
    nextEl: '.sertification-section__btn--next',
    prevEl: '.sertification-section__btn--prev',
  },
});
//========================================================================================================================================================

const burgerBtn = document.querySelector('.header__trigger');
const burgerMenu = document.querySelector('.header__dropdown');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  document.body.classList.toggle('_lock');
});

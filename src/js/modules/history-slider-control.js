import { ScrollDirectionWatcher } from './scroll-direction-watcher.js';
import { getCoords } from './helpers.js';
import { scrollWidthCalc } from './calc-scroll-width.js';

const scroll = new ScrollDirectionWatcher();

//Принимает переменную свайпер-слайдера, для возможности вызывать его методы
export function historySliderControl() {
  const historySection = document.querySelector('.slider-history');
  const historyBtn = document.querySelector('.slider-history__btn.skip');

  document.addEventListener('scroll', fixSlider);

  if (historyBtn) {
    historyBtn.addEventListener('click', skipSlider);
  }

  function skipSlider(event) {
    event.currentTarget.removeEventListener(event.type, fixSlider);
    document.removeEventListener('scroll', fixSlider);

    document.body.style.overflowY = '';
    document.body.style.paddingRight = 0;

    const elemCoords = getCoords(historySection);

    if (!elemCoords) return;

    let offsetPosition;

    if (scroll.isUp) {
      offsetPosition = elemCoords.top - elemCoords.height;
    } else {
      offsetPosition = elemCoords.bottom;
    }

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

    if (!elemCoords) return;

    if (elemCoords.top >= -100 && elemCoords.top <= 100) {
      historySection.scrollIntoView();

      document.body.style.paddingRight = scrollWidthCalc() + 'px';
      document.body.style.overflowY = 'hidden';

      event.currentTarget.removeEventListener(event.type, fixSlider);

      historyBtn.addEventListener('click', skipSlider);
    }
  }
}

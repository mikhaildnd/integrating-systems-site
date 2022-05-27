export class HeaderScroll {
  constructor(headerSelector = 'header', options = {}) {
    this.header = document.querySelector(headerSelector);

    const {
      container = document,
      classHide = 'header--hide',
      fillClass = 'header--theme-color',
      elementsOnWhichDisable = [], //selectors arr, отключение хедера, когда указанные элементы в зоне видимости
      enableOnPoint = false,
    } = options;

    this.container = container;

    this.fillClass = fillClass;
    this.classHide = classHide;

    this.enableOnPoint = enableOnPoint;
    this.elementsOnWhichDisable = elementsOnWhichDisable;

    this.init();
  }

  init() {
    // this.header = document.querySelector(this.headerSelector);
    this.container =
      this.container === document ? this.container : document.querySelector(this.container);

    // this.disableOnPoint();

    this.disableElements = this.getDisableHeaderElements();

    this.disableOtherMethods = false;

    this.container.addEventListener('scroll', () => {
      // Скрытие на определенной высоте (80px)
      if (scrollY > this.header.offsetHeight && this.disableOtherMethods === false) {
        this.close();
        // console.log('1 условие закрытия');
        //Открытие на определенной высоте (80px)
      } else if (scrollY < this.header.offsetHeight && this.disableOtherMethods === false) {
        this.open();
        // console.log('1 условие открытия');
      }
      //Включение при достижении указанного блока
      if (this.getEnableCoords() < this.header.offsetHeight) {
        this.disableOtherMethods = true;
        this.open().fill();
        // console.log('2 условие открытия');
        //Скрытие при достижении указанного блок
      } else if (
        this.getEnableCoords() > this.header.offsetHeight &&
        this.disableOtherMethods === true
      ) {
        this.disableOtherMethods = false;
        this.close();
        this.removeFill();
        // console.log('2 условие закрытия');
      }

      if (this.disableElements.length) {
        this.disableElements.forEach((elem) => {
          if (elem.getBoundingClientRect().top >= -250 && elem.getBoundingClientRect().top <= 250) {
            this.close();
          }
        });
      }
    });
  }

  getEnableCoords() {
    if (typeof this.enableOnPoint === 'object') {
      const trigger = document.querySelector(this.enableOnPoint.triggerElementSelector);
      this.coordsTriggerElement = trigger.getBoundingClientRect().bottom;
      return this.coordsTriggerElement;
    } else if (typeof this.enableOnPoint === 'boolean') {
      if (this.enableOnPoint) {
        this.coordsTriggerElement =
          this.header.nextElementSibling.firstElementChild.getBoundingClientRect().bottom;
        return this.coordsTriggerElement;
      }
    } else throw new TypeError('Ошибка! enableOnPoint должен быть "boolean" или "object" типа');
  }

  getDisableHeaderElements() {
    let elements = this.elementsOnWhichDisable.map((selector) => document.querySelector(selector));
    return elements;
  }

  removeFill() {
    this.header.classList.remove(this.fillClass);
    return this;
  }

  fill() {
    this.header.classList.add(this.fillClass);
    return this;
  }

  close() {
    this.header.classList.add(this.classHide);
    return this;
  }

  open() {
    this.header.classList.remove(this.classHide);
    return this;
  }

  // scrollWidthCalc() {
  //   return window.innerWidth - document.documentElement.clientWidth;
  // }
}

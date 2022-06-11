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
    this.container =
      this.container === document ? this.container : document.querySelector(this.container);

    this.disableElements = this.getDisableHeaderElements() || [];

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
    try {
      const trigger = document.querySelector(this.enableOnPoint.triggerElementSelector);
      const nextSiblingElementCoords =
        this.header.nextElementSibling.firstElementChild.getBoundingClientRect().bottom;

      if (!trigger)
        throw new SyntaxError(
          'triggerElementSelector: селектор отсутствует в документе, или вы совершили опечатку (;',
        );

      if (!nextSiblingElementCoords) return;

      if (typeof this.enableOnPoint === 'object') {
        const triggerElementCoords = trigger.getBoundingClientRect().bottom;

        if (trigger) {
          return triggerElementCoords;
        } else {
          return nextSiblingElementCoords;
        }
      } else if (typeof this.enableOnPoint === 'boolean') {
        if (this.enableOnPoint) {
          return nextSiblingElementCoords;
        }
        return;
      } else
        throw new TypeError(
          'Ошибка! параметр "enableOnPoint" должен быть "boolean" или "object" типа',
        );
    } catch (error) {
      console.error(error.message);
    }
  }

  getDisableHeaderElements() {
    let elements = this.elementsOnWhichDisable.map((selector) => document.querySelector(selector));
    if (elements.includes(null)) return;
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
}

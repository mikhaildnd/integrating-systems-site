export class HeaderScroll {
  constructor(headerSelector = 'header', options = {}) {
    this.header = document.querySelector(headerSelector);

    const {
      container = document,
      blockFixedAfter = null,
      addDistForTriggering = 0, //Дополнительное расстояние от хедера для срабатывания события
      classHide = 'header--hide',
      classFixed = 'header--fixed',
      bodyWillLock = false,
    } = options;

    this.container = container;
    this.blockFixedAfter = blockFixedAfter; //Блок на высоту которого ориентируется фиксация хэдэра ('header--fixed')
    this.addDistForTriggering = addDistForTriggering;
    this.classFixed = classFixed;
    this.classHide = classHide;

    // this.bodyWillLock = bodyWillLock;
    // this.scrollWidth = this.scrollWidthCalc();

    this.init();
  }
  init() {
    // this.header = document.querySelector(this.headerSelector);
    const container =
      this.container == document ? this.container : document.querySelector(this.container);
    container.addEventListener('scroll', () => {
      this.hide();
      this.fixed();

      // if (this.bodyWillLock) {
      //   this.willLock();
      // }
    });
  }
  hide() {
    if (scrollY > this.header.offsetHeight + this.addDistForTriggering) {
      this.header.classList.add(this.classHide);
    } else if (scrollY < this.header.offsetHeight + this.addDistForTriggering) {
      this.header.classList.remove(this.classHide);
    }
  }
  fixed() {
    if (this.getBoundingY() + this.addDistForTriggering < this.header.offsetHeight) {
      this.header.classList.add(this.classFixed);
      this.header.classList.remove(this.classHide);
    } else {
      this.header.classList.remove(this.classFixed);
    }
  }
  getBoundingY() {
    //Вычисляем положение элемента, от которого зависит фиксация хедера,
    //если он не заполнен при инициализации конструктора, то берем второй элемент соседнего блока,
    //он, вероятно, более подходящий. Тупо, надо выводить ошибку просто, наверное
    // const elAfterFixed = this.blockFixedAfter //Элемент после которого будет position fixed
    //   ? document.querySelector(this.blockFixedAfter)
    //   : this.header.nextElementSibling.children[1];
    // return elAfterFixed.getBoundingClientRect().y;

    try {
      if (!this.blockFixedAfter) {
        throw new TypeError('"blockFixedAfter" не заполнен!');
      }
      const elAfterFixed = document.querySelector(this.blockFixedAfter);
      if (!elAfterFixed) {
        throw new TypeError('"blockFixedAfter" селектор отсутствует в документе!');
      }
      return elAfterFixed.getBoundingClientRect().y;
    } catch (error) {
      return console.log(error);
    }
  }

  // scrollWidthCalc() {
  //   return window.innerWidth - document.documentElement.clientWidth;
  // }

  // willLock() {
  //   if (window.innerWidth === document.documentElement.clientWidth) {
  //     console.log('willLockEnable');
  //     // this.header.style.overflowY = 'scroll';
  //     // this.header.style.transform = 'translateZ(0)';
  //     // this.header.style.transition = 'none';

  //     // this.header.style.paddingRight = this.scrollWidth + 'px';
  //     this.header.style.display = 'none';
  //     // this.hide();
  //   } else {
  //     // this.header.style.paddingRight = 0;
  //     this.header.style.display = 'block';
  //     // this.fixed();
  //   }
  // }
}

//Как использовать
// const H = new HeaderScrollChangeBg('.selector (по умолч. тег 'header')-querySelector', {
//   container: '.header-container', //Класс или селектор контейнера в котором лежит хедер (по умолч. document) (querySelector). Необяз.парам.
//   blockFixedAfter: '.page__solutions', //Класс или селектор блока, после которого нужно показывать  хедер
//   addDistForTriggering: 1.5, //Коеффиц. дополнительного расстояния на котором срабатывает добавление класса. 1.5 = полторы высоты хедера. Необяз.парам.
//   classHide: 'header--hide', //Класс, который при достижении скроллом высоты шапки скрывает/показывает ее (по умолч. 'header--hide'). Необяз.парам.
//   classFixed: 'header--fixed', //Класс, который ,при достижении высоты нужного мне блока, фиксирует шапку и заливает ее цветом и в обратном порядке (по умолч. 'header--fixed'). Необяз.парам.
//   bodyWillLock: false, //Если true, то шапка скроется, когда ширина клиента и ширина окна будут равны (исчезнет скролл)
//   и появится если ширина клиента меньше ширины окна, может надо по-другому реализовывать, хз
// });
// H.init('.header'); //Инициализируем. Передаем нужный класс или селектор хедера (по умолч. селектор 'header') (querySelector) -- переделано, \\этого нет

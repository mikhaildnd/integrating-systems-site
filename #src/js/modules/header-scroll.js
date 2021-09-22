export class HeaderScroll {
  constructor(headerSelector = 'header', options = {}) {
    this.header = document.querySelector(headerSelector);

    const {
      container = document,
      blockFixedAfter = null,
      addDistForTriggering = 0, //Дополнительное расстояние от хедера для срабатывания события
      classHide = 'header--hide',
      classFixed = 'header--fixed',
    } = options;

    this.container = container;
    this.blockFixedAfter = blockFixedAfter; //Блок на высоту которого ориентируется фиксация хэдэра ('header--fixed')
    this.addDistForTriggering = addDistForTriggering;
    this.classFixed = classFixed;
    this.classHide = classHide;

    this.init();
  }
  init() {
    // this.header = document.querySelector(this.headerSelector);
    const container =
      this.container == document ? this.container : document.querySelector(this.container);
    container.addEventListener('scroll', () => {
      this.hide();
      this.fixed();
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
}

//Как использовать
// const H = new HeaderScrollChangeBg('.selector (по умолч. тег 'header')-querySelector', {
//   container: '.header-container', //Класс или селектор контейнера в котором лежит хедер (по умолч. document) (querySelector). Необяз.парам.
//   blockFixedAfter: '.page__solutions', //Класс или селектор блока, после которого нужно показывать  хедер
//   addDistForTriggering: 1.5, //Коеффиц. дополнительного расстояния на котором срабатывает добавление класса. 1.5 = полторы высоты хедера. Необяз.парам.
//   classHide: 'header--hide', //Класс, который при достижении скроллом высоты шапки скрывает/показывает ее (по умолч. 'header--hide'). Необяз.парам.
//   classToRm: 'header--fixed', //Класс, который ,при достижении высоты нужного мне блока, фиксирует шапку и заливает ее цветом и в обратном порядке (по умолч. 'header--fixed'). Необяз.парам.
// });
// H.init('.header'); //Инициализируем. Передаем нужный класс или селектор хедера (по умолч. селектор 'header') (querySelector) -- переделано, \\этого нет

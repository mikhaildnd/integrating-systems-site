export class HeaderScroll {
  constructor(options = {}) {
    const {
      container = document,
      addittionalHeightCoef = 0,
      classToAdd = 'header--fill',
      classToRm = 'header--fill',
    } = options;

    this.container = container;
    this.addittionalHeightCoef = addittionalHeightCoef;
    this.classToAdd = classToAdd;
    this.classToRm = classToRm;
    console.log(this.header.offsetHeight);
  }
  init(headerSelector = 'header') {
    this.header = document.querySelector(headerSelector);
    const container =
      this.container == document ? this.container : document.querySelector(this.container);
    container.addEventListener('scroll', () => {
      this.changeBg();
    });
  }
  changeBg() {
    if (this.getElemOffset() > this.header.offsetHeight * this.addittionalHeightCoef) {
      this.header.classList.add(this.classToAdd);
    } else {
      this.header.classList.remove(this.classToRm);
    }
  }
  getElemOffset() {
    let nextElOffsetTop = Math.abs(this.header.nextElementSibling.getBoundingClientRect().y);
    // console.log(this.header.nextElementSibling.firstElementChild.offsetHeight);
    return nextElOffsetTop;
  }
}

//Как использовать
// const H = new HeaderScrollChangeBg({
//   container: '.header-container', //Класс или селектор контейнера в котором лежит хедер (по умолч. document) (querySelector). Необяз.парам.
//   addittionalHeightCoef: 1.5, //Коеффиц. дополнительного расстояния на котором срабатывает добавление класса. 1.5 = полторы высоты хедера. Необяз.парам.
//   classToAdd: 'header--fill', //Класс, который добавляется при достижении нужной высоты (по умолч. 'header--fill'). Необяз.парам.
//   classToRm: 'header--fill', //Класс, который удаляется при достижении нужной высоты (по умолч. 'header--fill'). Необяз.парам.
// });
// H.init('header'); //Инициализируем. Передаем нужный класс или селектор хедера (по умолч. селектор 'header') (querySelector)

// export class HeaderScrollChangeBg {
//   constructor(document, header, addCoef, classToAdd, classToRm) {
//     this.document = document;
//     this.header = header;
//     this.addCoef = addCoef;
//     this.classToAdd = classToAdd;
//     this.classToRm = classToRm;

//     // changeBg();
//   }
//   changeBg() {
//     this.document.addEventListener('scroll', () => {
//       const nextElOffsetTop = Math.abs(this.header.nextElementSibling.getBoundingClientRect().y);

//       if (nextElOffsetTop > this.header.offsetHeight * this.addCoef) {
//         this.header.classList.add(`${this.classToAdd}`);
//       } else {
//         this.header.classList.remove(`${this.classToRm}`);
//       }
//     });
//   }
// }

// onload = () => {
//   document.addEventListener('scroll', () => {
//     const header = document.querySelector('header');
//     const nextElOffsetTop = Math.abs(header.nextElementSibling.getBoundingClientRect().y);
//     const coeffIdentationFromEl = 2;

//     if (nextElOffsetTop > header.offsetHeight * coeffIdentationFromEl) {
//       header.classList.add('header--fill');

//     } else {
//       header.classList.remove('header--fill');
//     }
//   });
// };

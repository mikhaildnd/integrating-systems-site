export class ProgressLine {
  constructor(elementsContainer, allElements, element, progressLine) {
    this.elementsContainer = elementsContainer; //Контейнер со всеми элементами
    this.allElements = allElements; //Список всех элементов
    this.element = element; //Элемент
    this.progressLine = progressLine; //Линия бара

    this.calcOffset(elementsContainer); //Считаем отступы при запуске
    this.calcElementsWidth(allElements); //Считаем ширину каждого элемента
    // console.log(this.calcElementsWidth(allElements));
    this.drawLine();
    elementsContainer.addEventListener('click', this.drawLineOnClick.bind(this));
  }
  drawLineOnClick(event) {
    const target = event.target;

    this.index = [...target.parentElement.children].indexOf(target); //Узнаем индекс элемента

    if (target.className != this.element.className) {
      console.log('пшел нах');
      return;
    }
    this.drawLine();
  }
  drawLine() {
    let width = 0;
    for (let i = 0; i < this.allElements.length; i++) {
      setTimeout(() => {
        console.log(this.progressLine);
        if (i === 0) {
          width = this.containerPaddingLeft + this.allElements[i].offsetWidth / 2;
        } else if (i === this.allElements.length - 1) {
          width +=
            this.allElements[i].offsetWidth +
            (this.containerPaddingLeft + this.containerPaddingRight);
        } else {
          width += this.allElements[i - 1].offsetWidth / 2 + this.allElements[i].offsetWidth / 2;
        }
        this.progressLine.style.width = width + 'px';
      }, 900 * (i + 1));

      // console.log(width);
    }
    // let width = 0;
    // this.allElements.forEach((elem, idx, arr) => {
    //   if (idx === 0) {
    //     width = this.containerPaddingLeft + elem.offsetWidth / 2;
    //   } else if (idx === this.allElements.length - 1) {
    //     width += elem.offsetWidth + (this.containerPaddingLeft + this.containerPaddingRight);
    //   } else {
    //     width += 50;
    //     // elem.offsetWidth[idx] + this.elPaddingLeft + 'px';
    //   }
    //   console.log(elem[idx]);
    // console.log(width);
    // console.log(elem.offsetWidth, this.progressLine.style.width);
    // });
    // }
  }
  //Считаем внутренние отступы контейнера
  calcOffset(container) {
    const style = getComputedStyle(container);

    this.containerPaddingLeft = parseFloat(style.paddingLeft);
    this.containerPaddingRight = parseFloat(style.paddingRight);
  }
  //Считаем ширину каждого элемента и возвратим массив их них
  calcElementsWidth(arr) {
    let elemWidthArr = [];
    // console.log(elemWidthArr);
    arr.forEach((elem) => {
      elemWidthArr.push(elem.offsetWidth);
    });
    // console.log(Array.isArray(elemWidthArr));
    return elemWidthArr;
  }
  calcAccumElWidth() {}
}

export class ProgressLine {
  constructor(container, allTargetElements, targetElement, progressLine) {
    this.container = container;
    this.allTargetElements = allTargetElements;
    this.targetElement = targetElement;
    this.progressLine = progressLine;

    this.calcOffset(); //Считаем отступы при запуске
    // this.calcElementsWidth();
    this.calcAccumElWidth();

    container.addEventListener('click', this.onClick.bind(this));
    // console.log(elem.onclick);
  }
  onClick(event) {
    const target = event.target;

    this.index = [...target.parentElement.children].indexOf(target); //Узнаем индекс элемента
    // console.log(index);
    // const index = [...el.parentElement.children].indexOf(el) //Destr
    // const index = Array.from(el.parentElement.children).indexOf(el) //ArrFrom
    // var index = Array.prototype.slice.call(el.parentElement.children).indexOf(el) //Es5

    if (target.className != this.targetElement.className) {
      console.log('пшел нах');
      return;
    }
    this.drawLine();
  }
  calcOffset() {
    const style = getComputedStyle(this.container);

    this.elPaddingLeft = parseFloat(style.paddingLeft);
    this.elPaddingRight = parseFloat(style.paddingRight);
  }
  calcElementsWidth() {
    this.elemsWidthArr = [];

    for (let i = 0; i < this.allTargetElements.length; i++) {
      let elWidth = this.allTargetElements[i].offsetWidth;
      this.elemsWidthArr.push(elWidth);
    }
    return this.elemsWidthArr;
  }
  calcAccumElWidth() {
    let elemsArr = this.calcElementsWidth();
    // console.log(elemsArr);

    this.elSumWidth = [];

    elemsArr.reduce((sum, current) => {
      this.elSumWidth.push(sum + current);
      return sum + current;
    }, 0);

    // console.log(this.elSumWidth);
  }
  drawLine() {
    if (this.index === 0) {
      this.progressLine.style.width = this.elSumWidth[this.index] / 2 + this.elPaddingLeft + 'px';
    } else if (this.index === this.allTargetElements.length - 1) {
      this.progressLine.style.width =
        this.elSumWidth[this.index] + (this.elPaddingLeft + this.elPaddingRight) + 'px';
    } else {
      this.progressLine.style.width =
        this.elSumWidth[this.index] -
        this.elemsWidthArr[this.index] / 2 +
        this.elPaddingLeft +
        'px';
    }
  }
}

// function progressLine() {
//   const sliderTrack = document.querySelector('.slider-solutions__track');
//   const sliderPoints = document.querySelectorAll('.slider-solutions__point');
//   const sliderPointsContainer = document.querySelector('.slider-solutions__points-container');

//   let style = getComputedStyle(sliderPointsContainer);

//   const elPaddingLeft = parseFloat(style.paddingLeft);
//   const elPaddingRight = parseFloat(style.paddingRight);

//   let elArr = [];

//   for (let i = 0; i < sliderPoints.length; i++) {
//     let elWidth = sliderPoints[i].offsetWidth;
//     elArr.push(elWidth);

//     let elSumWidth = elArr.reduce((sum, current) => {
//       return sum + current;
//     });

//     sliderPoints[i].addEventListener('click', () => {
//       sliderStart();
//     });
//     function sliderStart() {
//       if (i === 0) {
//         sliderTrack.style.width = elSumWidth / 2 + elPaddingLeft + 'px';
//       } else if (i === sliderPoints.length - 1) {
//         sliderTrack.style.width = elSumWidth + (elPaddingLeft + elPaddingRight) + 'px';
//       } else {
//         sliderTrack.style.width = elSumWidth - elArr[i] / 2 + elPaddingLeft + 'px';
//       }
//     }
//   }
// }

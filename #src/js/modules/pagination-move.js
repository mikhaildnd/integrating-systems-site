export class PaginationMove {
  constructor(options = {}) {
    const { sliderVar, paginationSelector, step = 50 } = options;

    this.sliderVar = sliderVar;
    this.paginationSelector = document.querySelector(paginationSelector);
    this.step = step;

    // this.startPos = parseFloat(this.styles(this.paginationSelector).left);
  }

  styles(selector) {
    if (!selector) return;
    return getComputedStyle(selector);
  }
  move() {
    let leftPosition = parseFloat(this.styles(this.paginationSelector).left);
    // console.log(leftPosition);

    const slider = this.sliderVar;

    if (slider.activeIndex > slider.previousIndex) {
      leftPosition -= this.step * (+slider.activeIndex - +slider.previousIndex);
    } else if (slider.activeIndex < slider.previousIndex) {
      leftPosition += this.step * (+slider.previousIndex - +slider.activeIndex);
    }
    // console.log(this.styles(this.paginationSelector).left);
    this.paginationSelector.style.left = leftPosition + 'px';
    // this.paginationSelector.style.transform = `translateX(${leftPosition}px)`;
  }
  resetToStart() {
    //нужно протестить мб не работает
    const startPos = parseFloat(this.styles(this.paginationSelector).left);

    if (!startPos) return;
    return (this.paginationSelector.style.left = startPos + 'px');
  }
}

// function movePagination(options = {}) {
//   const {
//     sliderVar,
//     paginationSelector = document.querySelector(paginationSelector),
//     step = 50,
//   } = options;

//   this.sliderVar = sliderVar;
//   this.paginationSelector = paginationSelector;
//   this.step = step;
//   console.log(this);

//   const style = getComputedStyle(paginationSelector);

//   let leftPosition = parseFloat(style.left);
//   // let step = 50;

//   if (this.sliderVar.activeIndex > this.sliderVar.previousIndex) {
//     leftPosition -= step * (+this.sliderVar.activeIndex - +this.sliderVar.previousIndex);
//   } else if (this.sliderVar.activeIndex < this.sliderVar.previousIndex) {
//     leftPosition += step * (+this.sliderVar.previousIndex - +this.sliderVar.activeIndex);
//   }

//   paginationSelector.style.left = leftPosition + 'px';
// }

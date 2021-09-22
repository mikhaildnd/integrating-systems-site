export class Scroll {
  constructor() {
    this.lastScroll = 0;
    this.isUp = false;
    this.isDown = false;

    this.init();
  }
  init() {
    document.addEventListener('scroll', () => {
      this.dir();
    });
  }
  //Направление скролла
  dir() {
    if (this.lastScroll == 0) {
      this.isUp;
      this.isDown;
    } else if (window.scrollY > this.lastScroll) {
      this.isUp = false;
      this.isDown = true;
    } else if (window.scrollY < this.lastScroll) {
      this.isUp = true;
      this.isDown = false;
    }
    this.lastScroll = window.scrollY;
    return { isUp: this.isUp, isDown: this.isDown };
  }
}

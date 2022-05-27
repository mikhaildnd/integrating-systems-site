export class Accordeon {
  constructor(options = {}) {
    const { blockSelector = '', openingBlock = '' } = options;

    this.blockSelector = blockSelector;
    this.openingBlock = openingBlock;

    this.init();
  }
  init() {
    this.accordeon = document.querySelector(this.blockSelector);
    if (!this.accordeon) return;
    this.accordeon.addEventListener('click', (e) => this.toggle(e));
  }
  toggle(e) {
    let openingPart = e.target.closest(this.openingBlock);

    if (!openingPart) return;

    if (!this.accordeon.contains(openingPart)) return;

    openingPart.classList.toggle('show');
    let panel = openingPart.nextElementSibling;
    panel.style.maxHeight
      ? (panel.style.maxHeight = null)
      : (panel.style.maxHeight = panel.scrollHeight + 'px');
  }
}

// const acoordeon = new Accordeon({
//   blockSelector: '.accordeon(Селектор аккордеона)',
//   openingBlock: '.item-accordeon__top(Верхний(который будет открываться)) блок аккордеона'
// })

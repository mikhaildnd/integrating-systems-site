export function test() {
  // let coordsBlock = historySection.getBoundingClientRect();
  // console.log(coordsBlock.bottom);

  const historyBtn = document.querySelector('.slider-history__btn ');

  historyBtn.addEventListener('click', () => {
    const scrollTarget = document.querySelector('.history-section');
    const elementPositionBottom = scrollTarget.getBoundingClientRect().bottom;
    const elementPositionTop = scrollTarget.getBoundingClientRect().top;

    let scrollDir = scrollDirection();
    // console.log(scrollDir.isUp);

    let offsetPosition = scrollDir.isUp ? elementPositionTop : elementPositionBottom;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });

    // document.body.style.overflow = '';
    // document.body.style.paddingRight = 0;
    // historySlider.mousewheel.disable();
    // window.scrollTo(0, );
    // console.log('click');
  });
  //========================================================================================================================================================
  document.addEventListener('scroll', () => {
    scrollDirection();
  });

  let lastScroll = 0;
  let isUp = false;
  let isDown = false;
  function scrollDirection() {
    // console.log(lastScroll);
    // console.log(window.scrollY);

    if (lastScroll == 0) {
      isUp = false;
      isDown = false;
    } else if (window.scrollY > lastScroll) {
      isUp = false;
      isDown = true;
    } else if (window.scrollY < lastScroll) {
      isUp = true;
      isDown = false;
    }
    lastScroll = window.scrollY;
    // console.log(lastScroll);
    // console.log(scrolled);
    return {
      isUp: isUp,
      isDown: isDown,
    };
  }
  //========================================================================================================================================================
}

// // document.addEventListener('scroll', () => {
// //   let scrollTop = historySection.getBoundingClientRect().top;

// //   console.log(scrollY);

// //   if (scrollTop == 0) {
// //     historySection.scrollIntoView();
// //     historySlider.mousewheel.enable();
// //   } else {
// //   }
// // });
// const historyBtn = document.querySelector('.slider-history__btn ');
// historyBtn.addEventListener('click', () => {
//   const topOffset = document.querySelector('.page__next').offsetHeight;
//   console.log(topOffset);
//   // const topOffset = 0; // если не нужен отступ сверху
//   // const elementPosition = scrollTarget.getBoundingClientRect().top;
//   const offsetPosition = positionTop - topOffset;
//   console.log(positionTop);

//   window.scrollBy({
//     top: offsetPosition,
//     behavior: 'smooth',
//   });

//   // document.body.style.overflow = '';
//   // document.body.style.paddingRight = 0;
//   // historySlider.mousewheel.disable();
//   // window.scrollTo(0, );
//   // console.log('click');
// });

// const historySection = document.querySelector('.history-section');
// let scrollWidth = scrollWidthCalc();

// const coords = historySection.getBoundingClientRect();
// const positionTop = coords.top;
// const positionBottom = coords.bottom;

// document.addEventListener('scroll', () => {
//   console.log(positionTop);
//   if (positionTop >= 0 || positionBottom <= 0) {
//     scrollDirection();
//     // console.log(scrollDirection());
//   }
//   if (positionTop <= 0) {
//     // historySection.scrollIntoView();
//     // document.body.style.overflow = 'hidden';
//     // document.body.style.paddingRight = scrollWidth + 'px';
//     // historySlider.mousewheel.enable();
//   }
// });

// let lastScroll = 0;
// let isUp = false;
// let isDown = false;
// function scrollDirection() {
//   // console.log(lastScroll);
//   // console.log(window.scrollY);

//   if (lastScroll == 0) {
//     isUp = false;
//     isDown = false;
//   } else if (window.scrollY > lastScroll) {
//     isUp = false;
//     isDown = true;
//   } else if (window.scrollY < lastScroll) {
//     isUp = true;
//     isDown = false;
//   }
//   lastScroll = window.scrollY;
//   // console.log(lastScroll);
//   // console.log(scrolled);
//   return {
//     isUp: isUp,
//     isDown: isDown,
//   };
// }

// //* let scrollWidth = scrollWidthCalc();

// // const historyBtn = document.querySelector('.slider-history__btn ');
// // let scrollTop = historySection.getBoundingClientRect().top;
// // document.addEventListener('click', () => {
// //   window.scrollTo(0, scrollTop);
// // });

// // let historyBlockCoords = getCoords(historySection);

// // function getCoords(elem) {
// //   let box = elem.getBoundingClientRect();

// //   return {
// //     top: box.top + scrollY,
// //     left: box.left + scrollX,
// //   };
// // }

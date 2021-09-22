// function animate({ timing, draw, duration }) {
//   let start = performance.now();

//   requestAnimationFrame(function animate(time) {
//     // timeFraction изменяется от 0 до 1
//     let timeFraction = (time - start) / duration;

//     if (timeFraction > 1) timeFraction = 1;

//     // вычисление текущего состояния анимации
//     let progress = timing(timeFraction);
//     // console.log(progress);

//     draw(progress); // отрисовать её

//     if (timeFraction < 1) {
//       requestAnimationFrame(animate);
//     }
//   });
// }

// let targetElem = document.querySelector('.hero-section__bg');
// animate({
//   duration: 10000,
//   timing(timeFraction) {
//     return bounce(timeFraction);
//   },
//   draw(progress) {
//     targetElem.style.width = progress * 100 + '%';
//     // targetElem.style.width = progress * 100 + '%';
//   },
// });

// function bounce(timeFraction) {
//   for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
//     if (timeFraction >= (7 - 4 * a) / 11) {
//       return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
//     }
//   }
// }

// let images = [
//   `url("http://localhost:3000/img/hero-img-1.webp")`,
//   `url("http://localhost:3000/img/hero-img-2.webp")`,
//   `url("http://localhost:3000/img/hero-img-3.webp")`,
//   `url("http://localhost:3000/img/hero-img-4.webp")`,
//   `url("http://localhost:3000/img/hero-img-5.webp")`,
// ];

// class AnimateBg {
//   constructor(arr) {
//     const { images = [...arr] } = arr;

//     this.images = images;
//     // console.log(this.images);
//   }
//   changeBg2() {
//     let targetElem = document.querySelector('.hero-section__bg');

//   }
//   changeBg() {
//     const delay = 5000;
//     let currentIdx = 0;
//     let targetElem = document.querySelector('.hero-section__bg');
//     // let defaultBgImg = getComputedStyle(targetElem).backgroundImage;
//     // console.log(defaultBgImg);

//     setInterval(() => {
//       // if (this.images[currentIdx] == defaultBgImg) {
//       //   currentIdx++;
//       // }
//       console.log(currentIdx);
//       targetElem.style.backgroundImage = this.images[currentIdx];
//       currentIdx++;
//       console.log(targetElem.style.backgroundImage);
//       if (currentIdx >= this.images.length) {
//         currentIdx = 0;
//       }
//     }, delay);
//   }
//   checkLoaded() {
//     let promises = [];

//     this.images.forEach((src) => {
//       promises.push(
//         new Promise((resolve, reject) => {
//           let proxyImage = new Image();

//           proxyImage.addEventListener('load', () => {
//             resolve();
//           });

//           proxyImage.src = src;
//           // console.log(proxyImage);
//         })
//       );
//     });
//     Promise.all(promises).then(() => {
//       console.log('loaded');
//     });
//   }
// }

// const A = new AnimateBg(images);

// onload = () => {
//   A.changeBg();
// };

// console.log(A.changeBg());
// console.log(A.checkLoaded());

// initImg('.hero-section', [
//   '../img/hero-img-1.jpg',
//   '../img/hero-img-2.jpg',
//   '../img/hero-img-3.jpg',
//   '../img/hero-img-4.jpg',
//   '../img/hero-img-5.jpg',
// ]);

// function initImg(selector, srcArr) {
//   const img = document.querySelector(selector);
//   Object.assign(img, {
//     buf: Object.assign(new Image(), { img }),
//     srcArr: [...srcArr],
//     changeInterval: 5e3,
//     bufIdx: 0,
//     change: function () {
//       this.style.animationName = 'img-in';
//       this.src = this.buf.src || this.nextImage();
//       this.buf.src = this.nextImage();
//     },
//     nextImage: function () {
//       this.bufIdx = ++this.bufIdx < this.srcArr.length ? this.bufIdx : 0;
//       return this.srcArr[this.bufIdx];
//     },
//   });
//   img.buf.addEventListener('load', loadHandler);
//   img.addEventListener('animationend', animEndHandler);
//   img.change();
//   console.log(img);
//   return img;

//   function loadHandler() {
//     setTimeout(() => (this.img.style.animationName = 'img-out'), this.img.changeInterval);
//   }
//   function animEndHandler({ animationName }) {
//     if (animationName === 'img-out') this.change();
//   }
// }

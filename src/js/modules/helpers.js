const helpers = {
  toggleCards: function (options = {}) {
    const {
      containerSelector,
      cardSelector,
      cardActiveClass = 'active',
      modalSelector = null,
      modalActiveClass = 'active',
      closeModalButtonSelector = null,
      lockPaddingSelector = '.lock-padding',
      timeout = 200,
    } = options;

    const container = document.querySelector(containerSelector);

    if (!container) return;

    const lockPaddingElements = document.querySelectorAll(lockPaddingSelector);

    const modal = document.querySelector(modalSelector);
    const closeModalButton = document.querySelector(closeModalButtonSelector);

    let allCards = document.querySelectorAll(cardSelector);

    container.addEventListener('click', (e) => {
      let target = e.target.closest(cardSelector);

      if (!target) return;

      if (!container.contains(target)) return;

      const changeIfAllOpenCondition =
        !target.classList.contains(cardActiveClass) && isOpenModal(modal, modalActiveClass);
      const openIfAllHideCondition =
        !target.classList.contains(cardActiveClass) && !isOpenModal(modal, modalActiveClass);

      if (changeIfAllOpenCondition) {
        //change if modal & card are open
        deactivateAllCards(allCards, cardActiveClass);
        activateCard(target, cardActiveClass);
      } else if (openIfAllHideCondition) {
        //open if all hide
        deactivateAllCards(allCards, cardActiveClass);
        bodyLock();
        activateCard(target, cardActiveClass);
        openModal(modal, modalActiveClass);
      } else {
        //close if click on card
        deactivateCard(target, cardActiveClass);
        closeModal(modal, modalActiveClass);
        bodyUnlock();
      }

      //close if click on modal
      if (isOpenModal(modal, modalActiveClass)) {
        closeModalButton.addEventListener('click', () => {
          closeModal(modal, modalActiveClass);
          deactivateCard(target, cardActiveClass);
          bodyUnlock();
        });
      }
    });

    function scrollBarWidth(withPx = false) {
      let documentWidth = Math.round(document.documentElement.clientWidth);
      let windowsWidth = Math.round(window.innerWidth);
      let scrollbarWidth = windowsWidth - documentWidth;

      if (withPx) {
        return scrollbarWidth + 'px';
      } else {
        return scrollbarWidth;
      }
    }

    let unlock = true;

    function bodyLock() {
      if (lockPaddingElements.length > 0) {
        lockPaddingElements.forEach((element) => {
          element.style.transition = 'none';
          element.style.paddingRight = scrollBarWidth(true);
        });
      }

      document.body.style.paddingRight = scrollBarWidth(true);
      document.body.style.overflow = 'hidden';

      unlock = false;

      setTimeout(function () {
        unlock = true;
      }, timeout);
    }

    function bodyUnlock() {
      setTimeout(() => {
        if (lockPaddingElements.length > 0) {
          lockPaddingElements.forEach((element) => {
            element.style.paddingRight = '';

            window.addEventListener(
              'scroll',
              () => {
                element.style.transition = '';
              },
              {
                once: true,
              },
            );
          });
        }
        document.body.style.paddingRight = '';
        document.body.style.overflow = 'auto';
      }, timeout);

      unlock = false;

      setTimeout(() => {
        unlock = true;
      }, timeout);
    }

    function openModal(modalElement, activeClass) {
      modalElement.classList.add(activeClass);
    }

    function closeModal(modalElement, activeClass) {
      modalElement.classList.remove(activeClass);
    }

    function isOpenModal(element, activeClass) {
      return element.classList.contains(activeClass);
    }

    function activateCard(cardElement, activeClass) {
      cardElement.classList.add(activeClass);
    }

    function deactivateCard(cardElement, activeClass) {
      cardElement.classList.remove(activeClass);
    }

    function deactivateAllCards(elements, className) {
      elements.forEach((el) => {
        el.classList.remove(className);
      });
    }
  },
  getCoords: function (elem) {
    if (!elem) return;

    let box = elem.getBoundingClientRect();

    return {
      top: box.top,
      right: box.right,
      bottom: box.bottom,
      left: box.left,
      height: box.height,
    };
  },
  //Счетчик лет (прибавляет/удаляет по единице в зависимости от индекса текущего слайда)
  yearsCountChanger: function (willChangeCountSelector, transferredSlider) {
    const domElement = document.querySelector(willChangeCountSelector);

    let content = domElement.innerHTML;

    let isTargetNum = Number.isInteger(+content);

    if (!isTargetNum) return;

    if (transferredSlider.activeIndex > transferredSlider.previousIndex) {
      domElement.innerHTML =
        +domElement.innerHTML + +transferredSlider.activeIndex - +transferredSlider.previousIndex;
    } else if (transferredSlider.activeIndex < transferredSlider.previousIndex) {
      domElement.innerHTML =
        +domElement.innerHTML - +transferredSlider.previousIndex + +transferredSlider.activeIndex;
    }
  },
};

export const toggleCards = helpers.toggleCards;
export const getCoords = helpers.getCoords;
export const yearsCountChanger = helpers.yearsCountChanger;

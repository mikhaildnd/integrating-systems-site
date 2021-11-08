const helpers = {
  toggleClass: function (options = {}) {
    const {
      containerSelector,
      eTargetSelector,
      toggleClass = 'active',
      additionalElement = null,
      additionalClassName = 'active',
      rmClasses = false,
      // closeElement = null,
    } = options;

    const container = document.querySelector(containerSelector);

    if (!container) return;

    container.addEventListener('click', (e) => {
      let target = e.target.closest(eTargetSelector);
      console.log(e.target);

      if (!target) return;

      if (!container.contains(target)) return;

      if (target.classList.contains(toggleClass)) {
        clearClasses(eTargetSelector);
      } else {
        clearClasses(eTargetSelector);
        target.classList.toggle(toggleClass);
      }

      if (additionalElement) {
        additionalClassesToggler(additionalElement, additionalClassName);
      }
      // if (rmClasses) {
      //   removeActiveClasses(target);
      // }
    });

    // let prevIdx = null;

    // function removeActiveClasses(target) {
    //   let idx = [...target.parentElement.children].indexOf(target);
    //   // console.log(idx);
    //   // console.log(prevIdx);

    //   if (prevIdx != null) {
    //     let prevTarget = [...target.parentElement.children][prevIdx];

    //     console.log('idx: ' + idx, ' prevIdx: ' + prevIdx);
    //     // console.log(idx !== prevIdx);
    //     if (idx !== prevIdx) {
    //       prevTarget.classList.remove(toggleClass);
    //     }
    //   }

    //   prevIdx = idx;
    // }

    function additionalClassesToggler(additionalElement, additionalClassName) {
      const element = document.querySelector(additionalElement);

      element.classList.toggle(additionalClassName);
    }

    function clearClasses(eTargetSelector) {
      let elems = document.querySelectorAll(eTargetSelector);
      elems.forEach((e) => {
        e.classList.remove(toggleClass);
      });
    }
  },
};

export const toggleClass = helpers.toggleClass;

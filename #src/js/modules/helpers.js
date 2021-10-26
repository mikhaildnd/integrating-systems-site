const helpers = {
  toggleClass: function (options = {}) {
    const { container, eTargetSelector, toggleClass = 'active' } = options;

    if (!container) return;
    container.addEventListener('click', (e) => {
      let target = e.target.closest(eTargetSelector);

      if (!target) return;

      if (!container.contains(target)) return;

      target.classList.toggle(toggleClass);
    });
  },
};

export const toggleClass = helpers.toggleClass;

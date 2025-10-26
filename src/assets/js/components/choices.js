import Choices from 'choices.js';


(function () {
  const selects = document.querySelectorAll('[data-choices]') || [];

  selects.forEach((select) => {
    const elementOptions = select.dataset.choices ? JSON.parse(select.dataset.choices) : {};

    const defaultOptions = {
      shouldSort: false,
      searchEnabled: false,
      classNames: {
        containerOuter: ['choices', 'position-relative', 'w-100'],
        listSingle: ['choices__list', 'form-control', 'w-100'],
        inputCloned: ['choices__input', 'form-control-xs'],
        listDropdown: ['choices__list--dropdown', 'dropdown-menu'],
        itemChoice: ['choices__item--choice', 'dropdown-item'],
        activeState: 'is-active',
        selectedState: 'is-selected'
      }
    };

    const options = {
      ...elementOptions,
      ...defaultOptions,
    };

    new Choices(select, options);
  });
})();
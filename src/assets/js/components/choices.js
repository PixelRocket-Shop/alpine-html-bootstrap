import Choices from 'choices.js';


(function () {
  const selects = document.querySelectorAll('[data-choices]') || [];

  selects.forEach((select) => {
    const elementOptions = select.dataset.choices ? JSON.parse(select.dataset.choices) : {};

    const defaultOptions = {
      shouldSort: false,
      searchEnabled: false,
      classNames: {
        containerOuter: 'position-relative w-100',
        listSingle: 'form-control w-100',
        inputCloned: 'form-control-xs',
        listDropdown: 'dropdown-menu',
        itemChoice: 'dropdown-item',
        activeState: 'show',
        selectedState: 'active'
      }
    };

    const options = {
      ...elementOptions,
      ...defaultOptions,
    };

    new Choices(select, options);
  });
})();
import {
  Tooltip
} from 'bootstrap';

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      let defaultOptions = {
        boundary: 'window',
        fallbackPlacements: ['top']
      };
      let customOptions = tooltipTriggerEl.dataset.bsOptions ? JSON.parse(tooltipTriggerEl.dataset.bsOptions) : {};
      const options = {
        ...defaultOptions,
        ...customOptions
      };      
      return new Tooltip(tooltipTriggerEl, options);
    });
  });
})();
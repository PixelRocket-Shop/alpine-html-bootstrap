import {
    Popover
  } from 'bootstrap';
  
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
          let defaultOptions = {
            container: 'body',
            trigger: 'focus'
          };
          let customOptions = popoverTriggerEl.dataset.bsOptions ? JSON.parse(popoverTriggerEl.dataset.bsOptions) : {};
          const options = {
            ...defaultOptions,
            ...customOptions
          };
          return new Popover(popoverTriggerEl, options)
        });
    });
  })();
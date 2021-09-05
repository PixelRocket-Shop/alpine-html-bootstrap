import SimpleBar from 'simplebar';

(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const simpleBars = document.querySelectorAll('[data-pixr-simplebar]') || [];

        simpleBars.forEach((simplebar) => {
            new SimpleBar(simplebar, {
                autoHide: false
            })
        });
        
    });
})();
// Remove CSS class d-none after page load. 
// It's a quick fix to ensure offcanvas isn't visible sometimes on page load.
(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const offCanvasElems = document.querySelectorAll('.offcanvas') || [];

        offCanvasElems.forEach((offcanvas) => {
            offcanvas.classList.remove('d-none');
        });
        
    });
})();
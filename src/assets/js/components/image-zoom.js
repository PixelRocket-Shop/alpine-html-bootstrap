import mediumZoom from 'medium-zoom';

(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const zoomImgs = document.querySelectorAll('[data-zoomable]') || [];

        zoomImgs.forEach((img) => {
            const zoom = new mediumZoom(img, {
                margin: 30
            });
        });
        
    });
})();
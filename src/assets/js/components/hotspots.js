import {
    Hotspot
} from '../classes/hotspot';

document.addEventListener('DOMContentLoaded', function () {
    const hotspots = document.querySelectorAll('.hotspot') || [];
    
    hotspots.forEach((hotspot) => {
        new Hotspot(hotspot);
    });
});
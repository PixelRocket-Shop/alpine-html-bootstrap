import tippy from 'tippy.js';

export class Hotspot {
    constructor(hotspot) {
        this.hotspot = hotspot;
        this.options = this.hotspot.dataset && this.hotspot.dataset.options ? JSON.parse(this.hotspot.dataset.options) : false;
        this.type = this.options && this.options.type ? this.options.type : 'tippy';
        this.trigger = this.options && this.options.trigger ? this.options.trigger : 'click';
        this.hotspotContent = null;

        this.init();
    }

    init() {
        if (this.options.placement) {
            this.positionHotspot();
        }
        if (this.options.alwaysVisible) {
            this.hotspot.classList.add('always-show');
        }
        if (this.options.alwaysAnimate) {
            this.hotspot.classList.add('always-animate');
        }

        this.setHotspotContent();

        tippy(this.hotspot, {
            allowHTML: true,
            trigger: this.trigger,
            content: this.hotspotContent,
            theme: 'light',
            animation: 'shift-away',
            interactive: true,
            hideOnClick: true,
            appendTo: document.body,
        })
    }

    setHotspotContent() {
        if (this.options.contentTarget) {
            let content = document.querySelector(`${this.options.contentTarget}`);
            if (content) {
                this.hotspotContent = content.innerHTML;
            } else {
                this.hotspotContent = 'Missing content'
            }
            return;
        }
        if (this.options.content) {
            this.hotspotContent = this.options.content;
            return;
        }
        this.hotspotContent = 'Missing content'
    }


    positionHotspot() {
        Object.keys(this.options.placement).forEach((key) => {
            this.hotspot.style[key] = `${this.options.placement[key]}`;
        })
    }
}
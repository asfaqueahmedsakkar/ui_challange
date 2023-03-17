"use strict";
class Slider {
    constructor(element, { ratio: ratio, autoSlide: autoSlide, autoSlideDuration: autoSlideDuration, initialSlide: initialSlide, infiniteLoop: infiniteLoop } = { ratio: 1, autoSlide: false, autoSlideDuration: new Duration({ second: 5 }), initialSlide: 0, infiniteLoop: false }) {
        this.element = element;
        this.ratio = ratio;
        this.autoSlide = autoSlide;
        this.autoSlideDuration = autoSlideDuration;
        this.initialSlide = initialSlide;
        this.infiniteLoop = infiniteLoop;
        this.currentSlide = initialSlide;
    }
}

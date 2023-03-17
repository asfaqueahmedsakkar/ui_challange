"use strict";
class Slider {
    constructor(element, { ratio, autoSlide, autoSlideDuration, initialSlide, infiniteLoop, direction } = { ratio: 1, autoSlide: false, autoSlideDuration: new Duration({ second: 5 }), initialSlide: 0, infiniteLoop: false, direction: ScrollDirection.horizontal }) {
        this.element = element;
        this.ratio = ratio;
        this.autoSlide = autoSlide;
        this.autoSlideDuration = autoSlideDuration;
        this.initialSlide = initialSlide;
        this.infiniteLoop = infiniteLoop;
        this.direction = direction;
        this.currentSlide = initialSlide;
        this.nextSlide = initialSlide;
        this.scrollable = new Scrollable(element);
    }
    getCurrentSlider() {
        return this.currentSlide;
    }
    slideTo({ sliderNo }) {
        this.nextSlide = sliderNo;
        var scrollPosition = sliderNo * this.scrollable.getSize();
        this.scrollable.scrollTo();
    }
}

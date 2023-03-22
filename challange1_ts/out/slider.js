"use strict";
class Slider {
    constructor(element, { ratio: ratio = 1, autoSlide: autoSlide = false, autoSlideDuration: autoSlideDuration = new Duration({ second: 1 }), initialSlide: initialSlide = 0, infiniteLoop: infiniteLoop = false } = { ratio: 1, autoSlide: false, autoSlideDuration: new Duration({ second: 5 }), initialSlide: 0, infiniteLoop: false }) {
        this.infiniteLoop = false;
        this.extraSlideCount = 0;
        this.element = element;
        this.ratio = ratio;
        this.autoSlide = autoSlide;
        this.autoSlideDuration = autoSlideDuration;
        this.initialSlide = initialSlide;
        this.currentSlide = initialSlide;
        this.nextSlide = initialSlide;
        this.totalSlides = this.element.children.length;
        this.scrollable = new Scrollable(this.element);
        this.setInfiniteLoop(infiniteLoop);
        if (infiniteLoop) {
            var allChild = Array.from(this.element.children);
            allChild.forEach(element => {
                this.element.removeChild(element);
            });
            for (var i = 0; i < this.totalSlides + 2; i++) {
                this.element.appendChild(allChild[(this.totalSlides - 1 + i) % this.totalSlides].cloneNode());
            }
        }
        this.scrollable.updateScroll(this.getSlideIndex(this.currentSlide) * this.scrollable.getSize());
    }
    setInfiniteLoop(state) {
        this.infiniteLoop = state;
    }
    getCurrentSlide() {
        return Math.round(this.scrollable.getScroll() / this.scrollable.getSize());
    }
    slideTo(currentSlide, duration = new Duration({ millisecond: 300 }), curve = Curves.linner, onSlideDone) {
        if (this.scrollable.getScrollState() != AnimatorStatus.playing) {
            if (currentSlide != this.currentSlide) {
                this.nextSlide = currentSlide;
                this.scrollable.scrollTo(this.getSlideIndex(this.nextSlide) * this.scrollable.getSize(), duration, curve);
                setTimeout(() => {
                    this.currentSlide = this.nextSlide;
                    if (onSlideDone != undefined)
                        onSlideDone();
                }, duration.getInMillisecond() + 50);
            }
        }
    }
    next(duration = new Duration({ millisecond: 300 }), curve = Curves.linner) {
        if (this.scrollable.getScrollState() != AnimatorStatus.playing && this.hasNext()) {
            this.slideTo(this.currentSlide + 1, duration, curve, () => {
                if (this.infiniteLoop && this.currentSlide == this.totalSlides) {
                    this.currentSlide = 0;
                    this.scrollable.updateScroll(this.scrollable.getSize());
                }
            });
        }
    }
    previous(duration = new Duration({ millisecond: 300 }), curve = Curves.linner) {
        if (this.scrollable.getScrollState() != AnimatorStatus.playing && this.hasPrevious()) {
            this.slideTo(this.currentSlide - 1, duration, curve, () => {
                if (this.infiniteLoop && this.currentSlide == -1) {
                    this.currentSlide = this.totalSlides - 1;
                    this.scrollable.updateScroll(this.scrollable.getSize() * this.totalSlides);
                }
            });
        }
    }
    hasNext() {
        if (this.infiniteLoop)
            return true;
        if (this.currentSlide < this.totalSlides - 1)
            return true;
        return false;
    }
    hasPrevious() {
        if (this.infiniteLoop)
            return true;
        if (this.currentSlide > 0)
            return true;
        return false;
    }
    addSlideListener(sliderListene) {
        this.scrollable.addScrollListener((scroll) => {
            sliderListene((scroll / this.scrollable.getSize() + (this.totalSlides - (this.infiniteLoop ? 1 : 0))) % this.totalSlides);
        });
    }
    getSlideIndex(index) {
        return index + (this.infiniteLoop ? 1 : 0);
    }
}

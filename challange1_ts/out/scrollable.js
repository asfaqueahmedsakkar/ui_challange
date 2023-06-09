"use strict";
class Scrollable {
    constructor(element, scrollDirection = ScrollDirection.vertical) {
        this.scrolling = false;
        this.scroll = 0;
        this.lastScroll = 0;
        this.animation = new Animator();
        this.element = element;
        this.direction = scrollDirection;
        this._initialiseListeners();
        this.element.style.cssText += `display: flex;flex-direction:flex-direction: ${scrollDirection == ScrollDirection.horizontal ? 'row' : 'column'};`;
        console.log(this.direction);
    }
    addScrollEventListener(listener) {
        this.scrollEnevtListener = listener;
    }
    addScrollListener(listener) {
        this.scrollListener = listener;
    }
    getScroll() {
        if (this.direction == ScrollDirection.vertical)
            return this.element.scrollTop;
        else
            return this.element.scrollLeft;
    }
    getSize() {
        if (this.direction == ScrollDirection.vertical)
            //return this.element.getBoundingClientRect().height;
            return this.element.clientHeight;
        else
            return this.element.getBoundingClientRect().width;
    }
    updateScroll(scroll) {
        if (this.direction == ScrollDirection.vertical)
            this.element.scrollTop = scroll;
        else
            this.element.scrollLeft = scroll;
    }
    scrollTo(position, duration = new Duration(), curve = Curves.linner) {
        this.animation.stop();
        this.animation.addListener((value) => this.updateScroll(value));
        this.animation.play({ from: this.getScroll(), to: position, duration: duration, curve: curve });
    }
    _initialiseListeners() {
        this.element.addEventListener('scroll', (e) => {
            this.scroll = this.getScroll();
            if (this.scrollListener != undefined) {
                this.scrollListener(this.scroll);
            }
            if (this.scrolling == false) {
                this.scrolling = true;
                if (this.interval == undefined && this.scrollEnevtListener != undefined) {
                    this.scrollEnevtListener(ScrollEvent.start);
                    this.interval = setInterval(() => {
                        this.scrollEnevtListener(ScrollEvent.scrolling);
                        if (this.lastScroll == this.scroll) {
                            this.lastScroll = this.scroll;
                            clearInterval(this.interval);
                            this.interval = undefined;
                            this.scrolling = false;
                            this.scrollEnevtListener(ScrollEvent.stop);
                        }
                        else {
                            this.lastScroll = this.scroll;
                        }
                    }, 100);
                }
            }
        });
    }
    getScrollState() {
        var _a;
        return (_a = this.animation) === null || _a === void 0 ? void 0 : _a.status;
    }
    stopScrollOnScrollbarOrDrag() {
        this.element.style.cssText += "overflow: hidden;behavior: smooth;";
    }
}
var ScrollEvent;
(function (ScrollEvent) {
    ScrollEvent[ScrollEvent["start"] = 0] = "start";
    ScrollEvent[ScrollEvent["scrolling"] = 1] = "scrolling";
    ScrollEvent[ScrollEvent["stop"] = 2] = "stop";
})(ScrollEvent || (ScrollEvent = {}));
var ScrollDirection;
(function (ScrollDirection) {
    ScrollDirection[ScrollDirection["horizontal"] = 0] = "horizontal";
    ScrollDirection[ScrollDirection["vertical"] = 1] = "vertical";
})(ScrollDirection || (ScrollDirection = {}));

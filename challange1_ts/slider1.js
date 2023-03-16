class Slider {
    isDown = false;
    startX;
    scrollLeft;
    lockScroll = false;
    startPage = 0;
    endPage = 0;

    onPageUpade;
    onScrollDone;
    onScrollStart;

    constructor(item, direction) {
        this.isDown = false;
        this.slider = item;
        this.direction = direction;
        this.initSlider();
    };


    end = () => {
        this.isDown = false;
        this.slider.classList.remove('active');
        if (this.pageSnapping) {
            var fraction = this.slider.scrollLeft / this.slider.offsetWidth;
            let scrollLeft = Math.round(fraction) * this.slider.offsetWidth;

            this.endPage = Math.round(fraction);

            this.slider.scrollTo({ left: scrollLeft, top: 0, behavior: 'smooth' });
            if (this.onScrollDone)
                this.checkScrollIsFinished();
        }
    }

    checkScrollIsFinished = () => {
        const checkIfScrollToIsFinished = setInterval(() => {

            if (this.slider.scrollLeft / this.slider.offsetWidth === this.endPage) {
                this.onScrollDone(this.page());
                clearInterval(checkIfScrollToIsFinished);
            }
        }, 25);
    }

    start = (e) => {
        this.isDown = true;
        this.slider.classList.add('active');
        this.startX = e.pageX || e.touches[0].pageX - this.slider.offsetLeft;
        this.scrollLeft = this.slider.scrollLeft;
        this.startPage = Math.round(this.slider.scrollLeft / this.slider.offsetWidth);
        if (this.onScrollStart)
            this.onPageScroll();
    }

    move = (e) => {
        e.preventDefault();
        if (!this.isDown || this.lockScroll) return;
        const x = e.pageX || e.touches[0].pageX - this.slider.offsetLeft;
        const dist = (x - this.startX);
        this.slider.scrollLeft = this.scrollLeft - dist;
    }

    onPageScroll = () => {
        if (this.onPageUpade)
            this.onPageUpade(this.slider.scrollLeft / this.slider.offsetWidth);
    }

    initSlider() {
        this.slider.style.cssText += "display: flex;overflow-x: hidden;behavior: smooth;";

        Array.from(this.slider.children).forEach(element => {
            element.style.cssText += "height: 100%;width: 100%;flex-shrink: 0;"
        });


        this.slider.addEventListener('mousedown', this.start);
        this.slider.addEventListener('touchstart', this.start);

        this.slider.addEventListener('mousemove', this.move);
        this.slider.addEventListener('touchmove', this.move);

        this.slider.addEventListener('mouseleave', this.end);
        this.slider.addEventListener('mouseup', this.end);
        this.slider.addEventListener('touchend', this.end);


        this.slider.addEventListener(
            "scroll",
            this.onPageScroll,
            { passive: true }
        )
    }

    totalPages() {
        return this.slider.children.length;
    }

    page() {
        return this.slider.scrollLeft / this.slider.offsetWidth;
    }

    init() {
        if (this.onPageUpade)
            this.onPageUpade(0)
    }
}

class EndScrollNotifier {

    constructor() {
    }


    notifyOnVerticalScrollEnd = (element, target, onEndScroll) => {
        const checkIfScrollToIsFinished = setInterval(() => {

            if (element.scrollTop === target) {
                onEndScroll();
                clearInterval(checkIfScrollToIsFinished);
            }
        }, 25);
    }
}
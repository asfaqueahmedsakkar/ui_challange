class Scrollable {
    element: HTMLElement;
    scrollEnevtListener?: ScrollEventListener;
    scrollListener?: ScrollListener;
    scrolling: boolean = false;
    interval?: any;
    direction: ScrollDirection;
    scroll: number = 0;

    private lastScroll: number = 0;
    private animation: Animator = new Animator();


    constructor(element: HTMLElement, scrollDirection: ScrollDirection = ScrollDirection.vertical) {
        this.element = element;
        this.direction = scrollDirection;
        this._initialiseListeners();
    }

    addScrollEventListener(listener: ScrollEventListener): void {
        this.scrollEnevtListener = listener;
    }

    addScrollListener(listener: ScrollListener): void {
        this.scrollListener = listener;
    }

    getScroll(): number {
        if (this.direction == ScrollDirection.vertical)
            return this.element.scrollTop;
        else
            return this.element.scrollLeft;
    }

    getWidth(): number {
        if (this.direction == ScrollDirection.vertical)
            return this.element.offsetHeight;
        else
            return this.element.offsetWidth;
    }

    updateScroll(scroll: number): void {
        if (this.direction == ScrollDirection.vertical)
            this.element.scrollTop = scroll;
        else
            this.element.scrollLeft = scroll;
    }

    scrollTo(position: number, duration: Duration = new Duration(), curve: Curves = Curves.linner): void {
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
                        this.scrollEnevtListener!(ScrollEvent.scrolling);
                        if (this.lastScroll == this.scroll) {
                            this.lastScroll = this.scroll;
                            clearInterval(this.interval);
                            this.interval = undefined;
                            this.scrolling = false;
                            this.scrollEnevtListener!(ScrollEvent.stop);
                        } else {
                            this.lastScroll = this.scroll;
                        }
                    }, 100);
                }
            }
        })
    }

}

enum ScrollEvent { start, scrolling, stop }

enum ScrollDirection { horizontal, vertical }

type ScrollEventListener = (event: ScrollEvent) => void;

type ScrollListener = (scorllAmount: number) => void;


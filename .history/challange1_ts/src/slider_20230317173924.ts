class Slider {
    element: HTMLElement;
    ratio: number;
    autoSlide: boolean;
    autoSlideDuration: Duration;
    initialSlide: number;
    infiniteLoop: boolean;
    direction: ScrollDirection;

    private scrollable: Scrollable;

    constructor(element: HTMLElement,
        { ratio, autoSlide, autoSlideDuration, initialSlide, infiniteLoop, direction }:
            { ratio: number, autoSlide: boolean, autoSlideDuration: Duration, initialSlide: number, infiniteLoop: boolean, direction: ScrollDirection } =
            { ratio: 1, autoSlide: false, autoSlideDuration: new Duration({ second: 5 }), initialSlide: 0, infiniteLoop: false, direction: ScrollDirection.horizontal }) {
        this.element = element;
        this.ratio = ratio;
        this.autoSlide = autoSlide;
        this.autoSlideDuration = autoSlideDuration;
        this.initialSlide = initialSlide;
        this.infiniteLoop = infiniteLoop;
        this.direction = direction;
        this.scrollable = new Scrollable(element);
    }

    getCurrentSlider(): number {
        return this.scrollable.getScroll():
    }

    slideTo({ sliderNo }: { sliderNo: number }) {

    }

}
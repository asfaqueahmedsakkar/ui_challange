interface DurationParameter {
    millisecond?: number;
    second?: number;
    microsecond?: number;
    minute?: number;
}

class Duration {
    millisecond?: number;
    second?: number;
    microsecond?: number;
    minute?: number;

    constructor({ millisecond: millisecond, second: second, microsecond: microsecond, minute: minute }: DurationParameter = { millisecond: 300 }) {
        if (millisecond == undefined && microsecond == undefined && second == undefined && minute == undefined)
            throw ("please define any of the duration perametar");
        this.microsecond = microsecond;
        this.millisecond = millisecond;
        this.second = second;
        this.minute = minute;
    }


    getInMillisecond(): number {
        return (this.second ?? 0) * 1000 + (this.minute ?? 0) * 60 * 1000 + (this.microsecond ?? 0) / 1000 + (this.millisecond ?? 0);
    }
}

interface AnimatorParameter {
    duration?: Duration;
    curve?: Curves;
}


type CurveFunction = ({ from, to, currentFrame, totalFrame }: { from: number, to: number, currentFrame: number, totalFrame: number }) => number;

class Curve {

    static getCurrentCurveFunction = (curveInUse: Curves): CurveFunction => {
        var curveFunction: CurveFunction;

        if (curveInUse == Curves.linner) {
            curveFunction = Curve.linerCurve;
        } else if (curveInUse == Curves.easeInQuad) {
            curveFunction = Curve.easeInQuad;
        } else if (curveInUse == Curves.easeOutQuad) {
            curveFunction = Curve.easeOutQuad;
        } else if (curveInUse == Curves.easeInOutQuad) {
            curveFunction = Curve.easeInOutQuad;
        } else if (curveInUse == Curves.easeInSine) {
            curveFunction = Curve.easeInSine;
        } else if (curveInUse == Curves.easeOutSine) {
            curveFunction = Curve.easeOutSine;
        } else if (curveInUse == Curves.easeInOutSine) {
            curveFunction = Curve.easeInOutSine;
        } else if (curveInUse == Curves.easeInExpo) {
            curveFunction = Curve.easeInExpo;
        } else if (curveInUse == Curves.easeOutExpo) {
            curveFunction = Curve.easeOutExpo;
        } else if (curveInUse == Curves.easeInOutExpo) {
            curveFunction = Curve.easeInOutExpo;
        } else if (curveInUse == Curves.easeInCirc) {
            curveFunction = Curve.easeInCirc;
        } else if (curveInUse == Curves.easeOutCirc) {
            curveFunction = Curve.easeOutCirc;
        } else if (curveInUse == Curves.easeInOutCirc) {
            curveFunction = Curve.easeInOutCirc;
        } else {
            curveFunction = this.linerCurve;
        }
        return curveFunction;
    }

    static linerCurve: CurveFunction = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
        const change: number = to - from;
        return change * (currentFrame / totalFrame) + from;
    };


    static easeInQuad: CurveFunction = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
        const change: number = to - from;
        var t: number = currentFrame / totalFrame;
        var d: number = totalFrame / totalFrame;

        return change * (t /= d) * t + from;
    };


    static easeOutQuad: CurveFunction = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
        const change: number = to - from;
        var t: number = currentFrame / totalFrame;
        var d: number = totalFrame / totalFrame;

        return -change * (t /= d) * (t - 2) + from;
    };


    static easeInOutQuad: CurveFunction = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
        const change: number = to - from;
        var t: number = currentFrame / totalFrame;
        var d: number = totalFrame / totalFrame;

        if ((t /= d / 2) < 1) return change / 2 * t * t + from;
        return -change / 2 * ((--t) * (t - 2) - 1) + from;
    };


    static easeInSine: CurveFunction = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
        const change: number = to - from;
        var t: number = currentFrame / totalFrame;
        var d: number = totalFrame / totalFrame;

        return -change * Math.cos(t / d * (Math.PI / 2)) + change + from;
    };


    static easeOutSine: CurveFunction = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
        const change: number = to - from;
        var t: number = currentFrame / totalFrame;
        var d: number = totalFrame / totalFrame;

        return change * Math.sin(t / d * (Math.PI / 2)) + from;
    };


    static easeInOutSine: CurveFunction = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
        const change: number = to - from;
        var t: number = currentFrame / totalFrame;
        var d: number = totalFrame / totalFrame;

        return -change / 2 * (Math.cos(Math.PI * t / d) - 1) + from;
    };


    static easeInExpo: CurveFunction = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
        const change: number = to - from;
        var t: number = currentFrame / totalFrame;
        var d: number = totalFrame / totalFrame;

        return (t == 0) ? from : change * Math.pow(2, 10 * (t / d - 1)) + from;
    };


    static easeOutExpo: CurveFunction = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
        const change: number = to - from;
        var t: number = currentFrame / totalFrame;
        var d: number = totalFrame / totalFrame;

        return (t == d) ? from + change : change * (-Math.pow(2, -10 * t / d) + 1) + from;
    };


    static easeInOutExpo: CurveFunction = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
        const change: number = to - from;
        var t: number = currentFrame / totalFrame;
        var d: number = totalFrame / totalFrame;

        if (t == 0) return from;
        if (t == d) return from + change;
        if ((t /= d / 2) < 1) return change / 2 * Math.pow(2, 10 * (t - 1)) + from;
        return change / 2 * (-Math.pow(2, -10 * --t) + 2) + from;
    };


    static easeInCirc: CurveFunction = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
        const change: number = to - from;
        var t: number = currentFrame / totalFrame;
        var d: number = totalFrame / totalFrame;

        return -change * (Math.sqrt(1 - (t /= d) * t) - 1) + from;
    };


    static easeOutCirc: CurveFunction = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
        const change: number = to - from;
        var t: number = currentFrame / totalFrame;
        var d: number = totalFrame / totalFrame;

        return change * Math.sqrt(1 - (t = t / d - 1) * t) + from;
    };


    static easeInOutCirc: CurveFunction = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
        const change: number = to - from;
        var t: number = currentFrame / totalFrame;
        var d: number = totalFrame / totalFrame;

        if ((t /= d / 2) < 1) return -change / 2 * (Math.sqrt(1 - t * t) - 1) + from;
        return change / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + from;
    };
}

enum Curves {
    linner, easeInQuad, easeOutQuad, easeInOutQuad, easeInSine, easeOutSine, easeInOutSine, easeInExpo,
    easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc, easeInOutCirc,
}


class Animator {
    duration: Duration;
    curve: Curves;
    status: AnimatorStatus = AnimatorStatus.stoped;

    private animationListener?: AnimatorListener;
    private interval?: any;
    private intervalInMillisecond: number = 10;
    private frameCount: number = 0;
    private totalFrame: number = 0;

    private from: number = 0;
    private to: number = 0;
    private currentAnimationValue: number = 0;
    private durationInUse?: Duration;
    private curveInUse?: Curves;


    constructor({ duration = new Duration(), curve = Curves.linner }: AnimatorParameter = {}) {
        this.duration = duration;
        this.curve = curve ?? Curves.linner;
    }

    play({ from = 0, to = 1, duration, curve }: { from?: number, to?: number, duration?: Duration, curve?: Curves } = { from: 0, to: 1 }): void {
        this.from = from;
        this.to = to;

        this.status = AnimatorStatus.started;
        this.curveInUse = curve ?? this.curve;
        this.durationInUse = duration ?? this.duration;

        const durationInMilisecond: number = this.durationInUse.getInMillisecond();
        this.totalFrame = durationInMilisecond / this.intervalInMillisecond;
        this.frameCount = 0;

        this.startAnimation();
    }


    pause(): void {
        if (this.status == AnimatorStatus.playing) {
            this.status = AnimatorStatus.paused;
            this.clearInterval();
        }
    }

    resume(): void {
        if (this.status == AnimatorStatus.paused) {
            this.status = AnimatorStatus.resumed;
            this.startAnimation();
        }
    }

    stop(): void {
        this.clearInterval();
        this.totalFrame = 0;
        this.frameCount = 0;
        this.status = AnimatorStatus.stoped;
    }

    addListener(listener: AnimatorListener): void {
        this.animationListener = listener;
    }

    private clearInterval() {
        clearInterval(this.interval);
        this.interval = undefined;
    }

    private startAnimation() {
        var curveFunction: CurveFunction = Curve.getCurrentCurveFunction(this.curveInUse!);

        if (this.interval != undefined)
            clearInterval(this.interval);

        this.interval = setInterval(() => {
            this.frameCount++;
            this.status = AnimatorStatus.playing;
            this.currentAnimationValue = curveFunction({ to: this.to, from: this.from, currentFrame: this.frameCount, totalFrame: this.totalFrame });
            if (this.animationListener != undefined) {
                this.animationListener(this.currentAnimationValue);
            }
            if (this.frameCount == this.totalFrame) {
                this.stop();
            }
        }, this.intervalInMillisecond);
    }

}

type AnimatorListener = (animationValue: number) => void;
enum AnimatorStatus { playing, started, stoped, paused, resumed }
"use strict";
var _a;
class Duration {
    constructor({ millisecond: millisecond, second: second, microsecond: microsecond, minute: minute } = { millisecond: 300 }) {
        if (millisecond == undefined && microsecond == undefined && second == undefined && minute == undefined)
            throw ("please define any of the duration perametar");
        this.microsecond = microsecond;
        this.millisecond = millisecond;
        this.second = second;
        this.minute = minute;
    }
}
class Curve {
}
_a = Curve;
Curve.getCurrentCurveFunction = (curveInUse) => {
    var curveFunction;
    if (curveInUse == Curves.linner) {
        curveFunction = Curve.linerCurve;
    }
    else if (curveInUse == Curves.easeInQuad) {
        curveFunction = Curve.easeInQuad;
    }
    else if (curveInUse == Curves.easeOutQuad) {
        curveFunction = Curve.easeOutQuad;
    }
    else if (curveInUse == Curves.easeInOutQuad) {
        curveFunction = Curve.easeInOutQuad;
    }
    else if (curveInUse == Curves.easeInSine) {
        curveFunction = Curve.easeInSine;
    }
    else if (curveInUse == Curves.easeOutSine) {
        curveFunction = Curve.easeOutSine;
    }
    else if (curveInUse == Curves.easeInOutSine) {
        curveFunction = Curve.easeInOutSine;
    }
    else if (curveInUse == Curves.easeInExpo) {
        curveFunction = Curve.easeInExpo;
    }
    else if (curveInUse == Curves.easeOutExpo) {
        curveFunction = Curve.easeOutExpo;
    }
    else if (curveInUse == Curves.easeInOutExpo) {
        curveFunction = Curve.easeInOutExpo;
    }
    else if (curveInUse == Curves.easeInCirc) {
        curveFunction = Curve.easeInCirc;
    }
    else if (curveInUse == Curves.easeOutCirc) {
        curveFunction = Curve.easeOutCirc;
    }
    else if (curveInUse == Curves.easeInOutCirc) {
        curveFunction = Curve.easeInOutCirc;
    }
    else {
        curveFunction = _a.linerCurve;
    }
    return curveFunction;
};
Curve.linerCurve = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
    const change = to - from;
    return change * (currentFrame / totalFrame) + from;
};
Curve.easeInQuad = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
    const change = to - from;
    var t = currentFrame / totalFrame;
    var d = totalFrame / totalFrame;
    return change * (t /= d) * t + from;
};
Curve.easeOutQuad = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
    const change = to - from;
    var t = currentFrame / totalFrame;
    var d = totalFrame / totalFrame;
    return -change * (t /= d) * (t - 2) + from;
};
Curve.easeInOutQuad = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
    const change = to - from;
    var t = currentFrame / totalFrame;
    var d = totalFrame / totalFrame;
    if ((t /= d / 2) < 1)
        return change / 2 * t * t + from;
    return -change / 2 * ((--t) * (t - 2) - 1) + from;
};
Curve.easeInSine = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
    const change = to - from;
    var t = currentFrame / totalFrame;
    var d = totalFrame / totalFrame;
    return -change * Math.cos(t / d * (Math.PI / 2)) + change + from;
};
Curve.easeOutSine = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
    const change = to - from;
    var t = currentFrame / totalFrame;
    var d = totalFrame / totalFrame;
    return change * Math.sin(t / d * (Math.PI / 2)) + from;
};
Curve.easeInOutSine = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
    const change = to - from;
    var t = currentFrame / totalFrame;
    var d = totalFrame / totalFrame;
    return -change / 2 * (Math.cos(Math.PI * t / d) - 1) + from;
};
Curve.easeInExpo = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
    const change = to - from;
    var t = currentFrame / totalFrame;
    var d = totalFrame / totalFrame;
    return (t == 0) ? from : change * Math.pow(2, 10 * (t / d - 1)) + from;
};
Curve.easeOutExpo = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
    const change = to - from;
    var t = currentFrame / totalFrame;
    var d = totalFrame / totalFrame;
    return (t == d) ? from + change : change * (-Math.pow(2, -10 * t / d) + 1) + from;
};
Curve.easeInOutExpo = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
    const change = to - from;
    var t = currentFrame / totalFrame;
    var d = totalFrame / totalFrame;
    if (t == 0)
        return from;
    if (t == d)
        return from + change;
    if ((t /= d / 2) < 1)
        return change / 2 * Math.pow(2, 10 * (t - 1)) + from;
    return change / 2 * (-Math.pow(2, -10 * --t) + 2) + from;
};
Curve.easeInCirc = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
    const change = to - from;
    var t = currentFrame / totalFrame;
    var d = totalFrame / totalFrame;
    return -change * (Math.sqrt(1 - (t /= d) * t) - 1) + from;
};
Curve.easeOutCirc = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
    const change = to - from;
    var t = currentFrame / totalFrame;
    var d = totalFrame / totalFrame;
    return change * Math.sqrt(1 - (t = t / d - 1) * t) + from;
};
Curve.easeInOutCirc = ({ from = 0, to = 1, currentFrame, totalFrame }) => {
    const change = to - from;
    var t = currentFrame / totalFrame;
    var d = totalFrame / totalFrame;
    if ((t /= d / 2) < 1)
        return -change / 2 * (Math.sqrt(1 - t * t) - 1) + from;
    return change / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + from;
};
var Curves;
(function (Curves) {
    Curves[Curves["linner"] = 0] = "linner";
    Curves[Curves["easeInQuad"] = 1] = "easeInQuad";
    Curves[Curves["easeOutQuad"] = 2] = "easeOutQuad";
    Curves[Curves["easeInOutQuad"] = 3] = "easeInOutQuad";
    Curves[Curves["easeInSine"] = 4] = "easeInSine";
    Curves[Curves["easeOutSine"] = 5] = "easeOutSine";
    Curves[Curves["easeInOutSine"] = 6] = "easeInOutSine";
    Curves[Curves["easeInExpo"] = 7] = "easeInExpo";
    Curves[Curves["easeOutExpo"] = 8] = "easeOutExpo";
    Curves[Curves["easeInOutExpo"] = 9] = "easeInOutExpo";
    Curves[Curves["easeInCirc"] = 10] = "easeInCirc";
    Curves[Curves["easeOutCirc"] = 11] = "easeOutCirc";
    Curves[Curves["easeInOutCirc"] = 12] = "easeInOutCirc";
})(Curves || (Curves = {}));
class Animator {
    constructor({ duration = new Duration(), curve = Curves.linner } = {}) {
        this.status = AnimatorStatus.stoped;
        this.intervalInMillisecond = 10;
        this.frameCount = 0;
        this.totalFrame = 0;
        this.from = 0;
        this.to = 0;
        this.currentAnimationValue = 0;
        this.duration = duration;
        this.curve = curve !== null && curve !== void 0 ? curve : Curves.linner;
    }
    play({ from = 0, to = 1, duration, curve } = { from: 0, to: 1 }) {
        var _b, _c, _d, _e;
        this.from = from;
        this.to = to;
        this.status = AnimatorStatus.started;
        this.curveInUse = curve !== null && curve !== void 0 ? curve : this.curve;
        this.durationInUse = duration !== null && duration !== void 0 ? duration : this.duration;
        const durationInMilisecond = ((_b = this.durationInUse.second) !== null && _b !== void 0 ? _b : 0) * 1000 + ((_c = this.durationInUse.minute) !== null && _c !== void 0 ? _c : 0) * 60 * 1000 + ((_d = this.durationInUse.microsecond) !== null && _d !== void 0 ? _d : 0) / 1000 + ((_e = this.durationInUse.millisecond) !== null && _e !== void 0 ? _e : 0);
        this.totalFrame = durationInMilisecond / this.intervalInMillisecond;
        this.frameCount = 0;
        this.startAnimation();
    }
    pause() {
        if (this.status == AnimatorStatus.playing) {
            this.status = AnimatorStatus.paused;
            this.clearInterval();
        }
    }
    resume() {
        if (this.status == AnimatorStatus.paused) {
            this.status = AnimatorStatus.resumed;
            this.startAnimation();
        }
    }
    stop() {
        this.clearInterval();
        this.totalFrame = 0;
        this.frameCount = 0;
        this.status = AnimatorStatus.stoped;
    }
    addListener(listener) {
        this.animationListener = listener;
    }
    clearInterval() {
        clearInterval(this.interval);
        this.interval = undefined;
    }
    startAnimation() {
        var curveFunction = Curve.getCurrentCurveFunction(this.curveInUse);
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
var AnimatorStatus;
(function (AnimatorStatus) {
    AnimatorStatus[AnimatorStatus["playing"] = 0] = "playing";
    AnimatorStatus[AnimatorStatus["started"] = 1] = "started";
    AnimatorStatus[AnimatorStatus["stoped"] = 2] = "stoped";
    AnimatorStatus[AnimatorStatus["paused"] = 3] = "paused";
    AnimatorStatus[AnimatorStatus["resumed"] = 4] = "resumed";
})(AnimatorStatus || (AnimatorStatus = {}));

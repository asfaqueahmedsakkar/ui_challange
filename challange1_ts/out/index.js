"use strict";
// let scrollable: Scrollable = new Scrollable(document.getElementById('page')!, ScrollDirection.vertical);
var _a;
// scrollable.addScrollEventListener((event) => {
//     if (event == ScrollEvent.stop) {
//         console.log("Stoped");
//     }
//     if (event == ScrollEvent.scrolling) {
//         console.log("Scrolling");
//     }
//     if (event == ScrollEvent.start) {
//         console.log("Started");
//     }
// });
// var animator: Animator = new Animator({ duration: new Duration({ second: 5 }), curve: Curves.linner });
// animator.addListener((animationValue) => {
//     scrollable.updateScroll(animationValue);
// })
// document.getElementById('page')?.addEventListener("click", () => {
//     if (animator.status == AnimatorStatus.stoped) {
//         animator.play({ from: scrollable.getScroll(), to: scrollable.getScroll() + 2000 })
//     }
//     else if (animator.status == AnimatorStatus.playing || animator.status == AnimatorStatus.started) {
//         animator.pause()
//     }
//     else if (animator.status == AnimatorStatus.paused) {
//         animator.resume()
//     }
// });
let scrollable = new Slider(document.getElementById('page'), { infiniteLoop: true });
scrollable.addSlideListener((slide) => console.log(slide));
(_a = document.getElementById('page')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    scrollable.previous();
});

"use strict";
var _a;
let scrollable = new Scrollable(document.getElementById('page'), ScrollDirection.vertical);
scrollable.addScrollEventListener((event) => {
    if (event == ScrollEvent.stop) {
    }
});
var animation = new Animator({ duration: new Duration({ second: 2 }) });
animation.addListener((e) => scrollable.updateScroll(e));
(_a = document.getElementById('page')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    scrollable.scrollTo(scrollable.getScroll() + 500, new Duration({ second: 2 }), Curves.easeInQuad);
});

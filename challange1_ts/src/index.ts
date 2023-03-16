let scrollable: Scrollable = new Scrollable(document.getElementById('page')!, ScrollDirection.vertical);

scrollable.addScrollEventListener((event) => {
    if (event == ScrollEvent.stop) {
    }
});

var animation: Animator = new Animator({ duration: new Duration({ second: 2 }) });

animation.addListener((e) =>
    scrollable.updateScroll(e)
);

document.getElementById('page')?.addEventListener("click", () => {

    scrollable.scrollTo(scrollable.getScroll() + 500, new Duration({ second: 2 }), Curves.easeInQuad);

});
let scrollable: Scrollable = new Scrollable(document.getElementById('page')!, ScrollDirection.vertical);

scrollable.addScrollEventListener((event) => {
    if (event == ScrollEvent.stop) {
        console.log("Stoped");
    }
    if (event == ScrollEvent.scrolling) {
        console.log("Scrolling");
    }
    if (event == ScrollEvent.start) {
        console.log("Started");
    }
});


var animator: Animator = new Animator({ duration: new Duration({ second: 5 }), curve: Curves.linner });

animator.addListener((animationValue) => {
    scrollable.updateScroll(animationValue);
})

document.getElementById('page')?.addEventListener("click", () => {


});
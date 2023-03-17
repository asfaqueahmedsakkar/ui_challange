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

document.getElementById('page')?.addEventListener("click", () => {
    scrollable.scrollTo(scrollable.getScroll() + 1500, new Duration({ second: 2 }), Curves.easeInCirc);

});
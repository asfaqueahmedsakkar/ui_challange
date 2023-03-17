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
    if (animator.status == AnimatorStatus.stoped) {
        animator.play({ from: scrollable.getScroll(), to: scrollable.getScroll() + 2000 })
    }
    else if (animator.status == AnimatorStatus.playing || animator.status == AnimatorStatus.started) {
        animator.pause()
    }
    else if (animator.status == AnimatorStatus.paused) {
        animator.resume()
    }
});
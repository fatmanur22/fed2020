document.addEventListener("DOMContentLoaded", function () {
    setupLinks();
    setupEvents();
});

function setupLinks() {

};

function setupEvents() {
    // Add to bag widget
    let addToBag = document.querySelector("main section.container div.add-to-bag");

    // Favourite links
    let favouriteLinks = document.querySelectorAll("span.fa-heart");

    window.addEventListener("scroll", function () {
        let threshold = document.querySelector("main section.container section.recommendations").getBoundingClientRect().top - window.innerHeight;

        if (!addToBag.classList.contains("static")) {
            threshold += addToBag.clientHeight;
        }

        if (threshold <= 0) {
            addToBag.classList.add("static");
        } else {
            addToBag.classList.remove("static");
        }
    });

    // Favouriting
    for (let i = 0; i < favouriteLinks.length; i++) {
        favouriteLinks[i].addEventListener("click", function (event) {
            event.preventDefault();

            this.classList.toggle("far");
            this.classList.toggle("fas");
        });
    }

    // Recommended for you
    document.querySelector("main section.container section.recommendations").addEventListener("touchstart", handleTouchStart);
    document.querySelector("main section.container section.recommendations").addEventListener("touchmove", handleTouchMove);
}

/** Slide detector */
let slide = 0,
    x, y;

function clamp(num, min, max) {
    return (num < min) ? min : ((num > max) ? max : num)
}

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x = firstTouch.clientX;
    y = firstTouch.clientY;
};

function handleTouchMove(event) {
    if (!x || !y) {
        return;
    }

    let xMove = event.touches[0].clientX;
    let yMove = event.touches[0].clientY;

    let deltaX = x - xMove;
    let deltaY = y - yMove;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        event.preventDefault();
        if (deltaX > 0) {
            /* Left Swipe */
            slide++;

        } else if (deltaX < 0) {
            /* Right Swipe */
            slide--;
        }

        slide = clamp(slide, 0, 3);
        document.querySelector("main section.container section.recommendations div.products").id = ("slide-" + slide);
        let slideIndicators = document.querySelectorAll("main section.container section.recommendations div.slide-indicators span");

        for (let i = 0; i <= 3; i++) {
            if (i == slide) {
                slideIndicators[i].classList.add("active");
            } else {
                slideIndicators[i].classList.remove("active");
            }
        }
    }

    x = y = false;
};
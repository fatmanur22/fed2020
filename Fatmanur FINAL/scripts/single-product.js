document.addEventListener("DOMContentLoaded", function () {
    setupLinks();
    setupEvents();
});

function setupLinks() {

};

function setupEvents() {
    // Add to bag widget
    let addToBag = document.querySelector("main div.container div.add-to-bag");

    window.addEventListener("scroll", function () {
        let threshold = document.querySelector("footer").getBoundingClientRect().top - window.innerHeight;

        if (!addToBag.classList.contains("static")) {
            threshold += addToBag.clientHeight;
        }

        if (threshold <= 0) {
            addToBag.classList.add("static");
        } else {
            addToBag.classList.remove("static");
        }
    });
}

function getCoords(elem) { // crossbrowser version
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}
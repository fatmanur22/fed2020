document.addEventListener("DOMContentLoaded", function () {
    setupGeneralLinks();
});

function setupGeneralLinks() {
    /** Variable setting */
    // Menu
    let menuBar = document.querySelector("nav.main div.left a.fa-bars");
    let menuOverlay = document.querySelector("nav.main div.menu-overlay");

    // Login
    let loginLink = document.querySelector("nav.main div.right a.fa-user");
    let loginOverlay = document.querySelector("nav.main section.login-overlay");
    let loginClose = document.querySelector("nav.main section.login-overlay div>div span.fa-times");

    /** Event listeners */
    // Menu
    menuBar.addEventListener("click", function (event) {
        event.preventDefault();

        document.body.classList.add("menu-open");
        menuOverlay.classList.add("active");
    });

    menuOverlay.addEventListener("click", function (event) {
        event.preventDefault();

        document.body.classList.remove("menu-open");
        this.classList.remove("active");
    });

    // Login
    loginLink.addEventListener("click", function (event) {
        event.preventDefault();

        document.body.classList.add("menu-open");
        loginOverlay.classList.add("active");
    });

    loginClose.addEventListener("click", function (event) {
        event.preventDefault();

        document.body.classList.remove("menu-open");
        loginOverlay.classList.remove("active");
    });
}
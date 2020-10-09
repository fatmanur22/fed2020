document.addEventListener("DOMContentLoaded", function () {
    setupLinks();
});

function setupLinks() {
    // Product selection
    let productLink = document.querySelector("main div.products-container header div.filter div:first-of-type");
    let productOverlay = document.querySelector("main div.products-container header div.filter div:first-of-type div");

    // Filter selection
    let filterLink = document.querySelector("main div.products-container header div.filter div:nth-of-type(2)>div.link");
    let filterOverlay = document.querySelector("main div.products-container header div.filter div:nth-of-type(2) section.filter-overlay");
    let filterClose = document.querySelector("main div.products-container header div.filter div:nth-of-type(2) section.filter-overlay div>div span.fa-times");

    // View setting
    let viewLinks = document.querySelectorAll("main div.products-container div.view div a");
    let productsList = document.querySelector("main div.products-container ul");

    // Favouriting
    let favouriteLinks = document.querySelectorAll("main div.products-container li.item div span.fa-heart");

    // Load more products
    let moreProductsLink = document.querySelector("main div.products-container a.meer-artikelen");
    let productsMain = document.querySelector("main div.products-container div.products");
    let productsShown = document.querySelector("main div.products-container div.products>p span");

    // Product selection
    productLink.addEventListener("click", function (event) {
        event.preventDefault();

        productOverlay.classList.toggle("active");
    });

    // Filter selection
    filterLink.addEventListener("click", function (event) {
        event.preventDefault();

        document.body.classList.add("menu-open");
        filterOverlay.classList.add("active");
    });

    filterClose.addEventListener("click", function (event) {
        event.preventDefault();

        document.body.classList.remove("menu-open");
        filterOverlay.classList.remove("active");
    });

    // View setting
    for (let i = 0; i < viewLinks.length; i++) {
        viewLinks[i].addEventListener("click", function (event) {
            event.preventDefault();

            this.parentNode.querySelector("a.active").classList.remove("active");
            this.classList.add("active");

            if (i > 1) return;

            if (this.dataset.viewModel == "true") {
                productsList.classList.add("view-model");
            } else {
                productsList.classList.remove("view-model");
            }
        });
    }

    // Favouriting
    for (let i = 0; i < favouriteLinks.length; i++) {
        favouriteLinks[i].addEventListener("click", function (event) {
            event.preventDefault();

            this.classList.toggle("far");
            this.classList.toggle("fas");
        });
    }

    // Load more products
    moreProductsLink.addEventListener("click", function (event) {
        event.preventDefault();

        this.classList.add("fa-spinner");

        setTimeout(function (link) {
            link.classList.remove("fa-spinner");
            link.classList.remove("fas");
            productsMain.classList.add("loaded");
            productsShown.innerHTML = "8";
        }, 2000, this);
    });
};
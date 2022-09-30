document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav-ul").classList.toggle("show");
    //body opacity when menu is open check later

    if (document.getElementById("menu-icon").getAttribute("src") === "images/icon-hamburger.svg") {
        document.getElementById("menu-icon").setAttribute("src", "images/icon-close.svg");
        document.querySelector("#hamburger").ariaLabel = "Close menu";
        document.querySelector("#hamburger").ariaExpanded = "true";
    } else {
        document.getElementById("menu-icon").setAttribute("src", "images/icon-hamburger.svg");
        document.querySelector("#hamburger").ariaLabel = "Open menu";
        document.querySelector("#hamburger").ariaExpanded = "false";
    }
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "flex";
}
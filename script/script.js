document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav-ul").classList.toggle("show");
    //body opacity when menu is open check later

    if (document.getElementById("menu-icon").getAttribute("src") === "images/icon-hamburger.svg") {
        document.getElementById("menu-icon").setAttribute("src", "images/icon-close.svg");
    } else {
        document.getElementById("menu-icon").setAttribute("src", "images/icon-hamburger.svg");
    }
});
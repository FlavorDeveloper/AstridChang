const navToggle = document.querySelector(".navbar__toggle");
const navMenu = document.querySelector(".navbar__lists");
const navLink = document.querySelectorAll(".navbar__link");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("navbar__lists--visible");
});

navLink.forEach((navLink) => {
    navLink.addEventListener("click", () => {
    navMenu.classList.toggle("navbar__lists--visible");
});

    if (navMenu.classList.contains("navbar__lists--visible")) {
        navToggle.setAttribute("aria-label", "close menu");
    } else {
        navToggle.setAttribute("aria-label", "open menu");
    }
});


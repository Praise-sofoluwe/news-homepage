const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const primaryNav = document.querySelector(".primary-navigation");
const nav = document.querySelector(".nav-shadow");

openMenu.addEventListener("click", () => {
    primaryNav.classList.add("show");
    nav.classList.add("shadow");
})

closeMenu.addEventListener('click', () => {
    primaryNav.classList.remove("show");
    nav.classList.remove("shadow");
})

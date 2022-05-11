window.addEventListener('DOMContentLoaded', (event) => {
    const menuIconHamburger = document.querySelector(".menu-toggle")
    const navigationMobile = document.querySelector(".menu-hidden")


    menuIconHamburger.addEventListener("click", (event) => {
        navigationMobile.classList.toggle("menu-active");
    })
});
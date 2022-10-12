window.addEventListener('DOMContentLoaded', (event) => {
    const menuIconHamburger = document.querySelector(".menu-toggle");
    const navigationMobile = document.querySelector(".menu-hidden");


    menuIconHamburger.addEventListener("click", (event) => {
        navigationMobile.classList.toggle("menu-active");
    })
    
    const navigation = document.querySelector(".navigation--desktop");

    window.onscroll = function() {
        const top = window.scrollY;
        if (top>=1) {
            navigation.classList.add("header--backround");
        } else {
            navigation.classList.remove("header--backround");
        }
    }
    
});
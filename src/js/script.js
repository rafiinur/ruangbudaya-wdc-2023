const toggleMenu = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggleMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("scale-y-0");
    mobileMenu.classList.toggle("opacity-0");
});
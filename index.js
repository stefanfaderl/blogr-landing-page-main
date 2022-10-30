'use strict';
const hamburgerIcon = document.querySelector('.hamburger-icon');
const navLeft = document.querySelector(".nav__left");

hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("active");
    navLeft.classList.toggle("active");
});
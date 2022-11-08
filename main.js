const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');

const menuIconHam = $('.menu');
const mobileMenu = $('.mobile-menu');

// const menuEmail = document.querySelector('.navbar-email');
// const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener("click", toggleDesktopMenu);
menuIconHam.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
};


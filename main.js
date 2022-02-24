let hamburgerButton = document.querySelector(".header-right > a");
let closeMenu = document.querySelector(".close");
let hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerButton.addEventListener('click', function() {
    hamburgerMenu.classList.add('active');
})

closeMenu.addEventListener('click', function() {
    hamburgerMenu.classList.remove('active');
})


console.log('Js Ok');

const iconMenuHeaderRight = document.querySelector('.fa-bars');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeIconMenuHamburger = document.querySelector('.fa-times');



iconMenuHeaderRight.addEventListener('click', function () {
    hamburgerMenu.style.display = 'block';
})

closeIconMenuHamburger.addEventListener('click', function () {
    hamburgerMenu.style.display = 'none';
})
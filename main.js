console.log('Js Ok');

// Costante icon fa-bars 
const iconMenuHeaderRight = document.querySelector('.fa-bars');
// Costante Lista hamburgerMenu
const hamburgerMenu = document.querySelector('.hamburger-menu');
// Costante icon fa-times 
const closeIconMenuHamburger = document.querySelector('.fa-times');

// SECOND SOLUTION 
iconMenuHeaderRight.addEventListener('click', function () {
    hamburgerMenu.classList.add('active');
})

closeIconMenuHamburger.addEventListener('click', function () {
    hamburgerMenu.classList.remove('active');
})


/* FIRST SOLUTION
// Dico che quando clicco sull'icona, Hamburger-menu deve essere visibile 

iconMenuHeaderRight.addEventListener('click', function () {
    hamburgerMenu.style.display = 'block';
})

// Dico che quando clicco sull'icona, Hamburger-menu deve essere non visibile

closeIconMenuHamburger.addEventListener('click', function () {
    hamburgerMenu.style.display = 'none';
})
*/


/*
// THIRD SOLUTION (utilizzo solo le classi senza usare le variabili)

document.querySelector('.fa-bars').addEventListener('click', function () {
    document.querySelector('.hamburger-menu').classList.add('active');
})

document.querySelector('.fa-times').addEventListener('click', function () {
    document.querySelector('.hamburger-menu').classList.remove('active');
})
*/

/*
// FOURTH SOLUTION (utilizzare una variabile in meno)
const iconMenuHeaderRight = document.querySelector('.fa-bars');
const closeIconMenuHamburger = document.querySelector('.fa-times');

iconMenuHeaderRight.addEventListener('click', function () {
    document.querySelector('.hamburger-menu').classList.add('active');
})

closeIconMenuHamburger.addEventListener('click', function () {
    document.querySelector('.hamburger-menu').classList.remove('active');
})
*/
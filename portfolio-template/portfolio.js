// select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

//set intial state of menu
let showMenu = false;

const navItem1 = document.querySelector('.nav-item-1');
const navItem2 = document.querySelector('.nav-item-2');
const navItem3 = document.querySelector('.nav-item-3');
const navItem4 = document.querySelector('.nav-item-4');

menuBtn.addEventListener('click', toggleMenu);
navItem1.addEventListener('click', toggleMenu);
navItem2.addEventListener('click', toggleMenu);
navItem3.addEventListener('click', toggleMenu);
navItem4.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //toggle menu
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //toggle menu
        showMenu = false;
    }
}

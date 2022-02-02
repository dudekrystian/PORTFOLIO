const menu = document.querySelector('.navigation');
const menuItems = document.querySelectorAll('.navigation__item');
const hamburger = document.querySelector('.header__hamburger');
const hamburgerOpen = document.querySelector('.hamburger__open');
const hamburgerClose = document.querySelector('.hamburger__close');

const li1 = document.getElementById('li1');

const toggleMenu = (e) => {

    if (menu.classList.contains('navigation__visible')) {
        menu.classList.remove("navigation__visible");
        hamburgerClose.style.display = "none";
        hamburgerOpen.style.display = "block";

    }
    else {
        menu.classList.add("navigation__visible");
        hamburgerClose.style.display = "block";
        hamburgerOpen.style.display = "none";


    }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(
    item => {
        item.addEventListener('click', toggleMenu);

    }
)

// section and top of y
const sectionProjects = document.querySelector('.projects').offsetTop;

const buttonBanner = document.querySelector('.banner__button');

buttonBanner.addEventListener('click', () => {
    window.scrollTo(0, sectionProjects);
})





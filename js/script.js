window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header .nav .main .menu'),
    menuItem = document.querySelectorAll('.header .nav .main .menu .item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav__menu_active');
        })
    })
})
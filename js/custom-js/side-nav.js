const body = document.querySelector('body');
const sidenavOpenButton = document.querySelector('#top__nav__toggle');
const sidenav = document.querySelector('#sideNav');
const sideNavCloseButton = document.querySelector('#body__click');

sidenavOpenButton.addEventListener('click', () => {
    body.classList.add('body__active');
    sidenav.classList.add('sidenav__active');
    sideNavCloseButton.classList.add('body__click__active');
});

sideNavCloseButton.addEventListener('click', () => {
    sidenav.classList.remove('sidenav__active');
    sideNavCloseButton.classList.remove('body__click__active');
    body.classList.remove('body__active');
});


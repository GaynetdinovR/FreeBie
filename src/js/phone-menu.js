const phoneMenu = document.querySelector('#phone-menu_menu');
const phoneMenuBtn = document.querySelector('#phone-menu_btn');
const mask = document.querySelector('#mask')

phoneMenuBtn.addEventListener('click', () => {

    phoneMenu.classList.remove('header__nav');
    phoneMenu.classList.add('header__menu');
    mask.classList.remove('none');

    phoneMenuBtn.classList.add('header__menu-button--change');

})

mask.addEventListener('click', () => {

    phoneMenu.classList.add('header__nav');
    phoneMenu.classList.remove('header__menu');
    mask.classList.add('none');
    
    phoneMenuBtn.classList.remove('header__menu-button--change');
    
})


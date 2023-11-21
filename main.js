const openBtn = document.querySelector('.badge-icon-menu');
const closeBtn = document.querySelector('.closebtn');
const menu = document.querySelector('.overlay');
const popupWarn = document.querySelector('.popup-warn');
const closePopupwarn = document.querySelector('.close-popup-warn');
const closeWindow = document.querySelector('.window-close');
const delayPopup = 300;

openBtn.addEventListener('click', () => {
    menu.style.width = "100%";
})

closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    menu.style.width = "0%";
})

menu.addEventListener('click', (e) => {
    if (e.target.matches('a')) {
        menu.style.width = "0%";
    }
})

setTimeout(() => {
    popupWarn.style.display = 'block';
}, delayPopup);

closePopupwarn.addEventListener('click', () => {
    popupWarn.style.display = "none";
})


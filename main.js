const openBtn = document.querySelector('.badge-icon-menu');
const closeBtn = document.querySelector('.closebtn');
const menu = document.querySelector('.overlay');
const popupWarn = document.querySelector('.popup-warn');
const closePopupwarn = document.querySelector('.close-popup-warn');
const closeWindow = document.querySelector('.window-close');
const delayPopup = 300;

// mobile menu
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

// modal popup
setTimeout(() => {
    popupWarn.style.display = 'block';
}, delayPopup);

closePopupwarn.addEventListener('click', () => {
    popupWarn.style.display = "none";
})

// counter cards
window.addEventListener('click', (event) => {
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterInner = event.target.closest('.counter-inner');
        counter = counterInner.querySelector('[data-counter]');
    }

    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    if (event.target.dataset.action === 'minus') {
        if ((counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
    }
})

// Add shop cards
const cardInner = document.querySelector('.product-buy-inner');

window.addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-card')) {

        const card = event.target.closest('.cards-item');
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.cards-title').innerText,
            price: card.querySelector('.price-currency').innerText,
            counter: card.querySelector('[data-counter]').innerText
        };

        const cardItemHTML = ` <div class="product-buy-card">
        <div class="card-wrap-item">
            <span class="product-card-id">${productInfo.id}</span>
            <div class="product-buy-img">
                <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
            </div>
        </div>
        <div class="card-wrap-item-2">
            <div class="product-by-title">${productInfo.title}</div>
            <div class="product-price">${productInfo.counter} X ${productInfo.price}</div>
        </div>
    </div>`;
        cardInner.insertAdjacentHTML('beforeend', cardItemHTML);
    }
})

// Close product buy
const productBuy = document.querySelector('.product-buy');
const closeProductBtn = document.querySelector('.close-product-btn');
const productBtn = document.querySelector('.badge-icon-product');

productBtn.addEventListener('click', () => {
    productBuy.style.display = "block";
})
closeProductBtn.addEventListener('click', () => {
    event.preventDefault();
    productBuy.style.display = "none";
})
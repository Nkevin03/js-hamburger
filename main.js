const menu = document.querySelector ('.fas.fa-bars');
const hamburger = document.querySelector ('.hamburger-menu');
const close = document.querySelector ('.fas.fa-times');

$(menu).click(function() {
    hamburger.className = (hamburger.classList + (' active'));
})

$(close).click(function() {
    hamburger.classList.remove('active');
})
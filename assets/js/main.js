
// NAVBAR TOGGLE

const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})
close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})

// SCROLL TO TOP

const toTop = document.querySelector(".to-top-btn");
const Top = document.getElementById("to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active")
    }
})

Top.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
})





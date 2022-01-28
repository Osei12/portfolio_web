
//RESPONSIVE NAVIGATION MENU
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

// var nav = document.querySelector('header');
// window.addEventListener('scroll', function () {
//     if (window.pageYOffset > 100) {
//         nav.classList.add('sticky', 'shadow');
//     } else {
//         nav.classList.remove('sticky', 'shadow');
//     }
// });
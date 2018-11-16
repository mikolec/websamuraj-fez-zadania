// const burger = document.querySelector('.burger'),
//     burgerIcon = burger.querySelector('.fa-bars'),
//     closeIcon = burger.querySelector('.fa-times'),
//     menu = document.querySelector('aside');

// burger.addEventListener('click', function () {
//     burgerIcon.classList.toggle('show');
//     closeIcon.classList.toggle('show');
//     menu.classList.toggle('show');
// });

$('.burger').on('click', function () {
    $('.fa-bars').toggleClass('show');
    $('.fa-times').toggleClass('show');
    $('aside').toggleClass('show');

})
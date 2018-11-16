// $('.burger').on('click', function () {
//     $('.fas, aside, .wrapper').toggleClass('show'); //JQ wykona pętle dla każdego pobranego elementu
// });

// const burger = document.querySelector('.burger'),
//     burgerIcon = burger.querySelector('.fa-bars'),
//     closeIcon = burger.querySelector('.fa-times'),
//     menu = document.querySelector('aside'),
//     wrapper = document.querySelector('.wrapper');

// burger.addEventListener('click', function () {
//     burgerIcon.classList.toggle('show');
//     closeIcon.classList.toggle('show');
//     menu.classList.toggle('show');
//     wrapper.classList.toggle('show');
// });

const burger = document.querySelector('.burger'),
    activeElements = document.querySelectorAll('.active');

burger.addEventListener('click', function () {
    // for (let i = 0; i < activeElements.length; i++) {
    //     activeElements[i].classList.toggle('show');
    // }
    for (let activeElement of activeElements) {
        activeElement.classList.toggle('show');
    }
})
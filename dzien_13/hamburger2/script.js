const burgerBtn = document.querySelector('.burger'),
    menu = document.querySelector('aside');

burgerBtn.addEventListener('click', function () {
    menu.classList.toggle('show');
});
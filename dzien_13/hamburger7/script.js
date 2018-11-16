const arrow = document.querySelector('.arrow'),
    nav = document.querySelector('nav');


arrow.addEventListener('click', function () {
    nav.classList.toggle('on');
    this.classList.toggle('on');
});
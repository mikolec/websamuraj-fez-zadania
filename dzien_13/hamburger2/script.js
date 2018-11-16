const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', function () {
    this.classList.toggle('active');
});
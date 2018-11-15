const divs = document.querySelectorAll('div');

divs.forEach(function (div) {
    div.addEventListener('click', function () {
        document.body.className = this.className;
    });
});
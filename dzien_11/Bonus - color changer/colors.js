const divs = document.querySelectorAll('div');

function addListener(div) {
    div.addEventListener('click', function () {
        document.body.className = "";
        document.body.classList.add(this.className);
    });
}

divs.forEach(addListener);
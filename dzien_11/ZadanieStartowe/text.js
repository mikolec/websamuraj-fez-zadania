const smallerBtn = document.querySelector('.smaller'),
    biggerBtn = document.querySelector('.bigger'),
    p = document.querySelector('p');

let computedFontSize = window.getComputedStyle(p).fontSize;
let textSize = parseInt(computedFontSize);

function setBiggerFontSize() {
    p.style.fontSize = (++textSize) + 'px';
}

function setSmallerFontSize() {
    p.style.fontSize = (--textSize) + 'px';
}

smallerBtn.addEventListener('click', setSmallerFontSize);
biggerBtn.addEventListener('click', setBiggerFontSize);
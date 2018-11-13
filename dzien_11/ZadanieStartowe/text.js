const smallerBtn = document.querySelector('.smaller'),
    biggerBtn = document.querySelector('.bigger'),
    pText = document.querySelector('p');

// let fontSize = pText.style.fontSize; // jak jest określone z domyślnych fontów to pusta wartość
let computedFontSize = window.getComputedStyle(pText).fontSize;
let fontSizeNum = parseInt(computedFontSize);

function newFontSizeStr(n) {
    return (fontSizeNum += n) + 'px';
}

function setBiggerFontSize() {
    pText.style.fontSize = newFontSizeStr(+1);
}

function setSmallerFontSize() {
    pText.style.fontSize = newFontSizeStr(-1);
}

smallerBtn.addEventListener('click', setSmallerFontSize);
biggerBtn.addEventListener('click', setBiggerFontSize);
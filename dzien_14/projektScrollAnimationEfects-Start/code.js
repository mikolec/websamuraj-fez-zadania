const $atr2 = $('.art2'),
    $atr3 = $('.art3'),
    $atr4 = $('.art4'),
    $op1 = $('.op1'),
    $op2 = $('.op2');

const art2Height = $atr2.outerHeight(),
    art3Height = $atr3.outerHeight(),
    art4Height = $atr4.outerHeight(),
    op1Height = $op1.height(),
    op2Height = $op2.height();

let documentHeight = $(document).height();

$(window).on('scroll', function () {
    const wScrollTop = $(this).scrollTop();
    const windowHeight = $(this).height();

    /* wygląda na to, że przeglądarka zmienia w trakcie renderowania strony informacje o położeniu elementów.. dlatego trzeba aktualizować dane - do sprawdzenia onload/ $ready */
    const art2Top = $atr2.offset().top,
        art3Top = $atr3.offset().top,
        art4Top = $atr4.offset().top,
        op1Top = $op1.offset().top,
        op2Top = $op2.offset().top;


    if (art2Top - wScrollTop < windowHeight - art2Height) {
        $atr2.addClass('show');
    }
    if (art3Top - wScrollTop < windowHeight - art3Height) {
        $atr3.addClass('show');
    }
    if (art4Top - wScrollTop < windowHeight - art4Height) {
        $atr4.addClass('show');
    }
    // if (op1Top - wScrollTop < windowHeight - op1Height) {
    if (op1Top + op1Height < wScrollTop + windowHeight) {
        $op1.addClass('show');
    }
    // if (op2Top - wScrollTop < windowHeight - op2Height) {
    if (op2Top + op2Height - windowHeight < wScrollTop) {
        // documentHeight = $(document).height();
        $op2.addClass('show');
    }

    if (wScrollTop < windowHeight) {
        $('article').removeClass('show');
    }

});
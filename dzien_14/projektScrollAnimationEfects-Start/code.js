const art2Top = $('.art2').offset().top,
    art3Top = $('.art3').offset().top,
    art4Top = $('.art4').offset().top,
    op1Top = $('.op1').offset().top,
    op2Top = $('.op2').offset().top;;

// const art2Height = $('.art2').height(),
//     art3Height = $('.art3').height(),
//     art4Height = $('.art4').height();
const windowHeight = $(window).height();

$(window).on('scroll', function () {
    const wScrollTop = $(this).scrollTop();
    console.log(wScrollTop);


    if (art2Top - wScrollTop < windowHeight) {
        $('.art2').addClass('show');
    }
    if (art3Top - wScrollTop < windowHeight) {
        $('.art3').addClass('show');
    }
    if (art4Top - wScrollTop < windowHeight) {
        $('.art4').addClass('show');
    }
    if (op1Top - wScrollTop < windowHeight) {
        $('.op1').addClass('show');
    }
    if (op2Top - wScrollTop < windowHeight) {
        $('.op2').addClass('show');
    }

});
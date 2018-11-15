/*
$('.interface.orange').on('click', function () {
    $('body').css("background-color", "orange");
});
$('.interface.green').on('click', function () {
    $('body').css("background-color", "green");
});
$('.interface.increase').on('click', function () {
    // $('.text').css("font-size", "+=5");
    $('.text').animate({
        "font-size": "+=10"
    }, 500);
});
$('.interface.move').on('click', function () {
    $('.text').animate({
        "letter-spacing": "+=1",
        left: "+=10"
    }, 500);
});
*/

$('.interface').on('click', function () {
    if ($(this).hasClass('orange')) {
        // $('body').css("background-color", "orange");
        // $('body').removeClass();
        // $('body').addClass('orange');
        // $('body').css({
        //     "background-color": "orange"
        // });
        $('body').attr('class', 'orange');
    }
    if ($(this).hasClass('green')) {
        // $('body').css({
        //     "background-color": "green"
        // });
        $('body').attr('class', 'green');
    }
    if ($(this).hasClass('increase')) {
        $('.text').animate({
            "font-size": "+=10"
        }, 500);
    }
    if ($(this).hasClass('move')) {
        $('.text').animate({
            "letter-spacing": "+=2",
            left: "+=10"
        }, 500);
    }

});
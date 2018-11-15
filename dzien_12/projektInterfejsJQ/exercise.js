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
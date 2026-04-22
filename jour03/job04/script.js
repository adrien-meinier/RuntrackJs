$(document).ready(function () {

    $("#myInput").focus(function () {
        $(this).animate({
            width: "300px"
        }, 300);
    });

    $("#myInput").blur(function () {
        $(this).animate({
            width: "200px"
        }, 300);
    });

});
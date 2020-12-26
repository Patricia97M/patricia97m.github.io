

$( document ).ready(function() {
    $(".menu_curriculum").click(function() {
        $('html, body').animate({
            scrollTop: $("#curriculum").offset().top
        }, 1000);
    });    
    $(".menu_servicios").click(function() {
        $('html, body').animate({
            scrollTop: $("#servicios").offset().top
        }, 1000);
    });
    $(".menu_portafolio").click(function() {
        $('html, body').animate({
            scrollTop: $("#portafolio").offset().top
        }, 1000);
    });
    $(".menu_habilidades").click(function() {
        $('html, body').animate({
            scrollTop: $("#habilidades").offset().top
        }, 1000);
    });
    $(".menu_contactame").click(function() {
        $('html, body').animate({
            scrollTop: $("#contactame").offset().top
        }, 1000);      
    });

});
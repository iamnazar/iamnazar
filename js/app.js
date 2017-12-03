'use strict'

$(document).ready(function () {
    new WOW().init();

    $('.owl-carousel').owlCarousel({
        stagePadding: 50,
        loop:true,
        margin:20,
        animateIn:true,
        animateOut:true,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});
'use strict'

$(document).ready(function () {
    featuredThumb();
    
    new WOW().init();

    $('.owl-carousel').owlCarousel({
        stagePadding: 0,
        loop:true,
        margin:20,
        animateIn:true,
        animateOut:true,
        lazyLoad: true,
        nav:true,
        navText: ["<span class='glyphicon glyphicon-chevron-left'></span>","<span class='glyphicon glyphicon-chevron-right'></span>"],
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});

function featuredThumb() {
    $(document).on('click', '.featured-desc .thumbnails a', function(e) {
        e.preventDefault();
        var datahref = $(this).attr("data-href");
        if(datahref != ""){
            $(this).closest('.featured-desc').next('.featured-image').find('.image-wrapper').attr('src', datahref);
        }
    });
}
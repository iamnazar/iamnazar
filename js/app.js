'use strict'

$(document).ready(function () {
    featuredThumb();
    
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

function featuredThumb() {
    $(document).on('click', '.featured-desc .thumbnails a', function(e) {
        e.preventDefault();
        var datahref = $(this).attr("data-href");
        if(datahref != ""){
            $(this).closest('.featured-desc').next('.featured-image').find('.image-wrapper').attr('src', datahref);
        }
    });
}
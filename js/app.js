'use strict'
$(window).on('load', function() {
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");;
});

$(document).ready(function () {
    featuredThumb();
    //new WOW().init();
    bookAppointmentTabToggle();
    stickyHeader();
    selectDropDownIcon();
    carouselInit();
    serviceCarouselInit();
    testimonialsCarouselInit();
    dropDownToggle();
    bodyClickHandler();
});
function bodyClickHandler() {
    $('body').click(function(e){
        if(!$(e.target).closest('.dropdown-menu').length && !$(e.target).closest('.nav').length){
            $('.dropdown-menu').slideUp('fast');
        }
    });
}
function dropDownToggle () {
    $('.dropdown-toggle').click ( function(e){
        //e.preventDefault();
        $(e.target).next('.dropdown-menu').slideToggle();
        serviceCarouselInit();
    });
}
function testimonialsCarouselInit() {
    $('.testimonials-carousel').owlCarousel({
        loop:false,
        animateIn:true,
        animateOut:true,
        lazyLoad: true,
        nav:true,
        items: 1,
        navText: ["<span class='glyphicon glyphicon-chevron-left'></span>","<span class='glyphicon glyphicon-chevron-right'></span>"],
        dots: false
    });
}

function serviceCarouselInit () {
    $('.service-carousel').owlCarousel({
        loop:false,
        margin:20,
        animateIn:true,
        animateOut:true,
        lazyLoad: true,
        nav:true,
        navText: ["<span class='glyphicon glyphicon-chevron-left'></span>","<span class='glyphicon glyphicon-chevron-right'></span>"],
        dots: false
    });
}

function featuredThumb() {
    $(document).on('click', '.featured-desc .thumbnails a', function(e) {
        e.preventDefault();
        var datahref = $(this).attr("data-href");
        if(datahref != ""){
            $(this).closest('.featured-desc').next('.featured-image').find('.image-wrapper').attr('src', datahref);
        }
    });
}

function bookAppointmentTabToggle () {
    $('.book-appointment-tab').click (function (e) {
        $(e.target).closest('.book-appointment-tab-wrap').next('.form-elements').slideToggle('slow');
    });
}

function selectDropDownIcon () {
    $('.select-dropdown-icon').click(function (e) {
        $(e.target).next('select').simulate('mousedown');
    });
}

function stickyHeader () {
    $(window).scroll(function () {
      if ( $(this).scrollTop() > 350 && !$('header').hasClass('sticky') ) {
        $('header').addClass('sticky');
        $('header').slideDown();
       } else if ( $(this).scrollTop() <= 200 ) {
        $('header').removeClass('sticky');
      }
    });
}

function carouselInit() {
    $('.owl-carousel').owlCarousel({
        stagePadding: 0,
        loop:false,
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
}
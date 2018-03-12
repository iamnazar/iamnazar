$(document).ready(function (e) {
    videoCarouselInit();
    $( ".accordion" ).accordion();
});

function videoCarouselInit() {
    $('.wrapper-test-carousel').owlCarousel({
        loop:false,
        nav:true,
        items : 3
    })
}
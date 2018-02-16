$(document).ready(function (e) {
    videoCarouselInit();
});

function videoCarouselInit() {
    $('.wrapper-test-carousel').owlCarousel({
        loop:false,
        nav:true,
        items : 3
    })
}
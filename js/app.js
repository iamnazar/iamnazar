$(document).ready(function (e) {
    videoCarouselInit();

    if ($('.accordion').length) {
    	$( ".accordion" ).accordion();
    }

    $(function () {
		"use strict";
		$("#searchDropdownBox").change(function(){
		    var Search_Str = $(this).val();
		    //replace search str in span value
		    $("#nav-search-in-content").text(Search_Str);
		  });
	});
});

function videoCarouselInit() {
    $('.wrapper-test-carousel').owlCarousel({
        loop:false,
        nav:true,
        items : 3
    })
}
/*=============================================================
						jQuery UI
=============================================================*/

$( function() {
	$( "#accordion" ).accordion({
		collapsible: true
	});
} );

$( ".selector" ).accordion({
  event: "mouseover"
});








/*=============================================================
						SERVICES
=============================================================*/
$(function () {

	new WOW().init();
});

/*=============================================================
						WORK
=============================================================*/
$(function () {

	$("#work").magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		}
	});

});
/*=============================================================
						Navigation
=============================================================*/
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() < 50) {
			//hide nav bar
			$("nav").removeClass("helmet-top-nav");
			$("#back-to-top").fadeOut();
		} else {
			//show nav bar
			$("nav").addClass("helmet-top-nav");
			$("#back-to-top").fadeIn();
		}
	});

});

// smooth scrolling
$(function () {

	$("a.smooth-scroll").click(function (event) {
		event.preventDefault();

		var section = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(section).offset().top - 64
		}, 1250, "easeInOutExpo");
	});
});
//close mobile menue on click
$(function () {
	$(".navbar-collapse ul li a").on("click touch", function () {
		$(".navbar-toggle").click();
	});
});

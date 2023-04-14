(function ($) {
	"use strict";

	// Navbar on scrolling
	$(window).scrollTop(function () {
		$('.navbar').fadeIn('slow').css('display', 'flex');
	});


	// Smooth scrolling on the navbar links
	$(".navbar-nav a").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			
			$('html, body').animate({
				scrollTop: $(this.hash).offset().top - 45
			}, 1500, 'easeInOutExpo');
			
			if ($(this).parents('.navbar-nav').length) {
				$('.navbar-nav .active').removeClass('active');
				$(this).closest('a').addClass('active');
			}
		}
	});

	// Scroll to Bottom
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scroll-to-bottom').fadeOut('slow');
		} else {
			$('.scroll-to-bottom').fadeIn('slow');
		}
	});

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
		return false;
	});

})(jQuery);

// Lazy way to do this
function login(){
	var code = document.getElementById("code").value;

	if (code == "12345"){
		window.location = "main.html";
	} else {
		alert("The pass is 12345");
	}
}

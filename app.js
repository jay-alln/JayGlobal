$(document).ready(function () {
	$(window).scroll(function () {
		// sticky navbar on scroll script
		if (this.scrollY > 400) {
			$(".searchBlock").addClass("sticky");
		} else {
			$(".searchBlock").removeClass("sticky");
		}
	});

	// toggle menu/navbar script
	$(".clickBtn").click(function () {
		$(".menu-container").toggleClass("active");
		// $(".menu-btn i").toggleClass("active");
		// alert(1)
	});

	// owl carousal

	const nextIcon = '<img src="./assets/images/right-arrow.svg" alt="right">';
	const prevIcon = '<img src="./assets/images/left-arrow.svg" alt="left" >';

	$(".owl-carousel").owlCarousel({
		loop: true,
		// autoplay: true,
		margin: 10,
		nav: true,
		navText: [prevIcon, nextIcon],
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 2,
			},
		},
	});
});	

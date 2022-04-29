const catalogBtn = document.getElementById("catalogBtn");

$(document).ready(function() {
	
	$('.slider__intro').slick({
		arrows: false,
		fade: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000
	});

	$('.slider__catalog').slick({
		slidesToShow: 4,
		arrows: false,
		touch: false,
		touchMove: false,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				variableWidth: true,
				dots: true
			}
		}

		]
	});

	$('.slider__product').slick({
		slidesToShow: 3,
		arrows: true,
		touch: false,
		touchMove: false,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				variableWidth: true,
				arrows: false
			}
		}

		]
	});

	$('.slider__social').slick({
		slidesToShow: 3,
		infinity: false,
		prevArrow: false,
		touch: false,
		responsive: [
		{
			breakpoint: 1349,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				infinity: true,
				variableWidth: true,
				touch: false,
				touchMove: false
			}
		}

		]
	});

	$('.slider__news').slick({
		slidesToShow: 2,
		rows: 2,
		variableWidth: true,
		arrows: false,
		touch: false,
		responsive: [
		{
			breakpoint: 1349,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				rows: 1
			}
		}

		]

	});

	/* Smooth Scroll*/
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll')
		let elementOffset = $(elementId).offset().top;

		burgerRemove();

		$("html, body").animate({
			scrollTop: elementOffset - 150

		},600);
	});
});

const body = document.querySelector("body");
const header = document.querySelector(".header");
const burgerBtn = document.querySelector("#burgerBtn");
const nav = document.querySelector("#nav");
const navClose = document.querySelector("#navClose");

/* Burger*/
burgerBtn.addEventListener("click", function() {
	event.preventDefault();
	burgerBtn.classList.toggle("active");
	nav.classList.toggle("show");
	body.classList.toggle("no-scroll");
})

function burgerRemove() {
	nav.classList.remove("show");
	body.classList.remove("no-scroll");
}

navClose.addEventListener("click", function() {
	event.preventDefault();
	burgerRemove();
})

document.addEventListener("keydown", function(e) {
	if (e.keyCode == 27) {
		burgerRemove();
	}
});



/* Search */
const navSearch = document.querySelector("#navSearch");
const navSearchBtn = document.querySelector("#navSearchBtn");
const navSearchDeny = document.querySelector("#navSearchDeny");

navSearchBtn.addEventListener("click", function() {
	event.preventDefault();
	navSearch.classList.add("show");
	nav.classList.add("hidden");
	navSearchBtn.classList.add("hidden");
	header.classList.add("search");
});

function searchRemove() {
	navSearch.classList.remove("show");
	nav.classList.remove("hidden");
	navSearchBtn.classList.remove("hidden");
	header.classList.remove("search");
}

navSearchDeny.addEventListener("click", function() {
	event.preventDefault();
	searchRemove();
});

document.addEventListener("keydown", function(e) {
	if (e.keyCode == 27) {
		searchRemove();
	}
});

document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(header);

	if ( ! withinBoundaries ) {
		searchRemove()
	}
});
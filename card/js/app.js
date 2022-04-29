$(document).ready(function() {

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
});

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



/* Tabs*/
const tabsBtn = document.querySelectorAll(".cook__footer-item");

tabsBtn.forEach(function(item) {
	item.addEventListener("click", function() {
		let currentBtn = item;
		// compare(tabsBtn, currentBtn);
		currentBtn.classList.toggle("active");
	});
});



/* Counter */
let count = document.getElementById("btnCountNumber");
let plus = document.getElementById("btnCountPlus");
let minus = document.getElementById("btnCountMinus");

let priceFixed = 250;
let text = "Купить за ";
let integer = 1;
let maxCount = 99; 

plus.onclick = function() {
	if (integer <= maxCount) {
		integer += 1;
		count.innerHTML = integer;
		calculate(integer);
	}
};

minus.onclick = function() {
	if (integer >= 2) {
		integer -= 1;
		count.innerHTML = integer;
		calculate(integer);
	}
};

function calculate(a) {
	price = priceFixed * a + " ₽";
	document.getElementById("btnCalculation").innerHTML = text + price;
};



/* Show Catalog */
const catalogItem = document.querySelectorAll(".reviews__item");
const catalogInner = document.querySelector(".reviews__inner"); 
const catalogInnerHeight = document.querySelector(".reviews__inner").offsetHeight - 5;
const catalogShowBtn = document.getElementById('reviewsShowBtn');
let catalogItemHeight, catalogItemMargin, catalogItemCalc

catalogItem.forEach(function(item) {
	catalogItemHeight = item.offsetHeight;
	catalogItemMargin = parseInt(getComputedStyle(item).marginBottom, 10);
	catalogItemCalc = ((catalogItemHeight + catalogItemMargin) * 3) - 15;

	if (catalogInnerHeight > catalogItemCalc) {
		catalogInner.style.maxHeight = catalogItemCalc + 'px';
	}
});

catalogShowBtn.addEventListener("click", function() {
	catalogInner.style.maxHeight = '100%';
	catalogShowBtn.style.display = 'none';
});
// console.log(catalogInnerHeight, catalogItemHeight, catalogItemCalc);


/* Show introBtn */
const introShowBtn = document.getElementById('introShowBtn');
const introText = document.getElementById('introText');

introShowBtn.onclick = function() {
	event.preventDefault();
	introText.style.maxHeight = "none";
	introShowBtn.style.display = "none";
};
// 1) Preloader
// 2) Slide-menu
// 3) Scrolling-anchor
// 4) Slider
// 5) Counter
// 6) Parallax-effect
// 7) Back-to-top
// 8) Mail-form
// 9) Animate

// -------------------------------------------------------------

// 1) ----- Preloader
$(window).on('load', function () {
	var preloader = $('.loaderArea'),
    	loader = preloader.find('.loader');
	loader.delay(1000).fadeOut('slow');
	preloader.delay(1000).fadeOut('slow');
});

// -------------------------------------------------------------

// 2) ----- Slide-menu
$('.burger').on('click', function (){
	var burger = $('.burger'),
		closeBurger = $('.closed-burger'),
		menuMobile = $('.navbar');
	burger.fadeToggle();
	closeBurger.fadeToggle();
	menuMobile.slideDown('slow');
});

$('.closed-burger').on('click', function (){
	var burger = $('.burger'),
		closeBurger = $('.closed-burger'),
		menuMobile = $('.navbar');
	closeBurger.fadeToggle();
	burger.fadeToggle();
	menuMobile.slideUp('slow');
});

// -------------------------------------------------------------

// 3) ----- Scrolling anchor
$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
	var elementClick = $(this).attr('href'),
		destination = $(elementClick).offset().top,
		burger = $('.burger-clone'),
		closeBurger = $('.closed-burger-clone'),
		menuMobile = $('.navbar-clone');

	$('html, body').animate({scrollTop: destination - 50}, 1000);
	if(menuMobile.css({'display':'block'})){
		closeBurger.fadeToggle();
		burger.fadeToggle();
		menuMobile.slideUp();
	};
	return false;
});

// -------------------------------------------------------------

// 4) ----- Slider
function plusSlides(n) {
	showSlides(slideIndex += n);
};

function currentSlide(n) {
	showSlides(slideIndex = n);
};

function showSlides(n) {
	var i,
		slides = $(".slide"),
		dots = $(".slide-dot");
	if(n > slides.length) {
		slideIndex = 1;
	};
	if(n < 1) {
		slideIndex = slides.length;
	};
	for(i = 0; i < slides.length; i++) {
    	slides[i].style.display = "none"; 
	};
	for (i = 0; i < dots.length; i++) {
    	dots[i].className = dots[i].className.replace(" dot-active", "");
	};
	slides[slideIndex-1].style.display = "block"; 
	dots[slideIndex-1].className += " dot-active";
};

var slideIndex = 1;
showSlides(slideIndex);

// -------------------------------------------------------------

// 5) ----- Counter
var time = 2,
	clearFunc = 1;
$(window).on('scroll', function(){
	$('#counter').each(function(){
		var ePosition = $(this).offset().top,
			topWindow = $(window).scrollTop(),
			infoBlock = $('.info__block');
		if(ePosition < topWindow + 400){
			infoBlock.css({'animation-name':'counter'});
			if(clearFunc < 2){
				$('.count').addClass('hide');
				$('.count').each(function(){
					var i = 1,
						that = $(this),
						num = $(this).data('num'),
						step = 1000 * time / num;
					var int = setInterval(function(){
						if(i <= num){
							that.html(i);
						} else {
							clearFunc = clearFunc + 2;
							clearInterval(int);
						};

						i += Math.round(0.1 * 10) / 10;
						i = Math.round(i * 10) / 10;
					}, 100);
				});
			};
		};
	});
});

// -------------------------------------------------------------

// 6) ----- Parallax-effect
$(window).on('scroll', function(){
	var sp = $(this).scrollTop();
	$('.head__bottom').css({'background-position-y': sp / 3 + 'px'});
});

// -------------------------------------------------------------

// 7) ----- Back to top
var btnTop = $('.btn-top');

$(window).on('scroll', function(){
	var headTop = $('.head__top-clone');
	if($(window).scrollTop() >= $('.head').height() - 100){
		btnTop.fadeIn('slow');
		headTop.addClass('head-top-fixed').slideDown();
	} else {
		btnTop.fadeOut('slow');
		headTop.slideUp();
	};
});

btnTop.on('click', function(){
	$('html, body').animate({scrollTop:0}, 1000);
});

// -------------------------------------------------------------

// 8) ----- Mail-form
$(document).ready(function() {
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "../php/form.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку ! Скоро мы с вами свяжемся.");
			setTimeout(function(){
				$(this).trigger('reset');
			}, 1000);
		});
		return false;
	});
	$('#inputState').on('click', function(){
		$('.select-down').fadeToggle();
		$('.select-up').fadeToggle();
	});
});

// -------------------------------------------------------------

// 9) ----- Animate
$(window).on('scroll', function(){
	var whatHeader = $('.what__header'),
		whatList = $('.what__block'),
		whatFooter = $('.what__footer');
	// 9.1) What-header
	if($(window).scrollTop() >= $('.head').height() - 300){
		whatHeader.css({'animation-name':'whatHeader'});
	};
	// 9.2) What-block
	if($(window).scrollTop() >= $('.head').height() + 300){
		whatList.css({'animation-name':'whatList'});
	};
});

// -------------------------------------------------------------
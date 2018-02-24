// 1) Preloader
// 2) Slide-menu
// 3) Scrolling-anchor
// 4) Slider
// 5) Counter
// 6) Back-to-top

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
	burger.css({'display': 'none'});
	closeBurger.css({'display' : 'block'});
	menuMobile.slideDown('slow');
});

$('.closed-burger').on('click', function (){
	var burger = $('.burger'),
		closeBurger = $('.closed-burger'),
		menuMobile = $('.navbar');
	closeBurger.css({'display' : 'none'});
	burger.css({'display': 'block'});
	menuMobile.slideUp('slow');
});

// -------------------------------------------------------------

// 3) ----- Scrolling anchor
$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
	var elementClick = $(this).attr('href'),
		destination = $(elementClick).offset().top;

	$('html, body').animate({scrollTop: destination}, 1000);
	return false;
});

// -------------------------------------------------------------

// 4) ----- Slider

// -------------------------------------------------------------

// 5) ----- Counter
var time = 2,
	clearFunc = 1;
$(window).on('scroll', function(){
	$('#counter').each(function(){
		var ePosition = $(this).offset().top,
			topWindow = $(window).scrollTop();
		if(ePosition < topWindow + 400){
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

// 6) ----- Back to top
var btnTop = $('.btn-top');

$(window).on('scroll', function(){
	var headTop = $('.head__top:last-of-type');
	if($(window).scrollTop() >= $('.head').height()){
		btnTop.fadeIn('slow');
		headTop.delay(1000).addClass('head-top-fixed');
	} else {
		btnTop.fadeOut('slow');
		headTop.delay(1000).removeClass('head-top-fixed');
	};
});

btnTop.on('click', function(){
	$('html, body').animate({scrollTop:0}, 1000);
});

// -------------------------------------------------------------
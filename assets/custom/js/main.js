var preloader = function() {

	$(window).on('load', function(){
		$(document).ready(function(){
			$('.spinner').fadeOut();
			$('#preloader').delay(500).fadeOut('slow');
		});
	});

};


var stickynavbar = function() {

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll >= 200 ) {
		    $(".header").addClass("sticky-top bg-secondary blue-gradient");
		} else {
		    $(".header").removeClass("sticky-top bg-secondary blue-gradient");
		}
	});

};


var navbutton = function() {

	$('#intro').click(function() {
		$('html, body').animate({scrollTop:0}, 800);
	});
	$('#skills').click(function() {
		$('html, body').animate({scrollTop: $('#skills-area').offset().top-(-100)}, 800);
	});
	$('#services').click(function() {
		$('html, body').animate({scrollTop: $('#services-area').offset().top-50}, 800);
	});
	$('#testimonial').click(function() {
		$('html, body').animate({scrollTop: $('#testimonial-area').offset().top-50}, 800);
	});
	$('#contact').click(function() {
		$('html, body').animate({scrollTop: $('#contact-area').offset().top-50}, 800);
	});

};


var contentWayPoint = function() {

	$('.animate-box').waypoint( function( direction ) {

		if(direction === 'down') {
			$(this.element).addClass('item-animate');
			setTimeout(function(){

				$('body .animate-box.item-animate').each(function(k){
					var el = $(this);
					setTimeout( function () {
						var effect = el.data('effect');
						if (effect === undefined) {
							el.addClass('fadeInUp');
						} else {
							el.addClass(effect);
						}

						el.removeClass('item-animate');
					},  k * 200, 'easeInOutExpo' );
				});
				
			}, 100);
			
		} else {
			$(this.element).addClass('item-animate');
			setTimeout(function(){

				$('body .animate-box.item-animate').each(function(k){
					var el = $(this);
					setTimeout( function () {
						var effect = el.data('effect');
						if (effect === undefined) {
							el.removeClass('fadeInUp');
						} else {
							el.removeClass(effect);
						}

						el.removeClass('item-animate');
					},  k * 200, 'easeInOutExpo' );
				});
				
			}, 100);
		}

	} , { offset: '85%' } );
};

var mail = function() {
	$('document').ready(function() {
		$('#submit').click(function() {
			var name = $('#name').val();
			var subject = $('#subject').val();
			var body = $('#body').val();

			if (name == '') {
				alert('Name field is required.');
				return false;
			} else {
				if (subject == '') {
					alert('Subject field is required.');
					return false;
				} else {
					if (body == '') {
						alert('Messages field is required.');
						return false;
					} else {
						var str = 'mailto:contact@shantoionline.com?subject='+subject+'&body=My name is '+name+'.%0D%0A%0D%0A'+body;
						$('#submit').attr('href',str);
					}
				}
			}

		});
	});
};


var gotop = function() {

	$(window).scroll(function() {

		var scroll = $(window).scrollTop();
		if (scroll >= 500) {
			$('.go-top').fadeIn();
		} else {
			$('.go-top').fadeOut();
		}

	});

	$('.gotop').click(function() {
		$('html, body').animate({scrollTop:0}, 800);
	});
	
};


var init = function() {
	preloader();
	stickynavbar();
	navbutton();
	contentWayPoint();
	mail();
	gotop();
};

init();




(function ($) {
	
	"use strict";

	if ($(".carousel-item .active")){
		console.log('hai')
	} else if(($(".carousel-item"))) {
		console.log('kk')
	}


	$('.scroll-to-section').on('click',function(e){
		var tujuan = $this.attr('href');
		var elementTujuan = $(tujuan);
		$('body').animate({
			scrollTop : elementTujuan.offset().top-50
		},1000,'easeInOutExpo')
	})

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.hero-slides').height()-20;
	  var header = $('.navbar').height();

	  if (scroll >= box - header) {
	    $(".navbar").addClass("fixed-top");
		console.log('hai')
	  } else {
	    $(".navbar").removeClass("fixed-top");
	
	  }
	});
	
	

	$(".berita").owlCarousel({
		autoplay: true,
        dots: false,
        loop: true,
        nav : true,
		margin: 80,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
	});

	$(".guru").owlCarousel({
		autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:5
            },
            992:{
                items:6
            }
        }
	});
   
	




	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);   
$(function () {

	'use strict';

	// Option Box
	$('.option-box .icon i').on('click',function () {
		$('.option-box').toggleClass('active');
	});

				$('.owl-carousel').owlCarousel({
			    loop:true,
			    responsiveClass:true,
			    autoplay:true,
			    autoplayTimeout:5000,
			    autoplayHoverPause:true,
			    autoWidth: true,
			    dots: false,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:2
			        },
			        1000:{
			            items:3
			        }
			    }
			})

	var infoH = $('.info').css('width'); // Width Of Info Div by Css
	var infoHDy = $('info').outerWidth(true); // Width Of Info Div dynamic
	
	
	$('.info').height($(window).height()); // Adust Div Size 
	$('.sections > div').css('min-height', $(window).height() - $('nav.navbar').outerHeight(true)); // Height Of Content

	if ($(window).width() > 991.98) { // Check If Window Width Bigger Than Md Width
		$('.content').css('margin-left', infoH); // Margin-Left of Content
		$('nav.navbar').css('margin-left', infoH); // Margin-Left of Content
	}

	// Calc Nav Outer Height And Add Width To Div Sections


	$( window ).resize(function() {
  		$('.info').height($(window).height()); // Adust Div Size
  		if ($(window).width() > 991.98) { // Check If Window Width Bigger Than Md Width
	  		infoHDy = $('.info').outerWidth(true);
	  		$('.content').css('margin-left', infoHDy);
  		} else {
  			$('nav.navbar').css('margin-left', 0);
  			$('.content').css('margin-left', 0);
  		}

  		console.log(infoHDy)
	});

	// Switching Between Sections
	$('nav li').click(function () {
		$(this).addClass('active').siblings().hide().removeClass('active'); // Add Class Active To Li
		$($(this).data('sec')).siblings().slideUp(600, function () { // FadeOut All Sibling Sections
			$($('nav li.active').data('sec')).slideDown(500, function () { // FadeIn Selected Section
				$('nav li').show();
			
			}); 
		});
	});

	// Close Link
	$('.info i.fa-times').click(function () {
		$(this).hide();
		$('.info').animate({
			width: 0
		},500, function () {
  			$('.content, .navbar').animate({ // Add Magrin 0 To NavBar And Content
  				marginLeft: 0
  			},500, function() {
  				if ($(window).width() > 991.98) {
  					$('.content > i.toggle-info').show();
  				} else {
  					$('.content > i.toggle-info').hide();
  				}
  			});
		});
	});

	// Open Link
	$('.content > i.toggle-info').click(function () {
		$('.content > i.toggle-info').hide();
		$('.content').animate({
  			marginLeft: infoH
  		},500, function () {
  			$('.info').animate({
				width: infoH
			},500, function () {
				$('.info i').show();
			});
  		});
	});

});

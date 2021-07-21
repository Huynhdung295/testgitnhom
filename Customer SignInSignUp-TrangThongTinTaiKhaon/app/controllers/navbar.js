
// var  navbar = function(){
// 	var screenWidth = $( window ).width();
// 	/* One Page Layout ============ */
// 	var onePageLayout = function() {
// 		'use strict';
// 	}
	
// 	/* Header Height ============ */
// 	var handleResizeElement = function(){
// 		$('.header').css('height','');
// 		var HeaderHeight = $('.header').height();
// 		$('.header').css('height', HeaderHeight);
// 		if(screenWidth > 991 ){
// 			$('.homedemo').find('.mega-menu').css('height','calc(100vh - '+HeaderHeight+'px)');
// 		}
// 	}
// 	/* Load File ============ */
// 	var dzTheme = function(){
// 		 'use strict'
// 		if(screenWidth <= 991 ){
// 			jQuery('.navbar-nav > li > a, .sub-menu > li > a').unbind().on('click', function(event){
// 				if(jQuery(this).parent().hasClass('open'))
// 				{
// 					jQuery(this).parent().removeClass('open');
// 				}
// 				else{
// 					jQuery(this).parent().parent().find('li').removeClass('open');
// 					jQuery(this).parent().addClass('open');
// 				}
// 			});
// 		}
			
// 		jQuery('.full-sidenav .navbar-nav > li > a, .full-sidenav .sub-menu > li > a').unbind().on('click', function(event){
// 			jQuery('.full-sidenav .navbar-nav > li > a').not(this).next('.sub-menu').slideUp();
// 			jQuery(this).next('.sub-menu').toggle(500);
// 		});
// 		jQuery('.menu-icon').on('click',function(){
// 			jQuery('.menu-close,.full-sidenav').addClass('active');
// 			onePageLayout();
// 		});
// 		jQuery('.menu-close').on('click',function(){
// 			jQuery('.menu-close,.full-sidenav').removeClass('active');
// 		});
// 	}

// 	return {
// 		init:function(){
// 			onePageLayout();
// 			dzTheme();
// 			handleResizeElement();
// 			headerFix()
// 		},
// 		resize:function(){
// 			screenWidth = $(window).width();
// 			// dzTheme();
// 			setTimeout(function(){
// 				handleResizeElement();
// 			}, 500);
			
// 		}
// 	}
	
// }();
// /* Document.ready Start */	
// jQuery(document).ready(function() {
//     'use strict';
// 	 navbar.init();
	
// 	jQuery('.navicon').on('click',function(){
// 		$(this).toggleClass('open');
// 	});
	
// });
// 	/* Header Fixed ============ */
// 	var headerFix = function(){
// 		'use strict';
// 		/* Main navigation fixed on top  when scroll down function custom */		
// 		jQuery(window).on('scroll', function () {
// 			if(jQuery('.sticky-header').length > 0){
// 				var menu = jQuery('.sticky-header');
// 				if ($(window).scrollTop() > menu.offset().top) {
// 					menu.addClass('is-fixed');
// 					$('.site-header .container > .logo-header .logo').attr('src','images/logo.png');
// 					$('.site-header .container > .logo-header .logo-2').attr('src','images/logo-2.png');
// 					$('.site-header .container > .logo-header .logo-3').attr('src','images/logo-3.png');
// 				} else {
// 					menu.removeClass('is-fixed');
// 					$('.site-header .container > .logo-header .logo, .site-header .container > .logo-header .logo-2, .site-header .container > .logo-header .logo-3').attr('src','images/logo-white.png')
// 				}
// 			}
// 		});
// 		/* Main navigation fixed on top  when scroll down function custom end */
// 	}



var  navbar = function(){
	var screenWidth = $( window ).width();
	/* One Page Layout ============ */
	var onePageLayout = function() {
		'use strict';
	}
	
	/* Header Height ============ */
	var handleResizeElement = function(){
		$('.header').css('height','');
		var HeaderHeight = $('.header').height();
		$('.header').css('height', HeaderHeight);
		if(screenWidth > 991 ){
			$('.homedemo').find('.mega-menu').css('height','calc(100vh - '+HeaderHeight+'px)');
		}
	}
	/* Load File ============ */
	var dzTheme = function(){
		 'use strict'
		if(screenWidth <= 991 ){
			jQuery('.navbar-nav > li > a, .sub-menu > li > a').unbind().on('click', function(event){
				if(jQuery(this).parent().hasClass('open'))
				{
					jQuery(this).parent().removeClass('open');
				}
				else{
					jQuery(this).parent().parent().find('li').removeClass('open');
					jQuery(this).parent().addClass('open');
				}
			});
		}
			
		jQuery('.full-sidenav .navbar-nav > li > a, .full-sidenav .sub-menu > li > a').unbind().on('click', function(event){
			jQuery('.full-sidenav .navbar-nav > li > a').not(this).next('.sub-menu').slideUp();
			jQuery(this).next('.sub-menu').toggle(500);
		});
		jQuery('.menu-icon').on('click',function(){
			jQuery('.menu-close,.full-sidenav').addClass('active');
			onePageLayout();
		});
		jQuery('.menu-close').on('click',function(){
			jQuery('.menu-close,.full-sidenav').removeClass('active');
		});
	}

	return {
		init:function(){
			onePageLayout();
			dzTheme();
			handleResizeElement();
			headerFix()
		},
		resize:function(){
			screenWidth = $(window).width();
			// dzTheme();
			setTimeout(function(){
				handleResizeElement();
			}, 500);
			
		}
	}
	
}();
/* Document.ready Start */	
jQuery(document).ready(function() {
    'use strict';
	 navbar.init();
	
	jQuery('.navicon').on('click',function(){
		$(this).toggleClass('open');
	});
	
});
	/* Header Fixed ============ */
	var headerFix = function(){
		'use strict';
		/* Main navigation fixed on top  when scroll down function custom */		
		jQuery(window).on('scroll', function () {
			if(jQuery('.sticky-header').length > 0){
				var menu = jQuery('.sticky-header');
				if ($(window).scrollTop() > menu.offset().top) {
					menu.addClass('is-fixed');
				    menu.removeClass('theme-light-glass-1')
				} else {
					menu.removeClass('is-fixed');
					menu.addClass('theme-light-glass-1')
				
				}
			}
		});
		/* Main navigation fixed on top  when scroll down function custom end */
	}




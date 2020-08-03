(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    /* 
		=================================================================
		01 - Main Slider JS
		=================================================================	
		*/

    $('.briffs-slide').owlCarousel({
      animateOut: 'fadeOutLeft',
      animateIn: 'fadeIn',
      items: 2,
      nav: true,
      dots: false,
      autoplayTimeout: 7000,
      autoplaySpeed: 2000,
      autoplay: true,
      loop: true,
      navText: [
        "<i class='fa fa-long-arrow-left'><i>",
        "<i class='fa fa-long-arrow-right'><i>",
      ],
      mouseDrag: true,
      touchDrag: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 1,
        },
        750: {
          items: 1,
        },
        1000: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });

    $('.briffs-slide').on('translate.owl.carousel', function () {
      $('.briffs-main-slide h2, .briffs-main-slide p')
        .removeClass('animated fadeInUp')
        .css('opacity', '0');
      $('.briffs-main-slide .briffs-btn')
        .removeClass('animated fadeInDown')
        .css('opacity', '0');
    });
    $('.briffs-slide').on('translated.owl.carousel', function () {
      $('.briffs-main-slide h2, .briffs-main-slide p')
        .addClass('animated fadeInUp')
        .css('opacity', '1');
      $('.briffs-main-slide .briffs-btn')
        .addClass('animated fadeInDown')
        .css('opacity', '1');
    });

    /* 
		=================================================================
		02 - Choose Slider JS
		=================================================================	
		*/

    $('.choose-slide').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 0,
      touchDrag: true,
      mouseDrag: true,
      items: 1,
      nav: false,
      dots: true,
      autoplayTimeout: 6000,
      autoplaySpeed: 1200,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });

    /* 
		=================================================================
		03 - Team Slider JS
		=================================================================	
		*/

    $('.team-slider').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      touchDrag: true,
      mouseDrag: true,
      items: 1,
      nav: false,
      dots: true,
      autoplayTimeout: 6000,
      autoplaySpeed: 1200,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
        1200: {
          items: 4,
        },
      },
    });

    /* 
		=================================================================
		04 - Testimonial Slider JS
		=================================================================	
		*/

    $('.testimonial-slider').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      touchDrag: true,
      mouseDrag: true,
      items: 1,
      nav: false,
      dots: true,
      autoplayTimeout: 6000,
      autoplaySpeed: 1200,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 2,
        },
        1200: {
          items: 2,
        },
      },
    });

    /* 
		=================================================================
		05 - Youtube Popup JS
		=================================================================	
		*/

    $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    /* 
		=================================================================
		06 - Counter JS
		=================================================================	
		*/

    $('.counter').counterUp({
      delay: 10,
      time: 1000,
    });

    /* 
		=================================================================
		07 - Responsive Menu JS
		=================================================================	
		*/
    $('ul#briffs_navigation').slicknav({
      prependTo: '.briffs-responsive-menu',
    });

    /* 
		=================================================================
		08 - Search JS
		=================================================================	
		*/

    $.fn.searchBox = function (ev) {
      var $searchEl = $('.search-elem');
      var $sField = $('#search-field');

      if (ev === 'open') {
        $searchEl.addClass('search-open');
      }

      if (ev === 'close') {
        $searchEl.removeClass('search-open'), $sField.val('');
      }
    };

    $('.search-btn').on('click', function (e) {
      $(this).searchBox('open');
      e.preventDefault();
    });

    $('.search-close').on('click', function () {
      $(this).searchBox('close');
    });

    /* 
		=================================================================
		09 - Back To Top
		=================================================================	
		*/
    if ($('body').length) {
      var btnUp = $('<div/>', {
        class: 'btntoTop',
      });
      btnUp.appendTo('body');
      $(document).on('click', '.btntoTop', function () {
        $('html, body').animate(
          {
            scrollTop: 0,
          },
          700
        );
      });
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) $('.btntoTop').addClass('active');
        else $('.btntoTop').removeClass('active');
      });
    }
  });
})(jQuery);

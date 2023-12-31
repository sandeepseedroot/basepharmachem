(function ($) {
    'use strict';

    var roberto_window = $(window);

    // ****************************
    // :: 1.0 Preloader Active Code
    // ****************************

    roberto_window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#robertoNav').classyNav();
    }

    // ***************************
    // :: 3.0 Single Project Slide
    // ***************************

  

    // *********************************
    // :: 4.0 Welcome Slides Active Code
    // *********************************

  

    // *********************************
    // :: 5.0 Project Slides Active Code
    // *********************************
    

    // *************************************
    // :: 6.0 Testimonial Slides Active Code
    // *************************************
    if ($.fn.owlCarousel) {
        var testiThumbSlide = $('.testimonial-thumbnail');
        testiThumbSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            autoplay: true,
            smartSpeed: 500
        });
    }
    if ($.fn.owlCarousel) {
        var testiSlides = $('.testimonial-slides');
        testiSlides.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            autoplay: true,
            smartSpeed: 1000
        });
    }

    // *******************************
    // :: 7.0 Rooms Slides Active Code
    // *******************************
    if ($.fn.owlCarousel) {
        var roomSlides = $('.rooms-slides');
        roomSlides.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: true,
            navText: [('<i class="fa fa-long-arrow-left" aria-hidden="true"></i> Previous'), ('Next <i class="fa fa-long-arrow-right" aria-hidden="true"></i>')]
        });

        roomSlides.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        roomSlides.on('translated.owl.carousel', function () {
            var layer = roomSlides.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
    }

    // ********************************
    // :: 8.0 Search Button Active Code
    // ********************************
    $('.search-btn').on('click', function () {
        $('.search-form').toggleClass('search-form-active');
    })

    // *********************************
    // :: 9.0 Magnific Popup Active Code
    // *********************************
    if ($.fn.magnificPopup) {
        $('.video-play-btn').magnificPopup({
            type: 'iframe'
        });
    }

    // ***************************
    // :: 10.0 Tooltip Active Code
    // ***************************
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // ***********************
    // :: 11.0 WOW Active Code
    // ***********************
    if (roberto_window.width() > 767) {
        new WOW().init();
    }

    // ****************************
    // :: 12.0 Jarallax Active Code
    // ****************************
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.5
        });
    }

    // ****************************
    // :: 13.0 Scrollup Active Code
    // ****************************
    if ($.fn.scrollUp) {
        roberto_window.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="arrow_carrot-up"</i>'
        });
    }

    // ******************************
    // :: 14.0 Counter Up Active Code
    // ******************************
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 15,
            time: 1500
        });
    }

    // *********************************
    // :: 15.0 Prevent Default 'a' Click
    // *********************************
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    // *****************************
    // :: 16.0 Countdown Active Code
    // *****************************
    if ($.fn.countdown) {
        $("#clock").countdown("2021/10/10", function (event) {
            $(this).html(event.strftime("<div>%D <span>Days</span></div> <div>%H <span>Hours</span></div> <div>%M <span>Mins</span></div> <div>%S <span>Sec</span></div>"));
        });
    }

    // *******************************
    // :: 17.0 Nice Select Active Code
    // *******************************
    if ($.fn.countdown) {
        $('select').niceSelect();
    }

    // ******************************
    // :: 18.0 Datepicker Active Code
    // ******************************
    if ($.fn.datepicker) {
        $('.input-daterange').datepicker({
            format: "dd/mm/yy",
            multidate: true,
            keyboardNavigation: false,
            forceParse: false,
            daysOfWeekHighlighted: "0,1,2,3,4,5,6",
            todayHighlight: true
        });
    }

    // ********************************
    // :: 19.0 Range Slider Active Code
    // ********************************
    $('.slider-range-price').each(function () {
        var min = jQuery(this).data('min');
        var max = jQuery(this).data('max');
        var unit = jQuery(this).data('unit');
        var value_min = jQuery(this).data('value-min');
        var value_max = jQuery(this).data('value-max');
        var label_result = jQuery(this).data('label-result');
        var t = $(this);
        $(this).slider({
            range: true,
            min: min,
            max: max,
            values: [value_min, value_max],
            slide: function (event, ui) {
                var result = label_result + " " + unit + ui.values[0] + ' - ' + unit + ui.values[1];
                console.log(t);
                t.closest('.slider-range').find('.range-price').html(result);
            }
        });
    })

   
})(jQuery);
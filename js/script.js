$(document).ready(function() {
    // Home Slider
    $('.home-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        // fade: !0,
        autoplaySpeed: 3000,
        prevArrow: '<div class="arrows prev-arrows"><img src="img/icon/prev-arrows.png"></div>',
        nextArrow: '<div class="arrows next-arrows"><img src="img/icon/next-arrows.png"></div>',
        responsive: [{
            breakpoint: 576,
            fade: !0,
            settings: {
                arrows: false,
            }
        }, ]
    }).slickAnimation;

    // Insurance Partner Slider
    $('.insurance-partner-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
        ]
    });

    // Testimonials Slider
    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    // News Slider
    $('.news-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    // Event Slider
    $('.event-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    // Medical Organization Slider
    $('.medical-organization-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<div class="arrows prev-arrows"><img src="img/icon/left-arrow.png"></div>',
        nextArrow: '<div class="arrows next-arrows"><img src="img/icon/right-arrow.png"></div>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // Services Slider
    $('.services-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 2000,
        // fade: true,
        // cssEase: 'ease-in-out',
        // touchThreshold: 100,
        prevArrow: '<div class="arrows services-prev-arrows"><img src="img/icon/service-prev-arrow.png"></div>',
        nextArrow: '<div class="arrows services-next-arrows"><img src="img/icon/service-next-arrow.png"></div>',
    });

    // Animate Fade Jquery

    function scrollWaypointInit(items, trigger) {
        items.each(function() {
            var element = $(this),
                osAnimationClass = element.data("animation"),
                osAnimationDelay = element.attr('data-animation-delay');

            element.css({
                '-webkit-animation-delay': osAnimationDelay,
                '-moz-animation-delay': osAnimationDelay,
                'animation-delay': osAnimationDelay
            });

            var trigger = (trigger) ? trigger : element;

            trigger.waypoint(function() {
                element.addClass('animated').addClass(osAnimationClass);
            }, {
                // triggerOnce: true,
                offset: '80%'
            });
        });
    }

    //Call the init

    $(document).ready(function() {
        scrollWaypointInit($('.animateMe'));
    });

});
// Index of jQuery Active Code

(function ($) {
    'use strict';

    var $window = $(window);
    var zero = 0;

    // :: 0.0 PRELOADER ACTIVE CODE
    $window.on('load', function () {
        $('.loader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 0.0 NAVIGATION MENU ACTIVE CODE
    function navMenu() {

        // MAIN MENU TOGGLER ICON (MOBILE SITE ONLY)
        $('[data-toggle="navbarToggler"]').click(function () {
            $('.navbar').toggleClass('active');
            $('body').toggleClass('canvas-open');
        });
        // MAIN MENU TOGGLER ICON
        $('.navbar-toggler').click(function () {
            $('.navbar-toggler-icon').toggleClass('active');
        });

        // NAVBAR STICKY
        var $stickyNav = $(".navbar-sticky");

        $(window).on("scroll load", function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 120) {
                $stickyNav.addClass("navbar-sticky-moved-up");
            } else {
                $stickyNav.removeClass("navbar-sticky-moved-up");
            }
            // apply transition
            if (scroll >= 250) {
                $stickyNav.addClass("navbar-sticky-transitioned");
            } else {
                $stickyNav.removeClass("navbar-sticky-transitioned");
            }
            // sticky on
            if (scroll >= 500) {
                $stickyNav.addClass("navbar-sticky-on");
            } else {
                $stickyNav.removeClass("navbar-sticky-on");
            }

        });
    }
    navMenu();

    // :: 0.0 SCROLL TO TOP ACTIVE CODE
    var offset = 300;
    var duration = 500;

    $window.on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $("#scrollUp").fadeIn(duration);
        } else {
            $("#scrollUp").fadeOut(duration);
        }
    });

    $("#scrollUp").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, duration);
    });

    //Social icons sidebar
    $window.on("scroll",function(){
        if($(this).scrollTop() > 300){
            $('.social-sidebar').fadeIn(500);
        }else{
            $('.social-sidebar').fadeOut(500);
        }
    })



    //Auto popup
    // $(document).ready(function() {
    //     setTimeout(function() {
    //         $("#exampleModalnew").modal('show');
    //     }, 5000);
    // });

    //date picker
    $('#datepicker').datepicker({
        weekStart: 1,
        daysOfWeekHighlighted: "6,0",
        autoclose: true,
        todayHighlight: true,
    });

    $('#datepicker2').datepicker({
        weekStart: 1,
        daysOfWeekHighlighted: "6,0",
        autoclose: true,
        todayHighlight: true,
    });

    // :: 0.0 SCROLL LINK ACTIVE CODE
    var scrollLink = $('.scroll');

    // SCROLLSPY ACTIVE CODE
    $('body').scrollspy({
        target: '#appo-header'
    });

    // :: 0.0 SMOOTH SCROLLING ACTIVE CODE
    scrollLink.on('click', function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // Hero slider background setting
    function sliderBgSetting() {
        if ($(".hero-slider .slide").length) {
            $(".hero-slider .slide").each(function() {
                var $this = $(this);
                var img = ($this.find(".slider-bg").attr("src")) ? $this.find(".slider-bg").attr("src") : false;

                if (img) {
                    $this.css({
                        backgroundImage: "url(" + img + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "center center"
                    })
                }
            });
        }
    }

    sliderBgSetting();


    //Setting hero slider
    function heroSlider() {
        if ($(".hero-slider").length) {
            $(".hero-slider").slick({
                autoplay:true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev">Previous</button>',
                nextArrow: '<button type="button" class="slick-next">Next</button>',
                dots: true,
                fade: true,
                cssEase: 'linear',
            });
        }
    }

    //Active heor slider
    heroSlider();

    // :: 0.0 AOS ACTIVE CODE
    AOS.init();

    // :: 0.0 PREVENT DEFAULT ACTIVE CODE
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    //Services Box Hover animation
    $(".service-box .nav-link").hover(function(){
        $(this).tab("show")
    })

    // :: BANNER ACTIVE CODE
    $('.banner-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        smartSpeed: 3000,
        autoplay: true,
        autoplayTimeout: 4000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
    
    // :: 0.0 DOCTORS SLIDER ACTIVE CODE
    $('.doctors-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        smartSpeed: 3000,
        autoplay: true,
        autoplayTimeout: 5000,
        navText: [
            '<i class="ti-angle-left"></i>',
            '<i class="ti-angle-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // :: 0.0 ADDRESS SLIDER ACTIVE CODE
    $('.address-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        smartSpeed: 5000,
        autoplay: true,
        autoplayTimeout: 7000,
        navText: [
            '<i class="ti-angle-left"></i>',
            '<i class="ti-angle-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

        // :: 0.0 CENTERS-DOCTORS SLIDER ACTIVE CODE
        $('.in-doctors-slider.owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: false,
            smartSpeed: 3000,
            autoplay: false,
            autoplayTimeout: 5000,
            navText: [
                '<i class="ti-angle-left"></i>',
                '<i class="ti-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 2
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });

    // :: 0.0 CENTERS SLIDER ACTIVE CODE
    $('.centers-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        smartSpeed: 2000,
        autoplay: false,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });    

    
    // :: 0.0 TESTIMONIAL SLIDER ACTIVE CODE
    $('.testi-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        smartSpeed: 3000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

     // :: 0.0 NEWS SLIDER ACTIVE CODE
     $('.news-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        smartSpeed: 5000,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

     // :: BANNER ACTIVE CODE
     $('.patient-testi-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        smartSpeed: 3000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    // :: COUNTERUP ACTIVE CODE
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

     // :: GALLERY ACTIVE CODE
     lightbox.option({
        'albumLabel':	"picture %1 of %2",
        'fadeDuration': 300,
        'resizeDuration': 150,
        'wrapAround': true
    })

     // :: VLOG ACTIVE CODE
   

    // :: 00.0 TAB MENU
        $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
            e.preventDefault();
            $(this).siblings('a.active').removeClass("active");
            $(this).addClass("active");
            var index = $(this).index();
            $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
            $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
        });
    

    // :: 14.0 FANCYBOX IMAGE GALLERY
    $('[data-fancybox="images"]').fancybox({
        afterLoad: function (instance, current) {
            var pixelRatio = window.devicePixelRatio || 1;

            if (pixelRatio > 1.5) {
                current.width = current.width / pixelRatio;
                current.height = current.height / pixelRatio;
            }
        }
    });

    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        },
        vimeo: {
            color: 'f00'
        }
    });

    /*-------------------------
            magnific popup activation
        -------------------------*/
        $('.video-play-btn,.video-popup,.small-vide-play-btn').magnificPopup({
            type: 'video',
            removalDelay: 260,
            mainClass: 'mfp-zoom-in',
        });
    
    // :: 11.0 NAV TAB HOVER CHANGE IMAGES CODE
    $(".nav-tab-link").hover(function(){
        $(this).tab("show")
    })

    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
    $(window).on('load', function() {

        sliderBgSetting();

    });


    // :: 12.0 CONTACT FORM ACTIVE CODE
    // Get the form.
    var form = $('#contact-form');
    // Get the messages div.
    var formMessages = $('.form-message');
    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
        // Stop the browser from submitting the form.
        e.preventDefault();
        // Serialize the form data.
        var formData = $(form).serialize();
        // Submit the form using AJAX.
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });

}(jQuery));
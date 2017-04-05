
/*
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  WP-Card | Personal vCard & CV Resume Template
––––––––––––––––––––––––––––––––––––––––––––––––––

    - File           : main.js
    - Desc           : Template - JavaScript
    - Version        : 1.1
    - Date           : 2017-03-01
    - Author         : CODASTROID
    - Author URI     : https://themeforest.net/user/codastroid

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/


(function($) {

    "use strict";

    var windowSelector = $(window),
    bodySelector = $('body'),
    htmlBodySelector = $('html, body');
    $.fn.hasAttr = function(attr) {  
       if (typeof attr !== typeof undefined && attr !== false && attr !== undefined) {
            return true;
       }
       return false;
    };

    /*-------------------------------------
     Background Image Function
    -------------------------------------*/
    var background_image = function() {
        $("[data-bg-img]").each(function() {
            var attr = $(this).attr('data-bg-img');
            if (typeof attr !== typeof undefined && attr !== false && attr !== "") {
                $(this).css('background-image', 'url('+attr+')');
            }
        });  
    };

    /*-------------------------------------
        Preloader
    -------------------------------------*/
    var preloader = function() {
        var preloaderSelector = $('#preloader'); 
        if(preloaderSelector.length) {
            preloaderSelector.children().fadeOut(); /* will first fade out the loading animation */
            preloaderSelector.delay(150).fadeOut('slow'); /* will fade out the white DIV that covers the website */
            bodySelector.delay(150).removeClass('preloader-active');
        }
    };


    /*-------------------------------------
        HTML direction attribute
    -------------------------------------*/
    var html_direction = function() {
        var html_tag = $("html"),
            dir = html_tag.attr("dir"),
            directions = ['ltr', 'rtl'];
        if (html_tag.hasAttr('dir') && jQuery.inArray(dir, directions)) {
            html_tag.addClass(dir);
        } else {
            html_tag.attr("dir", directions[0]).addClass(directions[0]);
        }
    };

    /*-----------------------------------------
        Fix IE 10 on Windows Phone 8 Viewport
    ------------------------------------------*/
    var bugfix = function() {
        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
          var msViewportStyle = document.createElement('style');
          msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
          document.querySelector('head').appendChild(msViewportStyle);
        }
    };

    /*-------------------------------------
        Back to top functions
    -------------------------------------*/
    var back_to_top = function() {
        var backTop = $('#backTop');
        if (backTop.length) {
            var scrollTrigger = 200,
                scrollTop = windowSelector.scrollTop();
            if (scrollTop > scrollTrigger) {
                backTop.addClass('show');
            } else {
                backTop.removeClass('show');
            }
        }
    };
    var click_back = function() {
        var backTop = $('#backTop');
        backTop.on('click', function(e) {
            htmlBodySelector.animate({
                scrollTop: 0
            }, 700);
            e.preventDefault();
        });
    };

    /*-------------------------------------
        Magnific Popup function
    -------------------------------------*/
    var magnific_popup = function() {
        $('.img-lightbox').magnificPopup({
            type: 'image',
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true
            }
          
        });
        $('.iframe-lightbox').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            iframe: {
              patterns: {
                youtube: {
                  src: 'https://www.youtube.com/embed/%id%?autoplay=1' /* URL that will be set as a source for iframe. */
                },
                vimeo: {
                  src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                  index: 'https://maps.google.'
                }
              }
            }
        });
    };


    /*-------------------------------------
        Skills Progress Bars
    -------------------------------------*/
    var progress_bar = function() {
        $('.skill-percentage').each(function () {
            var $this = $(this);
            var width = $(this).data('percent');
            $this.html('<span class="progress-tooltip">'+width+' %</span>');
            $this.css({
                'transition': 'width 3s'
            });
            setTimeout(function () {
                $this.appear(function () {
                    $this.css('width', width + '%');
                    setTimeout(function() {
                      $this.find('.progress-tooltip').css({
                        'opacity': '1'
                      });  
                    }, 200);
                });
            }, 1000);
        });
    };

    /*-------------------------------------
        Typed JS Initiation
    -------------------------------------*/
    var typed_text = function() {
        var typeText = $('.typed-text');
        if (typeText.length) {
            typeText.each(function () {
                $(this).typed({
                    strings: [$(this).data('text1'), $(this).data('text2'), $(this).data('text3')],
                    loop: $(this).data('loop') ? $(this).data('loop') : false ,
                    backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000 ,                
                    typeSpeed: 50,
                });
            });
        }
    };

    /*-------------------------------------
        Navbar Functions
    -------------------------------------*/
    var navbar = function() {
        windowSelector.on('resize', function() {
            $(".navbar-collapse").css({ maxHeight: windowSelector.height() - $(".navbar-header").height() + "px" });
        }); 
        $('.navbar-collapse ul li a.page-scroll').on('click', function() {
            $('.navbar-toggle:visible').click();
        });
        $('a.page-scroll').on('click', function(event) {
            var $anchor = $(this);
            htmlBodySelector.stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - 70
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    };

    var scroll_spy = function() {
        bodySelector.scrollspy({
            target: '.navbar-default'
        });
    };

    /*-------------------------------------
        Carousel slider initiation
    -------------------------------------*/
    var owl_carousel = function() {
        $('.owl-carousel').each(function () {
            var carousel = $(this),
                autoplay_hover_pause = carousel.data('autoplay-hover-pause'),
                loop = carousel.data('loop'),
                items_general = carousel.data('items'),
                margin = carousel.data('margin'),
                autoplay = carousel.data('autoplay'),
                autoplayTimeout = carousel.data('autoplay-timeout'),
                smartSpeed = carousel.data('smart-speed'),
                nav_general = carousel.data('nav'),
                navSpeed = carousel.data('nav-speed'),
                xxs_items = carousel.data('xxs-items'),
                xxs_nav = carousel.data('xxs-nav'),
                xs_items = carousel.data('xs-items'),
                xs_nav = carousel.data('xs-nav'),
                sm_items = carousel.data('sm-items'),
                sm_nav = carousel.data('sm-nav'),
                md_items = carousel.data('md-items'),
                md_nav = carousel.data('md-nav'),
                lg_items = carousel.data('lg-items'),
                lg_nav = carousel.data('lg-nav'),
                center = carousel.data('center'),
                dots_global = carousel.data('dots'),
                xxs_dots = carousel.data('xxs-dots'),
                xs_dots = carousel.data('xs-dots'),
                sm_dots = carousel.data('sm-dots'),
                md_dots = carousel.data('md-dots'),
                lg_dots = carousel.data('lg-dots');

            carousel.owlCarousel({
                autoplayHoverPause: autoplay_hover_pause,
                loop: (loop ? loop : false),
                items: (items_general ? items_general : 1),
                lazyLoad: true,
                margin: (margin ? margin : 0),
                autoplay: (autoplay ? autoplay : false),
                autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
                smartSpeed: (smartSpeed ? smartSpeed : 250),
                dots: (dots_global ? dots_global : false),
                nav: (nav_general ? nav_general : false),
                navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
                navSpeed: (navSpeed ? navSpeed : false),
                center: (center ? center : false),
                responsiveClass: true,
                responsive: {
                    0: {
                        items: ( xxs_items ? xxs_items : (items_general ? items_general : 1)),
                        nav: ( xxs_nav ? xxs_nav : (nav_general ? nav_general : false)),
                        dots: ( xxs_dots ? xxs_dots : (dots_global ? dots_global : false))
                    },
                    480: {
                        items: ( xs_items ? xs_items : (items_general ? items_general : 1)),
                        nav: ( xs_nav ? xs_nav : (nav_general ? nav_general : false)),
                        dots: ( xs_dots ? xs_dots : (dots_global ? dots_global : false))
                    },
                    768: {
                        items: ( sm_items ? sm_items : (items_general ? items_general : 1)),
                        nav: ( sm_nav ? sm_nav : (nav_general ? nav_general : false)),
                        dots: ( sm_dots ? sm_dots : (dots_global ? dots_global : false))
                    },
                    992: {
                        items: ( md_items ? md_items : (items_general ? items_general : 1)),
                        nav: ( md_nav ? md_nav : (nav_general ? nav_general : false)),
                        dots: ( md_dots ? md_dots : (dots_global ? dots_global : false))
                    },
                    1199: {
                        items: ( lg_items ? lg_items : (items_general ? items_general : 1)),
                        nav: ( lg_nav ? lg_nav : (nav_general ? nav_general : false)),
                        dots: ( lg_dots ? lg_dots : (dots_global ? dots_global : false))
                    }
                }
            });

        });
    };

    /* Use mixItUp Plugin */
    $('.portfolio-area .portfolio-wrapper').mixItUp();
    $('.portfolio-area .portfolio-filter .filter').on('click', function(e){
        e.preventDefault();
    });

    var validateEmail = function(email) {
        var patt = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        if (patt.test(email) === true ) {
            return true;
        }
        return false;
    }

    var contact_response = function(responseNode, type) {
        /* Response Messages */
        var success_response = 'Your email was sent!',
            error_response = 'Something went wrong!',
            error_net_response = 'Could not connect to server!';

        if (type === "success") {
            responseNode.removeClass('text-error').addClass('text-valid');
            responseNode.text(success_response);
        }
        else {
            responseNode.removeClass('text-valid').addClass('text-error');
            if (type === "netError") {
                responseNode.text(error_net_response);
            }
            else {
                responseNode.text(error_response);
            }
        }
    };
    
    var contactForm = function() {

        $("#contactForm").on("submit", function(e) {
            event.preventDefault();
            var self = $(this),
                valid_form = true,
                name = $("#contactName"),
                email = $("#contactEmail"),
                subject = $("#contactSubject"),
                message = $("#contactMessage"),
                formFields = [name, subject, message],
                action = self.attr('action'),
                responseNode = $('#contactResponse');

            formFields.forEach(function(input) {
                if (input.val() === '') {
                    input.addClass('input-error');
                    valid_form = false;
                }
            });
            if (email.val() === '' || validateEmail(email.val()) === false) {
                email.addClass('input-error');
                valid_form = false;
            }
            self.find('input, textarea').on('change', function(){
                $(this).removeClass('input-error');
            });

            if (valid_form === true) {
                contact_response(responseNode, "success");
            }

        });
    }

    /* ====================================
       When document is ready, do
    ==================================== */
       
        $(document).on('ready', function() {
            preloader();
            html_direction();
            background_image();
            click_back();
            bugfix();
            magnific_popup();
            progress_bar();
            typed_text();
            navbar();
            scroll_spy();
            owl_carousel();
            contactForm();
        });
        
    /* ====================================
       When document is loading, do
    ===================================== */
        
        windowSelector.on('load', function() {
            preloader();
        }); 

    /* ====================================
       When document is Scrollig, do
    ==================================== */
        
        windowSelector.on('scroll', function() {
            back_to_top();
        });

    
})(jQuery);
$(window).on('load', function() {

    $('.loader').fadeOut('slow')

    $('.slickFirstSlider').slick({
        dots: true,
        infinite: true,
        fade: true,
        autoplaySpeed: 3500,
        cssEase: 'linear',
        autoplay: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 700

    });

    function slickPause() {
        $('.slickFirstSlider').slick('slickPause');
    }

    function slickPlay() {
        $('.slickFirstSlider').slick('slickPlay')
    }

    function startProgressBar(mls) {

        $(".slide-progress").css({
            height: "100%",
            transition: "height " + mls + "ms"

        });
    }

    function resetProgressBar() {
        $(".slide-progress").css({
            height: "0%",
            transition: "height 0s"
        });
    }

    resetProgressBar();
    setTimeout(function() {
        if ($(window).width() > 800) {
            startProgressBar(5881);
        } else {
            startProgressBar(4300);
        }
    }, 10)

    $('.slickFirstSlider').on('beforeChange', function() {

        resetProgressBar();

        setTimeout(function() {
            if ($(window).width() > 800) {
                startProgressBar(5881);
            } else {
                startProgressBar(4300);
            }
        }, 10)
    });

    $('.scroll-down-container').on('click', function() {
        var $scrollHeight = $('.slider-container').height();
        $('html, body').animate({ scrollTop: $scrollHeight }, 1000);
    })

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        slidesPerView: 7.43,
        spaceBetween: 30,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            // 1050: {
            //     spaceBetween: 10,
            //     slidesPerView: 5.75
            // },
            100: {
                spaceBetween: 7,
                slidesPerView: 3.4
            },
            500: {
                spaceBetween: 5,
                slidesPerView: 4.4
            },
            700: {
                spaceBetween: 10,
                slidesPerView: 5.4
            },
            801: {
                spaceBetween: 10,
                slidesPerView: 5.4
            },
            1128: {
                spaceBetween: 15,
                slidesPerView: 6.4
            },
            1450: {
                spaceBetween: 30,
                slidesPerView: 6.4
            }


        }
    });
    var galleryTop = new Swiper('.gallery-top', {
        speed: 1000,
        spaceBetween: 70,
        centeredSlides: true,
        slidesPerView: 1.6,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        },
        breakpoints: {
            100: {
                spaceBetween: 20
            },
            900: {
                spaceBetween: 30
            },
            1127: {
                spaceBetween: 55
            },
            1380: {
                spaceBetween: 60
            },
            1400: {
                spaceBetween: 70
            }
        }
    });



    $('.classic').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 2
            },
            600: {
                items: 3
            },
            800: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    })

    var sidebarHeight
    var fadeCover;

    function mouseOver(sidebarWidth, searchWidth, searchLeft) {
        slickPause();
        $('body').css('overflow-y', 'hidden');
        $('.slide-progress').css({
            'opacity': '0',
            transition: "opacity 0s 0s",
        });
        $('html, body').animate({ scrollTop: 0 }, 0);
        $('.logo-title-container').css({ 'transition': 'width 0s', 'width': '305px' });
        $('.logoEnd').removeClass("logoEnd");

        $('.pageCover').stop().css('display', 'block').animate({
            opacity: '1'
        }, 800);

        $('.social-media').css('display', 'none');
        $(".logo-container").addClass('logoBegin');
        $('.goods').addClass('side');
        clearTimeout(sidebarHeight);
        $(".sidebar").css({ "height": "100vh", "width": sidebarWidth, 'transition-delay': '0s' });


        $('aside').css({
            "width": '100vw',
            'height': '100%',
            'overflow-y': 'scroll',
            'top': '0px',
            'overflow-x': 'hidden'
        });
        $(".category-img").css({ "transform": "translateX(0%)", "margin": "0px 20px" });
        $(".ctg-title p").css({
            "transform": "translateX(0)",
            "padding-left": "15px",
            "opacity": "1"
        });
        $(".search-input").css({
            "padding-top": "0",
            "opacity": "1",
            "width": searchWidth,
            "padding-right": "50px"
        })
        $(".search-container").css({ "left": searchLeft });
        $(".logoBegin circle").css({ "animation": "startCircle 5s both linear" });

        $(".logo-container").css({ "animation": "logoRotate 1.1s 0.6s both cubic-bezier(0, .29, 0, 1)" });
        $('.plus-minus-cont').css({
            'transform': 'translateX(100%)',
            'transition-delay': '0s'
        });
        $("aside").addClass("active");
        $(".sidebar").addClass("active");
    }


    function mouseLeave(callback1, x) {
        slickPlay();
        $('.slide-progress').css({
            'opacity': '1',
            transition: "opacity 0.2s 1s",
        });
        $(".sidebar").css({ "width": '62px' });
        $('.gioAnime').css('transform', 'translateX(0px)');
        $("aside").css({
            "width": '62px',
            'height': '100%',
            'overflow-y': 'visible',
            'overflow-x': 'visible'
        });
        $('.social-media').css('display', 'block');
        $('.slider-container').css('transform', 'translateX(0px)');
        sidebarHeight = setTimeout((e) => {
            $(".sidebar").css({ "height": 'unset' });
        }, 1000)

        $('body').css('overflow-y', 'unset');

        $('.pageCover').stop().animate({
            'opacity': '0'
        }, 800, function() {
            $(this).hide();
        });
        $(".slider-container").css("width", "100%");
        $(".category-img").css({ "transform": "translateX(-100%)", "margin": "0" });
        $(".ctg-title p").css({ "transform": "translateX(-60%)", "padding-left": "0px", "opacity": "0" });
        $(".search-input").css({
            "padding-top": "25px",
            "opacity": "0",
            "width": '0',
            "padding-right": "30px"
        })
        $(".search-container").css({ "left": "21px" });
        $('.plus-minus-cont').css({
            'transform': 'translateX(0%)',
            'transition-delay': '2s'
        });
        if ($('.sidebar').width() > 62) {
            $('.logoBegin').removeClass("logoBegin");
            $(".logo-container").addClass("logoEnd");
            $('.logo-title-container').css({ 'transition': 'width 2s', 'width': '62px' });
            $(".logo-container").css({ 'animation': 'logoRotate2 0.9s 0.1s both ease-in-out' });
            $(".logoEnd circle").css({
                "animation": "endCircle 2s 0.5s both linear"
            });
        }

        $("aside").removeClass("active");
        $(".sidebar").removeClass("active");
        $('.goods').removeClass('side');

        $('ul.active').slideUp(150);
        $('ul.active').removeClass('active');
        $('.dotLi').removeClass('active');


    }




    var clicked = false,
        clickY;
    $("simplebar-wrapper").on({
        'mousemove': function(e) {
            clicked && updateScrollPos(e);
        },
        'mousedown': function(e) {
            clicked = true;
            clickY = e.pageY;
        },
        'mouseup': function() {
            clicked = false;
            $('html').css('cursor', 'auto');
        }
    });

    var updateScrollPos = function(e) {
        $('html').css('cursor', 'row-resize');
        $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
    }

    var menuSlide;
    var asideClean;

    $(".sidebar").on("mouseover", function() {

        clearTimeout(asideClean);
        asideClean = setTimeout(function() {
            if ($(window).width() > 800) {
                mouseOver(340, 300, 279);
                $('.slider-container').css('transform', 'translateX(340px)');
                $('.wholeAside').css({
                    'overflow-y': 'unset',
                    'overflow-x': 'unset',
                    'height': '100vh',
                    'width': 'unset'
                });
                $('.gioAnime').css('transform', 'translateX(340px)');
                $('aside').css({ 'overflow-Y': 'unset' });

            } else {
                mouseOver(300, 260, 239);
                $('.gioAnime').css('transform', 'translateX(300px)');
                $('.slider-container').css('transform', 'translateX(300px)');


            }
        }, 200);


    });


    var specifiedElement = document.getElementById('newAside');

    //I'm using "click" but it works with any event
    document.addEventListener('click', function(event) {
        var isClickInside = specifiedElement.contains(event.target);

        if (!isClickInside) {
            console.log('yeah');
        }
    });

    $('.dotLi').on('click', function() {

        var panelShow = $(this).attr('data-panel');
        if ($(this).hasClass('active')) {

            $(this).removeClass('active');
            $(panelShow).slideUp(300);
            $(panelShow).removeClass('active');


        } else {
            $('ul.active').slideUp(300);
            $('ul.active').removeClass('active');
            $('.dotLi').removeClass('active');
            $(this).addClass('active');
            $(panelShow).slideDown(300).addClass('active');

        }

    })

    $('#nav-icon4').click(function() {
        $('.yellow-line').toggleClass('open').css({ 'overflow': 'visible', 'width': '100vw' });
        $(this).toggleClass('open');
        $('.nav-container').toggleClass('open');
        $('.language-container').toggleClass('open');
        $('#nav-icon4 span').toggleClass('open');
        $('.nav-list a').toggleClass('open');
        $('.language-selector-container p').toggleClass('open');

        if ($(window).width() <= 800) {

            if ($('#nav-icon4').hasClass('open')) {

                mouseOver(300, 260, 239);
                $('.slider-container').css('transform', 'translateX(300px)');
                $('.gioAnime').css('transform', 'translateX(300px)');


                // $('.gioAnime').css('transform', 'translateX(300px)');
                // $('.slider-container').css('transform', 'translateX(300px)');
                $('nav').css('transform', 'translateY(418px)');
                $('.search-form').css('transform', 'translateY(415px)');
                $('aside').css({
                    'width': '100vw',
                    'height': '100%',
                    'top': '0',
                    'overflow-y': 'scroll',
                    'overflow-x': 'hidden',

                });
                $('.mobile-nav-cnt').css('opacity', 1);
                $('.sidebar').css({ 'transition-delay': '0s' });
                $('nav').css('transition-delay', '0s');
                $('.wholeAsideCover').css({ 'width': '100vw', 'height': '100%' });
            } else {
                $('.sidebar').css('transition-delay', '.4s');
                setTimeout(function() {
                    mouseLeave();
                    $('.gioAnime').css('transform', 'translateX(0px)');
                    $('.slider-container').css('transform', 'translateX(0px)');
                    $('nav').css({ 'transform': 'translateY(0px)', 'transition-delay': '.3s' });
                    $('.search-form').css({ 'transform': 'translateY(0px)', 'transition-delay': '.3s' });
                    $('aside').css({
                        'overflow-y': 'visible',
                        'overflow-x': 'visible',

                    });
                    $('.mobile-nav-cnt').css('opacity', 0);
                    $('.wholeAsideCover').css({ 'width': '0px', 'height': '0px' });
                }, 1)

            }

        }



    });

    $(".wholeAside").on("mouseleave", function() {
        clearTimeout(asideClean);
        asideClean = setTimeout(function() {
            if ($(window).width() <= 800) {

                if (!$('#nav-icon4').hasClass('open')) {
                    mouseLeave();
                    $('aside').css('height', '600px');
                }

            } else {
                mouseLeave();
                $('aside').css('height', '100%');
            }

        }, 1000);
    })

    $(window).on('resize', function() {
        if ($(this).width() <= 800) {
            $('.wholeAside').css('height', 600);
            $('aside').css('height', '100%');
            // $('.sidebar').css('height', '100vh');
            if ($('#nav-icon4').hasClass('open')) {

                $('.mobile-nav-cnt').stop().css({ 'opacity': '1' });
            }
            // }
        } else {
            $('.wholeAside').css('height', '100vh');
            $('aside').css('height', '100%');
            $('nav').css('transform', 'translateY(0)');
            $('.search-form').css('transform', 'translateY(0)');

        }
    })



});
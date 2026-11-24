/* *********** TABLE OF CONTENTS ***************

 01 Open Sidebar JS
 02 Mobile Dropdown JS
 03 Hero Slider Active JS
 04 Gallery Slider Active JS
 05 Service Slider Active JS
 06 Aos JS
 07 Counter JS
 08 Ajax Form JS
 09 Leadership Bio Modal JS

************ TABLE OF CONTENTS ************** */

(function ($) {

    'use strict';

    $(window).on('load', function () {
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({ 'overflow': 'visible' });
    })

    /*--------------------------------------------------------------
    01 Open Sidebar JS
    --------------------------------------------------------------*/
    $('[data-toggle="sidebar"]').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('overflow-hidden');
        $('.off-canvas-sidebar').toggleClass('active');
        $('.off-canvas-sidebar-body').toggleClass('active');
    });

    $('[data-close="sidebar"]').on('click', function (e) {
        e.preventDefault();
        $('body').removeClass('overflow-hidden');
        $('.off-canvas-sidebar').removeClass('active');
        $('.off-canvas-sidebar-body').removeClass('active');
    });

    $('[data-toggle="menubar"]').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('overflow-hidden');
        $('.off-canvas-menubar').toggleClass('active');
        $('.off-canvas-menubar-body').toggleClass('active');
    });

    $('[data-close="menubar"]').on('click', function (e) {
        e.preventDefault();
        $('body').removeClass('overflow-hidden');
        $('.off-canvas-menubar').removeClass('active');
        $('.off-canvas-menubar-body').removeClass('active');
    });


    /*--------------------------------------------------------------
    02 Mobile Dropdown JS
    --------------------------------------------------------------*/
    $('.off-canvas-menu .has-dropdown > a').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
        $(this).parent().children('.sub-menu').slideToggle();
        $(this).parent().siblings().children('.sub-menu').slideUp();
        $(this).parent().siblings().removeClass('active');
    });

    /*--------------------------------------------------------------
    03 Hero Slider Active JS
    --------------------------------------------------------------*/
    function animateSwiperElements(selector, init) {
        let animated = function () {
            $(selector + ' [data-animation]').each(function () {
                let anim = $(this).data('animation');
                let delay = $(this).data('delay');
                let duration = $(this).data('duration');

                $(this).removeClass('anim' + anim)
                    .addClass(anim + ' animate__animated')
                    .css({
                        webkitAnimationDelay: delay,
                        animationDelay: delay,
                        webkitAnimationDuration: duration,
                        animationDuration: duration
                    })
                    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $(this).removeClass(anim + ' animate__animated');
                    });
            });
        };

        // Initial animation
        animated();

        // Remove animation classes on slide change start
        init.on('slideChange', function () {
            $(selector + ' [data-animation]').removeClass('animate__animated');
        });

        // Animate on slide change complete
        init.on('slideChange', animated);
    }

    if (jQuery(".hero-slider-active-1").length > 0) {
        let sliderActive1 = '.hero-slider-active-1 .swiper';
        let sliderInit1 = new Swiper(sliderActive1, {
            slidesPerView: 1,
            slidesPerColumn: 1,
            paginationClickable: true,
            loop: true,
            effect: 'fade',
            fadeEffect: {crossFade: true},
            autoplay: {
                delay: 5000,
                waitForTransition: true,
                disableOnInteraction: false
            },
            pagination: {
                el: '.hero-slider-pagination-1',
                clickable: true,
            },
            navigation: {
                nextEl: '.hero-slider-button-next-1',
                prevEl: '.hero-slider-button-prev-1',
            },
            a11y: false
        });

        animateSwiperElements(sliderActive1, sliderInit1);
    }

    

    


    /*--------------------------------------------------------------
    04 Gallery Slider Active JS
    --------------------------------------------------------------*/
    if (jQuery(".gallery-slider-active .swiper").length > 0) {
        let gallerySlider = new Swiper('.gallery-slider-active .swiper', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 1,
            slidesPerColumn: 1,
            paginationClickable: true,
            autoplay: {
                delay: 3000,
            },

            pagination: {
                el: '.gallery-pagination',
                clickable: true,
            },

            navigation: {
                nextEl: '.gallery-button-next',
                prevEl: '.gallery-button-prev',
            },

            a11y: false,
        })
    }

    /*--------------------------------------------------------------
   05 Service Slider Active JS
   --------------------------------------------------------------*/
    if (jQuery(".service-slider-active .swiper").length > 0) {
        let serviceSlider = new Swiper('.service-slider-active .swiper', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 3,
            slidesPerColumn: 1,
            paginationClickable: true,
            // autoplay: {
            //     delay: 3000,
            // },

            pagination: {
                el: '.service-pagination',
                clickable: true,
            },

            navigation: {
                nextEl: '.service-button-next',
                prevEl: '.service-button-prev',
            },

            a11y: false,

            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
            },
        })
    }

    /*--------------------------------------------------------------
   06 Aos JS
   --------------------------------------------------------------*/
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

    /*--------------------------------------------------------------
    07 counter
    --------------------------------------------------------------*/
    new PureCounter();

    /*--------------------------------------------------------------
    20 Ajax Form
    --------------------------------------------------------------*/
    $(function() {

        // Get the form.
        var form = $('#contact-form');

        // Get the messages div.
        var formMessages = $('.form-message');

        // Set up an event listener for the contact form.
        $(form).submit(function(e) {
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
                .done(function(response) {
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');

                    // Set the message text.
                    $(formMessages).text(response);

                    // Clear the form.
                    $('#contact-form input,#contact-form textarea').val('');
                })
                .fail(function(data) {
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

    });

})(jQuery);

document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('bioModalOverlay');
  const modalImg = document.getElementById('bioModalImg');
  const modalName = document.getElementById('bioModalName');
  const modalRole = document.getElementById('bioModalRole');
  const modalText = document.getElementById('bioModalText');
  const closeBtn = document.getElementById('bioModalClose');

  document.querySelectorAll('.bio-trigger').forEach(card => {
    card.addEventListener('click', function (e) {
      if (e.target.closest('.socials')) return; // let share/social icons work normally

      e.preventDefault(); // stop the <a href="javascript:void(0)"> from doing anything odd

      modalImg.src = card.dataset.img;
      modalImg.alt = card.dataset.name;
      modalName.textContent = card.dataset.name;
      modalRole.textContent = card.dataset.role;
      modalText.textContent = card.dataset.bio;

      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
});
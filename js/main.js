$(document).ready(function() {
    // Mobile menu toggle
    $('.mobile-menu').on('click', function() {
        $('.nav-links').toggleClass('active');
    });

    // Close mobile menu when clicking outside
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.main-nav').length) {
            $('.nav-links').removeClass('active');
        }
    });

    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $($(this).attr('href'));
        
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80 // Offset for fixed header
            }, 800, 'swing');
        }
    });

    // Add animations for features cards
    $('.feature-card').each(function(index) {
        $(this).css('animation-delay', (index * 0.2) + 's');
    });

    // Sticky header
    var header = $('header');
    var headerOffset = header.offset().top;

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > headerOffset) {
            header.addClass('sticky');
        } else {
            header.removeClass('sticky');
        }
    });

    // Form validation for contact form (if exists)
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        var isValid = true;
        
        $(this).find('input[required], textarea[required]').each(function() {
            if (!$(this).val()) {
                isValid = false;
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });

        if (isValid) {
            // Add your form submission logic here
            console.log('Form is valid, ready to submit');
        }
    });

    // Dynamic class schedule highlighting
    $('.schedule-item').on('click', function() {
        $('.schedule-item').removeClass('active');
        $(this).addClass('active');
    });

    // Responsive image loading
    function loadResponsiveImages() {
        if ($(window).width() <= 768) {
            $('[data-mobile-src]').each(function() {
                $(this).attr('src', $(this).data('mobile-src'));
            });
        } else {
            $('[data-desktop-src]').each(function() {
                $(this).attr('src', $(this).data('desktop-src'));
            });
        }
    }

    // Call on load and resize
    loadResponsiveImages();
    $(window).on('resize', $.throttle(250, loadResponsiveImages));

    // Add scroll reveal animations
    $(window).on('scroll', function() {
        $('.animate-on-scroll').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('visible');
            }
        });
    });

    // Initialize tooltips if Bootstrap is included
    if (typeof $().tooltip === 'function') {
        $('[data-toggle="tooltip"]').tooltip();
    }
});

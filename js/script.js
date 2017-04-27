/*global jQuery*/
(function () {
    'use strict';
    $(function () {
        $('.carousel-control').click(function (e) {
            e.preventDefault();
            $('#myCarousel').carousel($(this).data());
        });

    });

    //map
    /* $(function initMap() {
         var mapDiv = document.getElementById('map');
         var map = new google.maps.Map(mapDiv, {
             center: {
                 lat: 40.546522,
                 lng: -74.417932
             },
             zoom: 8
         });
     }); */

    // page slider
    $(".jumper").on("click", function (e)  {
        e.preventDefault();
        $("body, html").animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1000);
    });

    // create the back to top button
    $('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

    var amountScrolled = 300;

    $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });

    $('a.back-to-top, a.simple-back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });


    //fadein
    jQuery(document).ready(function () {
        jQuery('.post').addClass("hide_me").viewportChecker({
            classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
            offset: 100
        });
    });

    //fadeInDown
    jQuery(document).ready(function () {
        jQuery('.post1').addClass("hide_me").viewportChecker({
            classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
            offset: 100
        });
    });
    
    //fadeInRight
    jQuery(document).ready(function () {
        jQuery('.post2').addClass("hide_me").viewportChecker({
            classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
            offset: 100
        });
    });
    
    //fadeInLeft
    jQuery(document).ready(function () {
        jQuery('.post3').addClass("hide_me").viewportChecker({
            classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
            offset: 100
        });
    });
    
    //bounceInDown
    jQuery(document).ready(function () {
        jQuery('.post4').addClass("hide_me").viewportChecker({
            classToAdd: 'visible animated bounceInDown', // Class to add to the elements when they are visible
            offset: 100
        });
    });
    
    //bounceInLeft
    jQuery(document).ready(function () {
        jQuery('.post5').addClass("hide_me").viewportChecker({
            classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
            offset: 100
        });
    });
    
    //bounceInRight
    jQuery(document).ready(function () {
        jQuery('.post6').addClass("hide_me").viewportChecker({
            classToAdd: 'visible animated bounceInRight', // Class to add to the elements when they are visible
            offset: 100
        });
    });
    
    //pulse
    jQuery(document).ready(function () {
        jQuery('.post7').addClass("hide_me").viewportChecker({
            classToAdd: 'visible animated pulse', // Class to add to the elements when they are visible
            offset: 100
        });
    });
}(jQuery));
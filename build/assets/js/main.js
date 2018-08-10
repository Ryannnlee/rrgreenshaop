'use strict';

$(function () {
    //fullpage
    $('#fullpage').fullpage({
        verticalCentered: true,
        anchors: ['Home', '1stpage', '2ndpage', '3thpage', '4thpage', '5thpage'],
        scrollBar: true,
        menu: '#menu',
        responsiveWidth: 1025
    });

    $('#nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

    $('#overlay li').click(function () {
        $('#nav-toggle').removeClass('active');
        $('#overlay').removeClass('open');
    });

    $('#logo').click(function () {
        $('#nav-toggle').removeClass('active');
        $('#overlay').removeClass('open');
    });

    var h = $(window).height();
    if ($(window).scrollTop() < h / 5) {
        $('header').removeClass("menuScroll");
    } else {
        $('header').addClass("menuScroll");
    }
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > h / 5) {
            $('header').addClass("menuScroll");
        } else {
            $('header').removeClass("menuScroll");
        }
    });

    //menu scroll
    $('#productSection').on('click', function () {
        var section1T = $('#section1').offset().top;
        $('html, body').animate({ scrollTop: section1T }, '800');
    });
    $('#advSection').on('click', function () {
        var section2T = $('#section2').offset().top;
        $('html, body').animate({ scrollTop: section2T }, '800');
    });
    $('#threeSection').on('click', function () {
        var section3T = $('#section3').offset().top;
        $('html, body').animate({ scrollTop: section3T }, '800');
    });
    $('#fiveSection').on('click', function () {
        var section4T = $('#section4').offset().top;
        $('html, body').animate({ scrollTop: section4T }, '800');
    });
    $('#sevenSection').on('click', function () {
        var section5T = $('#section5').offset().top;
        $('html, body').animate({ scrollTop: section5T }, '800');
    });

    //slider
    $('#section3 .slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    });
    $('#section4 .slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    });
    $('#section5 .slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    });
});
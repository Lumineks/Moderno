$(function() {

    $('.rate-star').rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true,
    });

    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: 3000,
    });

    $('.js-range-slider').ionRangeSlider({

        type: "double",
        grid: false,
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"


    });

    $('.icon-th-list').on('click', function() {
        $('.products__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');

    });
    $('.icon-th-large').on('click', function() {
        $('.products__item').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active');
    });

    $('.menu__btn').on('click', function() {
        $('.menu__list').slideToggle();
    });

    $('.header__btn-menu').on('click', function() {
        $('.header__box').toggleClass('active');
    });

    $('.product-one__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
        $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-one__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.settings__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
        $('.settings__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.settings__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.profile__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
        $('.profile__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.profile__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('input[type="file"], select').styler();


    var mixer = mixitup('.products__inner-box');

});
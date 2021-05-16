$(function () {
    $('.hero__items').slick({
        arrows: false,
        dots: true,
    });

    (() => mixitup('.gallery__items'))();
});

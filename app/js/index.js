$(function () {
    $('.hero__items').slick({
        arrows: false,
        dots: true,
    });

    (() => mixitup('.products__items'))();
});

$(function () {
    //slick slider
    $('.hero__items').slick({
        arrows: false,
        dots: true,
    });

    $('.header__btn').on('click', function () {
        $(this).toggleClass('header__btn--active');
        $('.menu').toggleClass('menu--mobile');
        $('body').toggleClass('body--with-menu');
    });

    $('.company__items').slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $('.aside-recent__star').rateYo({
        rating: 5,
        starWidth: '15px',
        starHeight: '15px',
        normalFill: '#d6d6d6',
        ratedFill: '#fc0',
    });

    $('.aside-price__input').ionRangeSlider({
        type: 'double',
        min: 0,
        max: 799,
        from: 100,
        to: 500,
        onStart: function (data) {
            document.querySelector('.aside-price__start').textContent = `${data.from}$`;

            document.querySelector('.aside-price__finish').textContent = `${data.to}$`;
        },
        onChange: function (data) {
            document.querySelector('.aside-price__start').textContent = `${data.from}$`;

            document.querySelector('.aside-price__finish').textContent = `${data.to}$`;
        },
    });

    //mixitup
    let containerEl1 = document.querySelector('.design');
    let containerEl2 = document.querySelector('.products');
    let config = {
        controls: {
            scope: 'local',
        },
    };
    (() => mixitup(containerEl1, config))();
    (() => mixitup(containerEl2, config))();
});

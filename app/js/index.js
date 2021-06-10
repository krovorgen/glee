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

    $('.product-card__star').rateYo({
        rating: 5,
        starWidth: '18px',
        starHeight: '18px',
        normalFill: '#d6d6d6',
        ratedFill: '#fc0',
    });

    $('.product-details__star').rateYo({
        rating: 5,
        starWidth: '18px',
        starHeight: '18px',
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

    $('.filter-nav__btn--grid').on('click', () => {
        $('.product-list__content').removeClass('product-list__content--list');
    });

    $('.filter-nav__btn--list').on('click', () => {
        $('.product-list__content').addClass('product-list__content--list');
    });

    $('.filter-nav__btn--filter, .aside__overlay').on('click', () => {
        $('.aside').toggleClass('aside--mobile');
        $('.aside__overlay').toggleClass('aside__overlay--active');
        $('body').toggleClass('body--with-menu');

    });

    $(".product-details__meter").val(1)

    $(".product-details__meter--minus").on('click', () => {
        let counter = $(".product-details__meter");
        let newValue = Number(counter.val()) - 1;
        newValue >= 0 && counter.val(newValue);
    })

    $(".product-details__meter--plus").on('click', () => {
        let counter = $(".product-details__meter");
        let newValue = Number(counter.val()) + 1;
        counter.val(newValue);
    })

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

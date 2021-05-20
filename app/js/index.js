$(function () {
    //slick slider
    $('.hero__items').slick({
        arrows: false,
        dots: true,
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

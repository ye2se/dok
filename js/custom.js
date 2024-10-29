$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    })
})

$(function () {
    const mainVisualSlide = new Swiper('.main_visual_slide', {
        loop: true,
        parallax: true,
        speed: 1000,
        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },
    })

    const mainNoticeSlide = new Swiper('.main_notice_slide', {
        slidesPerView: 2.5,
        spaceBetween: 30,
        loop: true,
    })
})
const swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,
    spaceBetween: 200,
    slidesPerView: 2,
    breakpoints: {
        320: {
            centeredSlides: true,
            slidesPerView: 2,
            spaceBetween: 200,
            freeMode: {
                enabled: true,
                sticky: false,
            },
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 200,
            freeMode: {
                enabled: true,
                sticky: true,
            },
        }
    }
});
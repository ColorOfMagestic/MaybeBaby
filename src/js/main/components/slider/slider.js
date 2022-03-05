const reviews = new Swiper('.reviews--slider', {
    spaceBetween: 30,
    navigation: {
        nextEl: '.reviews--slider-next',
        prevEl: '.reviews--slider-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    }
})
const articles = new Swiper('.articles--slider', {
    spaceBetween: 30,
    navigation: {
        nextEl: '.articles--slider-next',
        prevEl: '.articles--slider-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
})

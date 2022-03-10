const reviews = new Swiper('[data-role="company-slider"]', {
  slidesPerView: 2,
  centeredSlides: true,
  initialSlide: 1,

  navigation: {
    nextEl: '[data-role="company-next"]',
    prevEl: '[data-role="company-prev"]',
  },
  breakpoints: {
    320: {
      spaceBetween: 9,
    },
    1024: {
      spaceBetween: 30,
    },
  },
});

const reviews = new Swiper('[data-role="company-slider"]', {
  loop: true,
  centeredSlides: true,
  initialSlide: 1,

  navigation: {
    nextEl: '[data-role="company-next"]',
    prevEl: '[data-role="company-prev"]',
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 9,
    },
    1024: {
      slidesPerView: 2.4,
      spaceBetween: 30,
    },
  },
});

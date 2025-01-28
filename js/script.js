document.addEventListener('DOMContentLoaded', () => {
  const swiperBanner = new Swiper('.swiper-banner', {
    // Optional parameters
    speed: 700,
    spaceBetween: 0,
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-banner .swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

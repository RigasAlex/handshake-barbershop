document.addEventListener('DOMContentLoaded', function(){

  var mySwiper = new Swiper ('#slider', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      speed: 1000,
      effect: 'fade',
      autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
      // If we need pagination
      pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      },

      // Navigation arrows
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
  });  
});
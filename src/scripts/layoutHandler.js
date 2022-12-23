let layoutHandler;

(function ($) {
  'use strict';
  let LayoutHandler = function () {
    let self = this;

    this.ready = function () {
      this.handleDOM();
      this.handleEvents();
    };

    this.handleDOM = function () {

    };

    this.handleEvents = function () {

    };
  };

  layoutHandler = new LayoutHandler();

  $(document).ready(function () {
    layoutHandler.ready();










    const getHamburber = document.querySelector('.hamburger');
    const getNav = document.querySelector('.main-ul');
    getHamburber.addEventListener('click', () => {
      getNav.classList.toggle('active');
    });




    var swiper = new Swiper(".main", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.3,
          spaceBetween: 15,
        },
        520: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        // 1400: {
        //   slidesPerView: 3,
        // },
      },
    });


  });
})(jQuery);

















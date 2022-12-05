let layoutHandler;

(function($) {
    'use strict';
    let LayoutHandler = function() {
        let self = this;

        this.ready = function() {
            this.handleDOM();
            this.handleEvents();
        };

        this.handleDOM = function() {

        };

        this.handleEvents = function() {

        };
    };

    layoutHandler = new LayoutHandler();

    $(document).ready(function() {
        layoutHandler.ready();


    });
})(jQuery);

/* eslint-disable linebreak-style */
(function() {
  'use strict';
  // Your custom JavaScript goes here




// creative code

const getHamburber = document.querySelector('.hamburger');
const getNav = document.querySelector('.main-ul');
getHamburber.addEventListener('click', () =>{
  getNav.classList.toggle('active');
})


















})();




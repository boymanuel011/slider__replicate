
/**
 * Initialization and options for Splide js
 */

function slider() {
    const slideTop = document.querySelector('.js-slide-top');
    const thumbSlide = document.querySelector('.js-slide')

    if(slideTop && thumbSlide) {
      const main = new Splide( slideTop, {
        type       : 'loop',
        heightRatio: 0.5,
        pagination : false,
        arrows     : false,
        cover      : true,
      } );
    
    const autoSlide = new Splide( thumbSlide, {
      type         : 'loop',
      rewind       : true,
      width        : '150px',
      height       : '576px',
      gap          : 10,
      pagination   : false,
      cover        : true,
      updateOnMove : true,
      wheel        : true,
      direction    : 'ttb',
      dragMinThreshold: {
        mouse      : 4,
        touch      : 10,
      },
      breakpoints : {
        640: {
          fixedWidth  : 66,
          fixedHeight : 38,
        },
      },
    } );
    main.sync( autoSlide );
    main.mount();
    // autoSlide.mount(window.splide.Extensions);
    autoSlide.mount();
  }
}
slider();

    

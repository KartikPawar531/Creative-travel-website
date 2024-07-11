// const swiper = new Swiper(".swiper", {
//     effect: 'creative',
//     creativeEffect: {
//       prev: {
//         // will set `translateZ(-400px)` on previous slides
//         translate: [0, 0, -400],
//       },
//       next: {
//         // will set `translateX(100%)` on next slides
//         translate: ['100%', 0, 0],
//       },
//     },
//   });
const swiper = new Swiper(".swiper", {
  effect: 'creative',
  creativeEffect: {
    nextEl: {
      translate: ['100%', 0, 0],
    },
    prevEl: {
      translate: [0, 0, -400],
    },
  },
});

  // swiper2
  const swiper2 = new Swiper(".swiper2", {
    slidesPerView: 2,
    spaceBetween: 35,
    slidePerGroup: 1,

    loop: true,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    loopfillGroupwithBlank: true,

    autopLay:{
        delay: 5000,
    },
    speed: 400,
    
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          
        },
        // when window width is >= 480px
        786: {
          slidesPerView: 2,
          
        },
        // when window width is >= 640px
        976: {
          slidesPerView: 2,
          
        }
      }
  }    
);

// 3rd swipper
const swiper3 = new Swiper(".swiper3", {
  slidesPerView: 3,
  spaceBetween: 35,
  slidePerGroup: 1,

  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  loopfillGroupwithBlank: true,

  autopLay:{
      delay: 5000,
  },
  speed: 400,
  
  breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        
      },
      // when window width is >= 480px
      786: {
        slidesPerView: 2,
        
      },
      // when window width is >= 640px
      976: {
        slidesPerView: 3,
        
      }
    }
}    
);
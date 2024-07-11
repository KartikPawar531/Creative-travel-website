var swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


var swiper3 = new Swiper(".swiper3", {
    slidesPerView: 2,
    spaceBetween: 35,
    slidePerGroup: 1,

    loop: true,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    loopfillGroupwithBlank: true,

    autopLay: {
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



var swiper = new Swiper(".swiper4", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
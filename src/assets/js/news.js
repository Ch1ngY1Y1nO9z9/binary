var recommendSwiper = new Swiper(".recommendSwiper", {
    navigation: {
        nextEl: ".recommend-swiper-button-next",
        prevEl: ".recommend-swiper-button-prev",
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: '40%',
        depth: 350,
        modifier: 1,
        slideShadows: false,
    },
    initialSlide: 1,
    observer: true,
    observeParents: true,
});

// index
var entertainment = new Swiper(".entertainment .newsSwiper", {
    navigation: {
        nextEl: ".entertainment-swiper-button-next",
        prevEl: ".entertainment-swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 24
});

var economic = new Swiper(".economic .newsSwiper", {
    navigation: {
        nextEl: ".economic-swiper-button-next",
        prevEl: ".economic-swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 24
});

var national = new Swiper(".national .newsSwiper", {
    navigation: {
        nextEl: ".national-swiper-button-next",
        prevEl: ".national-swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 24
});

var sports = new Swiper(".sports .newsSwiper", {
    navigation: {
        nextEl: ".sports-swiper-button-next",
        prevEl: ".sports-swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 24
});

var political = new Swiper(".political .newsSwiper", {
    navigation: {
        nextEl: ".political-swiper-button-next",
        prevEl: ".political-swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 24
});

var social = new Swiper(".social .newsSwiper", {
    navigation: {
        nextEl: ".social-swiper-button-next",
        prevEl: ".social-swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 24
});

var cryptocurrency = new Swiper(".cryptocurrency .newsSwiper", {
    navigation: {
        nextEl: ".cryptocurrency-swiper-button-next",
        prevEl: ".cryptocurrency-swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 24
});

//list
var topNewsSwiper = new Swiper(".topnews .newsSwiper", {
    navigation: {
        nextEl: ".topnews-swiper-button-next",
        prevEl: ".topnews-swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 24
});

//content
var interestsSwiper = new Swiper(".interests .interestsSwiper", {
    navigation: {
        nextEl: ".interests-swiper-button-next",
        prevEl: ".interests-swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 24
});
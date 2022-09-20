// index
var overall = new Swiper(".overall .newsSwiper", {
    navigation: {
        nextEl: ".overall-swiper-button-next",
        prevEl: ".overall-swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 24
});

var news = new Swiper(".news .newsSwiper", {
    navigation: {
        nextEl: ".news-swiper-button-next",
        prevEl: ".news-swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 24
});

var sports = new Swiper(".sports .newsSwiper", {
    navigation: {
        nextEl: ".sports-swiper-button-next",
        prevEl: ".sports-swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 24
});

var financial = new Swiper(".financial .newsSwiper", {
    navigation: {
        nextEl: ".financial-swiper-button-next",
        prevEl: ".financial-swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 24
});

var lottery = new Swiper(".lottery .newsSwiper", {
    navigation: {
        nextEl: ".lottery-swiper-button-next",
        prevEl: ".lottery-swiper-button-prev",
    },
    slidesPerView: 4,
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
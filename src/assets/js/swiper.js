import 'https://unpkg.com/swiper@8/swiper-bundle.min.js'

var bannerSwiper = new Swiper(".bannerSwiper", {
    pagination: {
        el: ".banner-swiper-pagination",
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return ('0' + current) + '/' + ('0' + total);
        }
    },
    navigation: {
        nextEl: ".banner-swiper-button-next",
        prevEl: ".banner-swiper-button-prev",
    },
});

var topNewsSwiper = new Swiper(".topNewsSwiper", {
    navigation: {
        nextEl: ".topnews-swiper-button-next",
        prevEl: ".topnews-swiper-button-prev",
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

var moblieTopNewsSwiper = new Swiper(".moblieTopNewsSwiper", {
    observer: true,
    observeParents: true,
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
    navigation: {
        nextEl: ".topnews-swiper-button-next",
        prevEl: ".topnews-swiper-button-prev",
    }
});

moblieTopNewsSwiper.controller.control = topNewsSwiper;
topNewsSwiper.controller.control = moblieTopNewsSwiper;

var popularSwiper = new Swiper(".popularSwiper", {
    navigation: {
        nextEl: ".popular-swiper-button-next",
        prevEl: ".popular-swiper-button-prev",
    },
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    on: {
        resize: function () {
            this.update();
        }
    }
});

var newsSwiper = new Swiper(".newsSwiper", {
    navigation: {
        nextEl: ".news-swiper-button-next",
        prevEl: ".news-swiper-button-prev",
    },
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    on: {
        resize: function () {
            this.update();
        }
    }
});

var introSwiper = new Swiper(".introSwiper", {
    pagination: {
        el: ".intro-swiper-pagination",
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return ('0' + current) + '/' + ('0' + total);
        }
    },
    navigation: {
        nextEl: ".intro-swiper-button-next",
        prevEl: ".intro-swiper-button-prev",
    },
});

var featureSwiper = new Swiper(".featureSwiper", {
    slidesPerView: 'auto',
    navigation: {
        nextEl: ".feature-swiper-button-next",
        prevEl: ".feature-swiper-button-prev",
    },
});

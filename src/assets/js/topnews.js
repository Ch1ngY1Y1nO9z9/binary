var topNewsSwiper = new Swiper(".topNewsSwiper", {
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
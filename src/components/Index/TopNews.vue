<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, EffectCoverflow } from "swiper";

const modules = [Navigation, EffectCoverflow];

// const swiperOptions = {
//   navigation: {
//     nextEl: ".topnews-swiper-button-next",
//     prevEl: ".topnews-swiper-button-prev",
//   },
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 0,
//     stretch: "40%",
//     depth: 350,
//     modifier: 1,
//     slideShadows: false,
//   },
//   initialSlide: 1,
//   observer: true,
//   observeParents: true,
// };
</script>
      
<template>
  <section data-aos="fade-up" class="top-news">
    <div class="custom-container c-1575">
      <swiper
        class="topNewsSwiper"
        :slidePerView="'auto'"
        :initialSlide="0"
        :navigation="{
          nextEl: '.topnews-swiper-button-next',
          prevEl: '.topnews-swiper-button-prev',
        }"
        :effect="'coverflow'"
        :coverflowEffect="{
          rotate: 0,
          stretch: 0.4,
          depth: 350,
          modifier: 1,
          slideShadows: false,
        }"
        :grabCursor="true"
        :centeredSlides="true"
        :modules="modules"
      >
        <swiper-slide>
          <router-link
            to="/news"
            class="news-picture"
            style="background-image: url('')"
          >
            <div class="title">
              <span>最新消息</span>
            </div>
            <div class="description">
              哈登手軟七六人敗戰罪犯, 魔術強森看不下去魔術強森看不下看不下...
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link
            to="/news"
            class="news-picture"
            style="background-image: url('')"
          >
            <div class="title">
              <span>最新消息</span>
            </div>
            <div class="description">
              哈登手軟七六人敗戰罪犯, 魔術強森看不下去魔術強森看不下看不下...
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link
            to="/news"
            class="news-picture"
            style="background-image: url('')"
          >
            <div class="title">
              <span>最新消息</span>
            </div>
            <div class="description">
              哈登手軟七六人敗戰罪犯, 魔術強森看不下去魔術強森看不下看不下...
            </div>
          </router-link>
        </swiper-slide>
      </swiper>

      <div class="swiper moblieTopNewsSwiper swiper-h">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <router-link to="#" class="link">
              <div class="pic" style="background-image: url()"></div>
              <div class="tag">
                <span>幣圈新聞</span>
              </div>
              <div class="description">
                穩定幣暴跌拖累比特幣！什麼是穩定穩定幣暴跌...
              </div>
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="#" class="link">
              <div class="pic" style="background-image: url()"></div>
              <div class="tag">
                <span>幣圈新聞</span>
              </div>
              <div class="description">
                穩定幣暴跌拖累比特幣！什麼是穩定穩定幣暴跌...
              </div>
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="#" class="link">
              <div class="pic" style="background-image: url()"></div>
              <div class="tag">
                <span>幣圈新聞</span>
              </div>
              <div class="description">
                穩定幣暴跌拖累比特幣！什麼是穩定穩定幣暴跌...
              </div>
            </router-link>
          </div>
        </div>
        <div class="topnews-swiper-button-prev swiper-button-prev">
          <i class="fa-solid fa-circle-chevron-left"></i>
        </div>
        <div class="topnews-swiper-button-next swiper-button-next">
          <i class="fa-solid fa-circle-chevron-right"></i>
        </div>
      </div>
    </div>
  </section>
</template>
  
<style src="../../assets/css/index/top-news/top-news.scss" scoped></style>
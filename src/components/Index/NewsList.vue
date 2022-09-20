<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

const modules = [Navigation];

const newsSwiperOption = {
  navigation: {
    nextEl: ".news-swiper-button-next",
    prevEl: ".news-swiper-button-prev",
  },
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  on: {
    resize: function () {
      this.update();
    },
  },
};

const popularSwiperOption = {
  navigation: {
    nextEl: ".popular-swiper-button-next",
    prevEl: ".popular-swiper-button-prev",
  },
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  on: {
    resize: function () {
      this.update();
    },
  },
};
</script>
      
<template>
  <section class="news-list">
    <div class="peony-gradient-blue">
      <object
        data-aos="fade-up"
        data="./images/flowers/peony_gradient_blue.svg"
        type="image/svg+xml"
      ></object>
    </div>
    <div class="peony-gradient-orange">
      <object
        data="./images/flowers/peony_gradient_orange.svg"
        type="image/svg+xml"
      ></object>
    </div>
    <div data-aos="fade-up" class="news-background"></div>
    <!-- <object class="news-background" data="./images/news_background.svg" type="image/svg+xml"></object> -->
    <div class="custom-container">
      <div class="popular-section">
        <div class="title">熱門下注</div>
        <swiper
          data-aos="fade-up"
          class="popularSwiper"
          :modules="modules"
          :slidesPerView="3.5"
          :free-mode="true"
          :spaceBetween="30"
          :navigation="{
            nextEl: '.popular-swiper-button-next',
            prevEl: '.popular-swiper-button-prev',
          }"
        >
          <swiper-slide>
            <router-link to="/stake/hot" class="link hvr-float">
              <div class="pic" style="background-image: url()"></div>
              <div class="description">
                哈登手軟七六人敗戰罪犯, 魔術強森看不下去魔術強森看不下看不下...
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="/stake/hot" class="link hvr-float">
              <div class="pic" style="background-image: url()"></div>
              <div class="description">
                哈登手軟七六人敗戰罪犯, 魔術強森看不下去魔術強森看不下看不下...
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="/stake/hot" class="link hvr-float">
              <div class="pic" style="background-image: url()"></div>
              <div class="description">
                哈登手軟七六人敗戰罪犯, 魔術強森看不下去魔術強森看不下看不下...
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="/stake/hot" class="link hvr-float">
              <div class="pic" style="background-image: url()"></div>
              <div class="description">
                哈登手軟七六人敗戰罪犯, 魔術強森看不下去魔術強森看不下看不下...
              </div>
            </router-link>
          </swiper-slide>
          <div class="popular-swiper-button-prev swiper-button-prev">
            <i class="fa-solid fa-circle-chevron-left"></i>
          </div>
          <div class="popular-swiper-button-next swiper-button-next">
            <i class="fa-solid fa-circle-chevron-right"></i>
          </div>
        </swiper>
      </div>
      <div class="news-section">
        <div class="title">新聞版</div>
        <swiper
          data-aos="fade-up"
          class="newsSwiper"
          :modules="modules"
          :slidesPerView="3.5"
          :free-mode="true"
          :spaceBetween="30"
          :navigation="{
            nextEl: '.news-swiper-button-next',
            prevEl: '.news-swiper-button-prev',
          }"
        >
          <swiper-slide>
            <router-link to="/stake/news_list" class="link hvr-float">
              <img src="" alt="" />
              <div class="pic" style="background-image: url()"></div>
              <div class="tag">
                <span>幣圈新聞</span>
              </div>
              <div class="description">
                穩定幣暴跌拖累比特幣！什麼是穩定穩定幣暴跌...
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="/stake/news_list" class="link hvr-float">
              <img src="" alt="" />
              <div class="pic" style="background-image: url()"></div>
              <div class="tag">
                <span>幣圈新聞</span>
              </div>
              <div class="description">
                穩定幣暴跌拖累比特幣！什麼是穩定穩定幣暴跌...
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="/stake/news_list" class="link hvr-float">
              <img src="" alt="" />
              <div class="pic" style="background-image: url()"></div>
              <div class="tag">
                <span>幣圈新聞</span>
              </div>
              <div class="description">
                穩定幣暴跌拖累比特幣！什麼是穩定穩定幣暴跌...
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="/stake/news_list" class="link hvr-float">
              <img src="" alt="" />
              <div class="pic" style="background-image: url()"></div>
              <div class="tag">
                <span>幣圈新聞</span>
              </div>
              <div class="description">
                穩定幣暴跌拖累比特幣！什麼是穩定穩定幣暴跌...
              </div>
            </router-link>
          </swiper-slide>
          <div class="news-swiper-button-prev swiper-button-prev">
            <i class="fa-solid fa-circle-chevron-left"></i>
          </div>
          <div class="news-swiper-button-next swiper-button-next">
            <i class="fa-solid fa-circle-chevron-right"></i>
          </div>
        </swiper>
      </div>
    </div>
  </section>
</template>
  
<style src="../../assets/css/index.css" scoped></style>
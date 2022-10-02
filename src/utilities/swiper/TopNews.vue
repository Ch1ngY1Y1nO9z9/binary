<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

const modules = [Navigation];
</script>

<template>
  <div class="topnews">
    <div class="custom-container c-1272 p-150">
      <swiper
        class="newsSwiper"
        :modules="modules"
        :slidesPerView="3"
        :spaceBetween="24"
        :navigation="{
          nextEl: `.topnews-swiper-button-next`,
          prevEl: `.topnews-swiper-button-prev`,
        }"
      >
        <swiper-slide>
          <a href="./content.html" class="link hvr-float">
            <div class="pic" style="background-image: url()"></div>
            <div class="description">
              <div class="tag">
                <span>三立新聞</span>
              </div>
              <div class="content">
                一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十......
              </div>
              <div class="time">3分鐘前</div>
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="./content.html" class="link hvr-float">
            <div class="pic" style="background-image: url()"></div>
            <div class="description">
              <div class="tag">
                <span>三立新聞</span>
              </div>
              <div class="content">
                一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十......
              </div>
              <div class="time">3分鐘前</div>
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="./content.html" class="link hvr-float">
            <div class="pic" style="background-image: url()"></div>
            <div class="description">
              <div class="tag">
                <span>三立新聞</span>
              </div>
              <div class="content">
                一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十......
              </div>
              <div class="time">3分鐘前</div>
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="./content.html" class="link hvr-float">
            <div class="pic" style="background-image: url()"></div>
            <div class="description">
              <div class="tag">
                <span>三立新聞</span>
              </div>
              <div class="content">
                一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十......
              </div>
              <div class="time">3分鐘前</div>
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="./content.html" class="link hvr-float">
            <div class="pic" style="background-image: url()"></div>
            <div class="description">
              <div class="tag">
                <span>三立新聞</span>
              </div>
              <div class="content">
                一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十......
              </div>
              <div class="time">3分鐘前</div>
            </div>
          </a>
        </swiper-slide>
      </swiper>
      <div class="topnews-swiper-button-prev swiper-button-prev">
        <i class="fa-solid fa-circle-chevron-left"></i>
      </div>
      <div class="topnews-swiper-button-next swiper-button-next">
        <i class="fa-solid fa-circle-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="../../assets/css/utilities/topnews.scss" scoped></style>
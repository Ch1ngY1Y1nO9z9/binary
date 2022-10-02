<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
import { defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const modules = [Navigation, Pagination];
</script>

<template>
  <div class="swiper-section" :class="props.name">
    <div class="custom-container c-1575">
      <div class="section-title">
        <span>{{ title }}</span>
        <router-link to="/news/type" class="more">更多新聞</router-link>
      </div>
      <div class="news-swiper">
        <swiper
          class="newsSwiper"
          :modules="modules"
          :slidesPerView="3"
          :spaceBetween="24"
          :navigation="{
            nextEl: `.${name}-swiper-button-next`,
            prevEl: `.${name}-swiper-button-prev`,
          }"
        >
          <swiper-slide>
            <router-link to="/news/type/content" class="link hvr-float">
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
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="/news/type/content" class="link hvr-float">
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
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="/news/type/content" class="link hvr-float">
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
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="/news/type/content" class="link hvr-float">
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
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="/news/type/content" class="link hvr-float">
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
            </router-link>
          </swiper-slide>
        </swiper>
        <div class='swiper-button-prev' :class="props.name+'-swiper-button-prev'">
          <i class="fa-solid fa-circle-chevron-left"></i>
        </div>
        <div class="swiper-button-next" :class="props.name+'-swiper-button-next'">
          <i class="fa-solid fa-circle-chevron-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="../../assets/css/utilities/swiper-section.scss" scoped></style>
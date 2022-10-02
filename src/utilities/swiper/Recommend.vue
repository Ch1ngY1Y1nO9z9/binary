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
  <div class="recommend">
    <div class="custom-container">
      <swiper
        class="recommendSwiper"
        :slidePerView="'auto'"
        :initialSlide="0"
        :navigation="{
          nextEl: '.recommend-swiper-button-next',
          prevEl: '.recommend-swiper-button-prev',
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
        <swiper-slide class="recommend-card">
          <div class="news-picture" style="background-image: url('')">
            <div class="mask">
              <div class="title">你覺得一加一會等於二嗎?</div>
              <div class="data">
                <div class="left">
                  <div class="participate">
                    <i class="fa-solid fa-users"></i>
                    <span class="number"> 21,566 </span>
                  </div>
                  <div class="bar">
                    <div class="green-bar">贊成: 20,000</div>
                    <div class="red-bar">反對: 1,566</div>
                  </div>
                </div>
                <div class="right">
                  <div class="remain">
                    剩餘 00<span class="date">時</span> 11<span class="date"
                      >分</span
                    >
                    50<span class="date">秒</span>
                  </div>
                  <router-link to="/stake/order" class="btn">
                    前往下注
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="recommend-card">
          <div class="news-picture" style="background-image: url('')">
            <div class="mask">
              <div class="title">你覺得一加一會等於二嗎?</div>
              <div class="data">
                <div class="left">
                  <div class="participate">
                    <i class="fa-solid fa-users"></i>
                    <span class="number"> 21,566 </span>
                  </div>
                  <div class="bar">
                    <div class="green-bar">贊成: 20,000</div>
                    <div class="red-bar">反對: 1,566</div>
                  </div>
                </div>
                <div class="right">
                  <div class="remain">
                    剩餘 00<span class="date">時</span> 11<span class="date"
                      >分</span
                    >
                    50<span class="date">秒</span>
                  </div>
                  <router-link to="/stake/order" class="btn">
                    前往下注
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="recommend-card">
          <div class="news-picture" style="background-image: url('')">
            <div class="mask">
              <div class="title">你覺得一加一會等於二嗎?</div>
              <div class="data">
                <div class="left">
                  <div class="participate">
                    <i class="fa-solid fa-users"></i>
                    <span class="number"> 21,566 </span>
                  </div>
                  <div class="bar">
                    <div class="green-bar">贊成: 20,000</div>
                    <div class="red-bar">反對: 1,566</div>
                  </div>
                </div>
                <div class="right">
                  <div class="remain">
                    剩餘 00<span class="date">時</span> 11<span class="date"
                      >分</span
                    >
                    50<span class="date">秒</span>
                  </div>
                  <router-link to="/stake/order" class="btn">
                    前往下注
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="recommend-swiper-button-prev swiper-button-prev">
          <i class="fa-solid fa-circle-chevron-left"></i>
        </div>
        <div class="recommend-swiper-button-next swiper-button-next">
          <i class="fa-solid fa-circle-chevron-right"></i>
        </div>
      </swiper>
      <!-- <div class="swiper recommendSwiper swiper-h">
        <div class="swiper-wrapper">
          <div class="recommend-card">
            <div class="news-picture" style="background-image: url('')">
              <div class="mask">
                <div class="title">你覺得一加一會等於二嗎?</div>
                <div class="data">
                  <div class="left">
                    <div class="participate">
                      <i class="fa-solid fa-users"></i>
                      <span class="number"> 21,566 </span>
                    </div>
                    <div class="bar">
                      <div class="green-bar">贊成: 20,000</div>
                      <div class="red-bar">反對: 1,566</div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="remain">
                      剩餘 00<span class="date">時</span> 11<span class="date"
                        >分</span
                      >
                      50<span class="date">秒</span>
                    </div>
                    <router-link to="/stake/order" class="btn">
                      前往下注
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="recommend-card">
            <div class="news-picture" style="background-image: url('')">
              <div class="mask">
                <div class="title">你覺得一加一會等於二嗎?</div>
                <div class="data">
                  <div class="left">
                    <div class="participate">
                      <i class="fa-solid fa-users"></i>
                      <span class="number"> 21,566 </span>
                    </div>
                    <div class="bar">
                      <div class="green-bar">贊成: 20,000</div>
                      <div class="red-bar">反對: 1,566</div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="remain">
                      剩餘 00<span class="date">時</span> 11<span class="date"
                        >分</span
                      >
                      50<span class="date">秒</span>
                    </div>
                    <router-link to="/stake/order" class="btn">
                      前往下注
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="recommend-card">
            <div class="news-picture" style="background-image: url('')">
              <div class="mask">
                <div class="title">你覺得一加一會等於二嗎?</div>
                <div class="data">
                  <div class="left">
                    <div class="participate">
                      <i class="fa-solid fa-users"></i>
                      <span class="number"> 21,566 </span>
                    </div>
                    <div class="bar">
                      <div class="green-bar">贊成: 20,000</div>
                      <div class="red-bar">反對: 1,566</div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="remain">
                      剩餘 00<span class="date">時</span> 11<span class="date"
                        >分</span
                      >
                      50<span class="date">秒</span>
                    </div>
                    <router-link to="/stake/order" class="btn">
                      前往下注
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="recommend-swiper-button-prev swiper-button-prev">
          <i class="fa-solid fa-circle-chevron-left"></i>
        </div>
        <div class="recommend-swiper-button-next swiper-button-next">
          <i class="fa-solid fa-circle-chevron-right"></i>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" src="../../assets/css/utilities/recommend.scss" scoped></style>
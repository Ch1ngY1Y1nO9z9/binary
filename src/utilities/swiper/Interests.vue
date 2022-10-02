<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

const modules = [Navigation];
</script>

<template>
  <div class="interests">
    <div class="custom-container c-1272">
      <div class="section-title">
        <span class="icon">
          <i class="fa-solid fa-thumbs-up"></i>
        </span>
        推薦
      </div>

      <swiper
        class="interestsSwiper"
        :modules="modules"
        :slidesPerView="3"
        :spaceBetween="24"
        :navigation="{
          nextEl: `.interests-swiper-button-next`,
          prevEl: `.interests-swiper-button-prev`,
        }"
      >
        <swiper-slide>
          <router-link to="/stake/order" class="link hvr-float">
            <div class="pic">
              <img src="" alt="" />
            </div>
            <div class="description">
              <div class="tags">
                <div class="tag">如果四字</div>
                <div class="tag">再多一個</div>
                <div class="viewer">
                  <span class="icon">
                    <i class="fa-solid fa-users"></i>
                  </span>
                  21,566
                </div>
              </div>
              <div class="subtitle">美聯準會公布升息預測</div>
              <div class="title">你認為九月會公布升息嗎?</div>
              <div class="bars">
                <div class="bar-left" style="width: 66.6%">贊成: 20,000</div>
                <div class="bar-right">反對: 1,566</div>
              </div>
              <div class="remain">
                剩餘 30<span class="date">天</span> 00<span class="date"
                  >時</span
                >
                11<span class="date">分</span> 50<span class="date">秒</span>
              </div>
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/stake/order" class="link hvr-float">
            <div class="pic">
              <img src="" alt="" />
            </div>
            <div class="description">
              <div class="tags">
                <div class="tag">如果四字</div>
                <div class="viewer">
                  <span class="icon">
                    <i class="fa-solid fa-users"></i>
                  </span>
                  21,566
                </div>
              </div>
              <div class="subtitle">美聯準會公布升息預測</div>
              <div class="title">你認為九月會公布升息嗎?</div>
              <div class="award">獎金累積: <span>168,666,666</span></div>
              <div class="remain">
                剩餘 30<span class="date">天</span> 00<span class="date"
                  >時</span
                >
                11<span class="date">分</span> 50<span class="date">秒</span>
              </div>
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/stake/order" class="link hvr-float">
            <div class="pic">
              <img src="" alt="" />
            </div>
            <div class="description">
              <div class="tags">
                <div class="tag">如果四字</div>
                <div class="tag">再多一個</div>
                <div class="viewer">
                  <span class="icon">
                    <i class="fa-solid fa-users"></i>
                  </span>
                  21,566
                </div>
              </div>
              <div class="subtitle">美聯準會公布升息預測</div>
              <div class="title">你認為九月會公布升息嗎?</div>
              <div class="bars">
                <div class="bar-left" style="width: 66.6%">贊成: 20,000</div>
                <div class="bar-right">反對: 1,566</div>
              </div>
              <div class="remain">
                剩餘 30<span class="date">天</span> 00<span class="date"
                  >時</span
                >
                11<span class="date">分</span> 50<span class="date">秒</span>
              </div>
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/stake/order" class="link hvr-float">
            <div class="pic">
              <img src="" alt="" />
            </div>
            <div class="description">
              <div class="tags">
                <div class="tag">如果四字</div>
                <div class="viewer">
                  <span class="icon">
                    <i class="fa-solid fa-users"></i>
                  </span>
                  21,566
                </div>
              </div>
              <div class="subtitle">美聯準會公布升息預測</div>
              <div class="title">你認為九月會公布升息嗎?</div>
              <div class="award">獎金累積: <span>168,666,666</span></div>
              <div class="remain">
                剩餘 30<span class="date">天</span> 00<span class="date"
                  >時</span
                >
                11<span class="date">分</span> 50<span class="date">秒</span>
              </div>
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/stake/order" class="link hvr-float">
            <div class="pic">
              <img src="" alt="" />
            </div>
            <div class="description">
              <div class="tags">
                <div class="tag">如果四字</div>
                <div class="tag">再多一個</div>
                <div class="viewer">
                  <span class="icon">
                    <i class="fa-solid fa-users"></i>
                  </span>
                  21,566
                </div>
              </div>
              <div class="subtitle">美聯準會公布升息預測</div>
              <div class="title">你認為九月會公布升息嗎?</div>
              <div class="bars">
                <div class="bar-left" style="width: 66.6%">贊成: 20,000</div>
                <div class="bar-right">反對: 1,566</div>
              </div>
              <div class="remain">
                剩餘 30<span class="date">天</span> 00<span class="date"
                  >時</span
                >
                11<span class="date">分</span> 50<span class="date">秒</span>
              </div>
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/stake/order" class="link hvr-float">
            <div class="pic">
              <img src="" alt="" />
            </div>
            <div class="description">
              <div class="tags">
                <div class="tag">如果四字</div>
                <div class="viewer">
                  <span class="icon">
                    <i class="fa-solid fa-users"></i>
                  </span>
                  21,566
                </div>
              </div>
              <div class="subtitle">美聯準會公布升息預測</div>
              <div class="title">你認為九月會公布升息嗎?</div>
              <div class="award">獎金累積: <span>168,666,666</span></div>
              <div class="remain">
                剩餘 30<span class="date">天</span> 00<span class="date"
                  >時</span
                >
                11<span class="date">分</span> 50<span class="date">秒</span>
              </div>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
      <div class="interests-swiper-button-prev swiper-button-prev">
        <i class="fa-solid fa-circle-chevron-left"></i>
      </div>
      <div class="interests-swiper-button-next swiper-button-next">
        <i class="fa-solid fa-circle-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="../../assets/css/utilities/interests.scss" scoped></style>
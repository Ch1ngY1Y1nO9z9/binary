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
        <router-link to="/stake" class="more">了解更多</router-link>
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
          <swiper-slide class="swiper-slide">
            <router-link to="/stake/order/id" class="link hvr-float">
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
                <div class="remain">剩餘 00:00:11:50</div>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <router-link to="/stake/order/id" class="link hvr-float">
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
                <div class="remain">剩餘 00:00:11:50</div>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <router-link to="/stake/order/id" class="link hvr-float">
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
                <div class="remain">剩餘 00:00:11:50</div>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <router-link to="/stake/order/id" class="link hvr-float">
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
                <div class="remain">剩餘 00:00:11:50</div>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <router-link to="/stake/order/id" class="link hvr-float">
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
                <div class="remain">剩餘 00:00:11:50</div>
              </div>
            </router-link>
          </swiper-slide>
        </swiper>
        <div
          class="swiper-button-prev"
          :class="props.name + '-swiper-button-prev'"
        >
          <i class="fa-solid fa-circle-chevron-left"></i>
        </div>
        <div
          class="swiper-button-next"
          :class="props.name + '-swiper-button-next'"
        >
          <i class="fa-solid fa-circle-chevron-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>
    
<style lang="scss" src="../../assets/css/utilities/swiper-section.scss" scoped></style>
<style lang="scss" src="../../assets/css/stake/stake.scss" scoped></style>
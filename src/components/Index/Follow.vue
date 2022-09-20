<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";

const modules = [Navigation, Pagination];

const IntroSwiperOptions = {
  pagination: {
    el: ".intro-swiper-pagination",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      return "0" + current + "/" + ("0" + total);
    },
  },
  navigation: {
    nextEl: ".intro-swiper-button-next",
    prevEl: ".intro-swiper-button-prev",
  },
};

const featureSwiperOptions = {
  slidesPerView: "auto",
  navigation: {
    nextEl: ".feature-swiper-button-next",
    prevEl: ".feature-swiper-button-prev",
  },
};
</script>
      
<template>
  <section data-aos="fade-up" class="follow">
    <div class="section-title">跟單投注</div>
    <div class="custom-container c-1470">
      <div class="intro">
        <swiper
          class="introSwiper"
          :modules="modules"
          :navigation="{
            nextEl: '.intro-swiper-button-next',
            prevEl: '.intro-swiper-button-prev',
          }"
          :pagination="{
            el: '.intro-swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
              return '0' + current + '/' + ('0' + total);
            },
          }"
        >
          <swiper-slide>
            <div class="icon">
              <i class="fa-solid fa-chart-line"></i>
            </div>
            <div class="title">複製頂級遊戲玩家投注策略輕鬆領取投注收益</div>
            <p class="context">
              根據過往交易統計<br />
              複製跟單使平均收益上漲
            </p>
            <div class="number">30.4<span>%</span></div>
            <div class="notice">
              提醒您<br />
              跟單有一定風險, 損失也可能超過您的初始投資。
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="icon">
              <i class="fa-solid fa-chart-line"></i>
            </div>
            <div class="title">
              複製頂級遊戲玩家投注策略<br />
              輕鬆領取投注收益
            </div>
            <p class="context">
              根據過往交易統計<br />
              複製跟單使平均收益上漲
            </p>
            <div class="number">30.4<span>%</span></div>
            <div class="notice">
              提醒您<br />
              跟單有一定風險, 損失也可能超過您的初始投資。
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="icon">
              <i class="fa-solid fa-chart-line"></i>
            </div>
            <div class="title">
              複製頂級遊戲玩家投注策略<br />
              輕鬆領取投注收益
            </div>
            <p class="context">
              根據過往交易統計<br />
              複製跟單使平均收益上漲
            </p>
            <div class="number">30.4<span>%</span></div>
            <div class="notice">
              提醒您<br />
              跟單有一定風險, 損失也可能超過您的初始投資。
            </div>
          </swiper-slide>
          <div class="buttons">
            <div class="intro-swiper-button-prev">
              <i class="fa-solid fa-circle-chevron-left"></i>
            </div>
            <div class="intro-swiper-pagination"></div>
            <div class="intro-swiper-button-next">
              <i class="fa-solid fa-circle-chevron-right"></i>
            </div>
          </div>
        </swiper>
      </div>
      <div class="feature">
        <swiper
          class="featureSwiper"
          :modules="modules"
          :navigation="{
            nextEl: '.feature-swiper-button-next',
            prevEl: '.feature-swiper-button-prev',
          }"
        >
          <swiper-slide>
            <div class="card">
              <div class="head">新聞精選</div>
              <hr />
              <div class="card-body">
                <div class="account">
                  <div class="avatar">
                    <img src="" alt="account avatar" />
                  </div>
                  <div class="account-detail">
                    <div class="name">Gatsby556</div>
                    <div class="skill">擅長: 幣圈投資</div>
                    <router-link to="/results/list" class="follow-btn">
                      跟單
                    </router-link>
                  </div>
                </div>
                <div class="rate">
                  <div class="total-rate">
                    <span class="wins">66<span class="per">%</span></span>
                    <br />
                    <div class="total">333/500</div>
                    <div class="title">總勝率</div>
                  </div>
                  <div class="total-rate">
                    <span class="wins">75<span class="per">%</span></span>
                    <br />
                    <div class="total">66/100</div>
                    <div class="title">近百場勝率</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="head">新聞精選</div>
              <hr />
              <div class="card-body">
                <div class="account">
                  <div class="avatar">
                    <img src="" alt="account avatar" />
                  </div>
                  <div class="account-detail">
                    <div class="name">Gatsby556</div>
                    <div class="skill">擅長: 幣圈投資</div>
                    <router-link to="/results/list" class="follow-btn">
                      跟單
                    </router-link>
                  </div>
                </div>
                <div class="rate">
                  <div class="total-rate">
                    <span class="wins">66<span class="per">%</span></span>
                    <br />
                    <div class="total">333/500</div>
                    <div class="title">總勝率</div>
                  </div>
                  <div class="total-rate">
                    <span class="wins">75<span class="per">%</span></span>
                    <br />
                    <div class="total">66/100</div>
                    <div class="title">近百場勝率</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="head">新聞精選</div>
              <hr />
              <div class="card-body">
                <div class="account">
                  <div class="avatar">
                    <img src="" alt="account avatar" />
                  </div>
                  <div class="account-detail">
                    <div class="name">Gatsby556</div>
                    <div class="skill">擅長: 幣圈投資</div>
                    <router-link to="/results/list" class="follow-btn">
                      跟單
                    </router-link>
                  </div>
                </div>
                <div class="rate">
                  <div class="total-rate">
                    <span class="wins">66<span class="per">%</span></span>
                    <br />
                    <div class="total">333/500</div>
                    <div class="title">總勝率</div>
                  </div>
                  <div class="total-rate">
                    <span class="wins">75<span class="per">%</span></span>
                    <br />
                    <div class="total">66/100</div>
                    <div class="title">近百場勝率</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="head">新聞精選</div>
              <hr />
              <div class="card-body">
                <div class="account">
                  <div class="avatar">
                    <img src="" alt="account avatar" />
                  </div>
                  <div class="account-detail">
                    <div class="name">Gatsby556</div>
                    <div class="skill">擅長: 幣圈投資</div>
                    <router-link to="/results/list" class="follow-btn">
                      跟單
                    </router-link>
                  </div>
                </div>
                <div class="rate">
                  <div class="total-rate">
                    <span class="wins">66<span class="per">%</span></span>
                    <br />
                    <div class="total">333/500</div>
                    <div class="title">總勝率</div>
                  </div>
                  <div class="total-rate">
                    <span class="wins">75<span class="per">%</span></span>
                    <br />
                    <div class="total">66/100</div>
                    <div class="title">近百場勝率</div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <div class="head">體育精選</div>
              <hr />
              <div class="card-body">
                <div class="account">
                  <div class="avatar">
                    <img src="" alt="account avatar" />
                  </div>
                  <div class="account-detail">
                    <div class="name">Gatsby556</div>
                    <div class="skill">擅長: 幣圈投資</div>
                    <router-link to="/results/list" class="follow-btn">
                      跟單
                    </router-link>
                  </div>
                </div>
                <div class="rate">
                  <div class="total-rate">
                    <span class="wins">66<span class="per">%</span></span>
                    <br />
                    <div class="total">333/500</div>
                    <div class="title">總勝率</div>
                  </div>
                  <div class="total-rate">
                    <span class="wins">75<span class="per">%</span></span>
                    <br />
                    <div class="total">66/100</div>
                    <div class="title">近百場勝率</div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="feature-swiper-button-prev swiper-button-prev">
          <i class="fa-solid fa-circle-chevron-left"></i>
        </div>
        <div class="feature-swiper-button-next swiper-button-next">
          <i class="fa-solid fa-circle-chevron-right"></i>
        </div>
      </div>
    </div>
  </section>
</template>
  
<style src="../../assets/css/index.css" scoped></style>
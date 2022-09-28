<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";

const modules = [Navigation, Pagination];
</script>
      
<template>
  <section class="banner">
    <div class="custom-container">
      <swiper
        class="bannerSwiper"
        :modules="modules"
        :navigation="{
          nextEl: '.banner-swiper-button-next',
          prevEl: '.banner-swiper-button-prev',
        }"
        :pagination="{
          el: '.banner-swiper-pagination',
          type: 'custom',
          renderCustom: (swiper, current, total) => {
            return '0' + current + '/' + ('0' + total);
          },
        }"
        :grabCursor="true"
      >
        <swiper-slide class="info">
          <div class="left">
            <div class="title">
              這裡是標題預定地的說<br />
              然後這是第二行
            </div>
            <router-link to="/register" class="banner-link">
              免費註冊
            </router-link>
          </div>
          <div class="right"></div>
        </swiper-slide>
        <swiper-slide class="info">
          <div class="left">
            <div class="title">複製頂級玩家遊戲投注策略, 輕鬆領取投注收益</div>
            <div class="scription">
              根據過往交易統計, 複製跟單使平均收益上漲
            </div>
            <div class="number">30.4<span class="per">%</span></div>
          </div>
          <div class="right">
            <div class="cards type-1">
              <div class="card">
                <div class="account">
                  <div class="avatar">
                    <img src="" alt="account avatar" />
                  </div>
                  <div class="account-detail">
                    <div class="name">Gogo6699945</div>
                    <div class="skill">擅長: 幣圈投資</div>
                  </div>
                </div>
                <div class="profit">
                  <div class="number">
                    <span class="icon"
                      ><i class="fa-solid fa-arrow-up"></i
                    ></span>
                    49<span class="pre">%</span>
                  </div>
                </div>
              </div>
              <div class="card active">
                <div class="account">
                  <div class="avatar">
                    <img src="" alt="account avatar" />
                  </div>
                  <div class="account-detail">
                    <div class="name">Gatsby556</div>
                    <div class="skill">擅長: 幣圈投資</div>
                  </div>
                </div>
                <div class="profit">
                  <div class="number">
                    <span class="icon"
                      ><i class="fa-solid fa-arrow-up"></i
                    ></span>
                    66<span class="pre">%</span>
                  </div>
                  <div class="button">近30天收益</div>
                </div>
              </div>
              <div class="card">
                <div class="account">
                  <div class="avatar">
                    <img src="" alt="account avatar" />
                  </div>
                  <div class="account-detail">
                    <div class="name">teaisgood</div>
                    <div class="skill">擅長: 幣圈投資</div>
                  </div>
                </div>
                <div class="profit">
                  <div class="number">
                    <span class="icon"
                      ><i class="fa-solid fa-arrow-up"></i
                    ></span>
                    52<span class="pre">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="info">
          <div class="left">
            <div class="title">
              成為跟單對象！<br />
              賺取下注以外的收益
            </div>
            <router-link to="/register" class="banner-link">
              免費註冊
            </router-link>
          </div>
          <div class="right shrink">
            <div class="cards type-2">
              <div class="card">
                <div class="account">
                  <div class="avatar">
                    <img src="" alt="account avatar" />
                  </div>
                  <div class="account-detail">
                    <div class="name">Gatsby556</div>
                    <div class="skill">擅長: 幣圈投資</div>
                  </div>
                </div>
                <div class="rate">
                  <div class="total-rate">
                    <div class="number">4<span class="unit">萬</span></div>
                    <div class="title">複製其交易人數</div>
                  </div>
                  <div class="total-rate">
                    <div class="number">895</div>
                    <div class="title">返佣狀況(U)</div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="account">
                  <div class="avatar">
                    <img src="" alt="account avatar" />
                  </div>
                  <div class="account-detail">
                    <div class="name">Gatsby556</div>
                    <div class="skill">擅長: 幣圈投資</div>
                  </div>
                </div>
                <div class="rate">
                  <div class="total-rate">
                    <div class="number">99<span class="unit">萬</span></div>
                    <div class="title">複製其交易人數</div>
                  </div>
                  <div class="total-rate">
                    <div class="number">5895</div>
                    <div class="title">返佣狀況(U)</div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="account">
                  <div class="avatar">
                    <img src="" alt="account avatar" />
                  </div>
                  <div class="account-detail">
                    <div class="name">Gatsby556</div>
                    <div class="skill">擅長: 幣圈投資</div>
                  </div>
                </div>
                <div class="rate">
                  <div class="total-rate">
                    <div class="number">165<span class="unit">萬</span></div>
                    <div class="title">複製其交易人數</div>
                  </div>
                  <div class="total-rate">
                    <div class="number">9<span class="unit">萬</span></div>
                    <div class="title">返佣狀況(U)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="impression simple">
          <div class="title">簡單</div>
          <div class="sub-title">簡單交易與玩法設計，使操作更加得心應手</div>
          <div class="title">交易</div>
        </swiper-slide>
        <swiper-slide class="impression fair">
          <div class="title">公平</div>
          <div class="sub-title">
            盤口交還給會員共創公平市場<br />
            創新口口搓合機制
          </div>
          <div class="title">盤口</div>
        </swiper-slide>
        <swiper-slide class="impression friendly">
          <div class="title">友善</div>
          <div class="sub-title">清楚公開分潤制度，承諾與會員一起茁壯事業</div>
          <div class="title">共好</div>
        </swiper-slide>
        <swiper-slide class="impression open">
          <div class="title">安心</div>
          <div class="sub-title">
            守護會員權利與盈利<br />清晰報表與公開獎池金額
          </div>
          <div class="title">透明</div>
        </swiper-slide>
      </swiper>
      <div class="bottom-right-buttons">
        <div class="buttons">
          <div class="banner-swiper-button-prev">
            <i class="fa-solid fa-circle-chevron-left"></i>
          </div>
          <div class="banner-swiper-pagination"></div>
          <div class="banner-swiper-button-next">
            <i class="fa-solid fa-circle-chevron-right"></i>
          </div>
        </div>
        <div class="buttons-outline"></div>
      </div>
    </div>
    <div class="banner-texture">
      <object
        class="banner-texture"
        data="./images/banner_texture.svg"
        type="image/svg+xml"
      ></object>
    </div>
  </section>
</template>
  
<style src="../../assets/css/index/banner/banner.scss" scoped></style>
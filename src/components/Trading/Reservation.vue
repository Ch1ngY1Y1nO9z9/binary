<script lang="ts" setup>
import { ref } from "vue";
import CPTitle from "/src/utilities/CPTitle.vue";
import { useRouter } from "vue-router";
const router = useRouter(); //重新導向用
</script>

<template>
  <CPTitle
    title="交易中心"
    subtitle=""
    returnText="返回交易中心"
    returnLink="/trading_center/index"
  />
  <div class="trading">
    <div class="custom-container c-624 p-200">
      <form class="form-card">
        <h2 class="title">我要預定</h2>

        <div class="board wallets single">
          <div class="title"><span class="icon"></span>出金錢包 (點)</div>
          <div class="point">200</div>
        </div>

        <div class="list order-cards">
          <div class="row">
            <div class="col">會員帳號</div>
            <div class="col">ABC123456789</div>
          </div>

          <div class="order-card">
            <div class="list">
              <div class="row">
                <div class="col">交易編號</div>
                <div class="col">ABC123456789</div>
              </div>
              <div class="row">
                <div class="col">點數</div>
                <div class="col">1,020</div>
              </div>
              <div class="row">
                <div class="col">結算時間</div>
                <div class="col">賽後10分鐘</div>
              </div>
              <div class="input-row">
                <label for="chain" class="input-label">鏈</label>
                <div class="input-col">
                  <select name="chain" id="chain" class="input-control">
                    <option value="">TRC20</option>
                    <option value="">ERC20</option>
                  </select>
                  <div class="arrow">
                    <i class="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
                <span class="msg"></span>
              </div>
              <div class="row">
                <div class="col">金額(USDT)</div>
                <div class="col">10</div>
              </div>
              <div class="row">
                <div class="col">賣家收款地址</div>
                <div class="col">
                  AABB12345666
                  <button type="button" class="copy-icon">
                    <i class="fa-solid fa-copy"></i>
                  </button>
                </div>
              </div>
              <div class="row"></div>
            </div>
          </div>
        </div>

        <div class="reservation-btns">
          <router-link to="#" class="contact btn"> 聯絡賣家 </router-link>
          <button
            type="button"
            class="confirm btn"
            @click="router.push({ path: '/trading_center/index' })"
          >
            確認預定
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" src="../../assets/css/trading/trading.scss" scoped></style>
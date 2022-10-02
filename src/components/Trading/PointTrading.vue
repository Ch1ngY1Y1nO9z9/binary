<script lang="ts" setup>
import { ref } from "vue";
import CPTitle from "/src/utilities/CPTitle.vue";

const steps = ref(1);
</script>

<template>
  <CPTitle
    title="點數交易"
    subtitle="交易中心"
    returnText="返回交易中心"
    returnLink="/trading_center/index"
  />
  <div class="trading">
    <div class="custom-container c-624 p-200">
      <template v-if="steps === 1">
        <div class="board wallets single">
          <div class="title"><span class="icon"></span>出金錢包 (點)</div>
          <div class="point">200</div>
        </div>
        <form class="form-card">
          <div class="input-row">
            <label for="point" class="input-label">販售點數</label>
            <div class="input-col">
              <input
                id="point"
                type="number"
                name="point"
                class="input-control"
                placeholder="所要販售的點數"
              />
            </div>
            <span class="msg"></span>
          </div>
          <div class="input-row">
            <label for="address" class="input-label"
              >實際扣款(點)
              <span class="ml-1 notice"
                >*販賣點數 x 1.02 (2%手續費)</span
              ></label
            >

            <div class="input-col">
              <div class="point_number">1,020</div>
            </div>
          </div>
          <div class="input-row">
            <label for="point" class="input-label">參考U數(USDT)</label>
            <div class="input-col">
              <div class="point_number">10</div>
            </div>
          </div>
          <div class="input-row">
            <label for="price" class="input-label">實賣金額(USDT)</label>
            <div class="input-col">
              <input
                id="price"
                type="number"
                name="price"
                class="input-control"
                placeholder="請輸入金額(USDT)"
              />
            </div>
            <span class="msg"></span>
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

          <div class="input-row">
            <label for="address" class="input-label">收款地址</label>
            <div class="input-col">
              <input
                id="address"
                type="text"
                name="address"
                class="input-control"
                placeholder="請輸入收款地址"
              />
            </div>
            <span class="msg"></span>
          </div>

          <div class="submit">
            <button type="button" @click="steps++">下一步</button>
          </div>
        </form>
      </template>

      <template v-if="steps === 2">
        <form class="form-card">
          <h2 class="title">交易確認</h2>
          <div class="list">
            <div class="row">
              <div class="col">販售點數</div>
              <div class="col">1,000</div>
            </div>
            <div class="row">
              <div class="col">實際扣款(點)</div>
              <div class="col">1,020</div>
            </div>
            <div class="row">
              <div class="col">參考U數(USDT)</div>
              <div class="col">10</div>
            </div>
            <div class="row">
              <div class="col">實賣金額(USDT)</div>
              <div class="col">10</div>
            </div>
            <div class="row">
              <div class="col">鏈</div>
              <div class="col">TRC</div>
            </div>
            <div class="row">
              <div class="col">收款地址</div>
              <div class="col">AABB12345666</div>
            </div>

            <div class="submit">
              <button type="button" @click="steps++">確認上架</button>
            </div>

            <div class="return-link">
              若資訊有誤, 請返回&nbsp<span @click="steps--" class="link"
                >上一頁</span
              >
            </div>
          </div>
        </form>
      </template>

      <template v-if="steps === 3">
        <div class="succes result-msg">
          <div class="icon">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <div class="msg-detail">
            <div class="title">上架成功</div>
            <div class="text">您可以在交易中心找到該操作紀錄</div>
          </div>
        </div>

        <form class="form-card" action="">
          <h2 class="title">交易確認</h2>
          <div class="list">
            <div class="row">
              <div class="col">販售點數</div>
              <div class="col">1,000</div>
            </div>
            <div class="row">
              <div class="col">實際扣款(點)</div>
              <div class="col">1,020</div>
            </div>
            <div class="row">
              <div class="col">參考U數(USDT)</div>
              <div class="col">10</div>
            </div>
            <div class="row">
              <div class="col">實賣金額(USDT)</div>
              <div class="col">10</div>
            </div>
            <div class="row">
              <div class="col">鏈</div>
              <div class="col">TRC</div>
            </div>
            <div class="row">
              <div class="col">收款地址</div>
              <div class="col">AABB12345666</div>
            </div>

            <div class="return-link">
              <router-link to="/trading_center/index" class="link btn"
                >返回首頁</router-link
              >
            </div>
          </div>
        </form>
      </template>
    </div>
  </div>
</template>

<style lang="scss" src="../../assets/css/trading/trading.scss" scoped></style>
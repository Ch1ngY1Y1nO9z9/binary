<script lang="ts" setup>
import { ref } from "vue";

const steps = ref(0);
</script>

<template>
  <div class="transfer">
    <div class="custom-container c-624 p-200">
      <div class="board wallets all">
        <div class="left">
          <div class="title"><span class="icon"></span>投注錢包 (點)</div>
          <div class="point">662,062,066</div>
        </div>
        <div class="right">
          <div class="title"><span class="icon"></span>出金錢包 (點)</div>
          <div class="point">200</div>
        </div>
      </div>
      <template v-if="steps == 0">
        <form class="form-card">
          <div class="input-row">
            <label for="purse" class="input-label">轉出錢包</label>
            <div class="input-col">
              <select name="purse" id="purse" class="input-control">
                <option value="">投注錢包</option>
                <option value="">出金錢包</option>
              </select>
              <div class="arrow">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <span class="msg"></span>
          </div>
          <div class="input-row">
            <label for="address" class="input-label">轉入會員帳號</label>

            <div class="input-col">
              <input
                id="address"
                type="text"
                name="address"
                class="input-control"
                placeholder="請輸入帳號"
              />
            </div>
            <span class="notice"
              >提醒：僅可以入金錢包→入金錢包、出金錢包→出金錢包。</span
            >
            <span class="msg"></span>
          </div>
          <div class="input-row">
            <label for="point" class="input-label">轉帳點數</label>
            <div class="input-col">
              <input
                id="point"
                type="number"
                name="point"
                class="input-control"
                placeholder="請輸入轉帳點數"
              />
            </div>
            <span class="msg"></span>
          </div>
          <div class="input-row">
            <label for="password" class="input-label"
              >錢包密碼
              <a class="link float-right" href="../login/forgotpassword.html"
                >忘記密碼?</a
              ></label
            >
            <div class="input-col">
              <input
                id="txid"
                type="password"
                name="txid"
                class="input-control"
                placeholder="請輸入錢包密碼"
              />
            </div>
            <span class="msg"></span>
          </div>

          <div class="submit">
            <button type="button" @click="steps++">下一步</button>
          </div>
        </form>
      </template>

      <template v-if="steps == 1">
        <form class="form-card">
          <h2 class="title">轉帳確認</h2>
          <p class="text">請確認您輸入的資訊是否有誤，並輸入驗證碼進行轉帳。</p>
          <div class="list">
            <div class="row">
              <div class="col">轉出錢包</div>
              <div class="col">投注錢包</div>
            </div>
            <div class="row">
              <div class="col">轉入會員帳號</div>
              <div class="col">ABC1234567489</div>
            </div>
            <div class="row">
              <div class="col">轉帳點數</div>
              <div class="col">100,000</div>
            </div>
            <div class="verification">
              <div class="captcha">
                <div class="input-row">
                  <label for="txid" class="input-label">驗證碼</label>
                  <div class="input-col">
                    <input
                      id="txid"
                      type="password"
                      name="txid"
                      class="input-control"
                      placeholder="123456"
                    />
                    <div class="captcha-code">1234</div>
                    <button type="button" class="reset-icon">
                      <i class="fa-solid fa-arrow-rotate-right"></i>
                    </button>
                  </div>
                  <span class="msg"></span>
                </div>
              </div>
              <div class="sms">
                <div class="input-row">
                  <label for="txid" class="input-label">簡訊驗證碼(6碼)</label>
                  <div class="input-col">
                    <input
                      id="txid"
                      type="password"
                      name="txid"
                      class="input-control"
                      placeholder="123456"
                    />

                    <button type="button" class="verification-btn">
                      發送驗證碼
                    </button>
                  </div>
                  <span class="msg"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="transfer_notify">
            為確保交易安全，請於<span class="time">2022/07/20 17:56</span
            >前完成交易，逾時將視同取消該筆交易。
          </div>

          <div class="submit">
            <button type="submit" @click="steps++">確認轉帳</button>
          </div>

          <div class="return-link">
            若資訊有誤, 請返回&nbsp<span @click="steps--" class="link"
              >上一頁</span
            >
          </div>
        </form>
      </template>

      <template v-if="steps == 2">
        <div class="succes result-msg">
          <div class="icon">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <div class="msg-detail">
            <div class="title">轉帳成功</div>
            <div class="text">您可以在會員功能中找到該操作紀錄</div>
          </div>
        </div>

        <div class="form-card">
          <h2 class="title">轉帳明細</h2>
          <div class="list">
            <div class="row">
              <div class="col">單號</div>
              <div class="col">123456789012345</div>
            </div>
            <div class="row">
              <div class="col">訂單時間</div>
              <div class="col">2022/07/20 17:56</div>
            </div>
            <div class="row">
              <div class="col">轉出錢包</div>
              <div class="col">ABC123456789</div>
            </div>
            <div class="row">
              <div class="col">轉出會員帳號</div>
              <div class="col">ABC1234567489</div>
            </div>
            <div class="row">
              <div class="col">轉帳點數</div>
              <div class="col">100,000</div>
            </div>

            <div class="return-link">
              <router-link to="/user_centre" class="link btn"
                >返回會員中心</router-link
              >
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style src="../../assets/css/purse/purse.scss" scoped></style>
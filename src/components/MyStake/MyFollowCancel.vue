<script lang="ts" setup>
import Title from "../../utilities/CPTitle.vue";
</script>
  
<template>
  <Title
    title="取消跟單"
    subtitle="我的注單"
    returnText="返回"
    returnLink="/myStake/myFollow"
  />
  <div class="track">
    <div class="custom-container c-1056 p-200">
      <div class="card-left-layout">
        <div class="account-card">
          <div class="account">
            <div class="avatar">
              <img src="" alt="account avatar" />
            </div>
            <div class="account-detail">
              <span class="class normal">菁英公爵</span>
              <div class="name">Gatsbyapple556</div>
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

        <form class="form-card" action="./scheduled_list.html" method="get">
          <div class="input-row">
            <label for="chain" class="input-label">跟單類型</label>
            <div class="input-col">
              <input
                id="point"
                type="text"
                name="point"
                class="input-control"
                value="每筆固定金額"
                disabled
              />
            </div>
            <span class="msg"></span>
          </div>
          <div class="input-row">
            <label for="point" class="input-label">金額(點)</label>
            <div class="input-col">
              <input
                id="point"
                type="text"
                name="point"
                class="input-control"
                value="100,000"
                disabled
              />
            </div>
            <span class="msg"></span>
          </div>
          <div class="input-row">
            <label for="chain" class="input-label">跟單場數</label>
            <div class="input-col">
              <input
                id="point"
                type="text"
                name="point"
                class="input-control"
                value="5"
                disabled
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
                id="password"
                type="password"
                name="password"
                class="input-control"
                placeholder="請輸入錢包密碼"
              />
            </div>
            <span class="msg"></span>
          </div>

          <div class="links">
            <a href="./user_list.html" class="link">取消</a>
            <button type="submit" class="link">確定</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
<style src="../../assets/css/mystake/mystake.scss" scoped></style>
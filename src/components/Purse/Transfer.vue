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
      <form class="form-card" action="./transfer-2-confirm.html" method="get">
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
          <button type="submit">下一步</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped src="../../assets/css/layout.scss"></style>
<style src="../../assets/css/purse/purse.scss" scoped></style>
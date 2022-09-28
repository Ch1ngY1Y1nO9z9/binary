<script lang="ts" setup>
</script>

<template>
  <form
    class="form-card getpassword"
  >
    <div class="input-row">
      <label for="new_password" class="input-label">新密碼</label>
      <div class="input-col">
        <input
          id="new_password"
          type="new_password"
          name="new_password"
          class="input-control"
          placeholder="請輸入密碼"
        />
      </div>
      <span class="msg"></span>
    </div>
    <div class="input-row">
      <label for="comfirm_password" class="input-label">確認新密碼</label>
      <div class="input-col">
        <input
          id="comfirm_password"
          type="comfirm_password"
          name="comfirm_password"
          class="input-control"
          placeholder="請輸入密碼"
        />
      </div>
      <span class="msg"></span>
    </div>
    <div class="submit">
      <button type="submit">送出</button>
    </div>
  </form>
</template>

<style src="../../assets/css/login/login.css" scoped></style>
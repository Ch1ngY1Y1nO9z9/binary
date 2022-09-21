<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import Input from "../../utilities/input/Input.vue";
// axios
import useAxiosFunction from "../../utilities/api/useAxiosFunction";
import sendData from "../../api/getDataFunction";

const [res, axiosFetch] = useAxiosFunction();
const steps = ref(1); //控制顯示的頁面

const data = ref({
  email: "imtestingtheregister@gmail.com",
}); //測試用資料

const validate = reactive({
  email: {
    status: false,
    msg: "請輸入正確的Email格式，如：12345@gmail.com",
  },
});

// 到下一步 先要確認填入資料是否正確
const nextStep = () => {
  // 判斷是否有欄位未填
  if (checkDataValue()) {
    alert("請填寫Email");
    return false;
  }

  steps.value++
}

// 發送資料
const formSubmit = () => {
  let rawData = {
    email: data.value.email,
  };

  //   無法使用暫時關著
  //   axiosFetch({
  //     axiosInstance: sendData,
  //     method: "POST",
  //     url: `/auth/forgot-password`,
  //     requestConfig: {
  //       rawData,
  //     },
  //   });

  //   不管成功與否都回覆成功避免被試出註冊人
  steps.value++;
};

const change = (val: string, keyName: string) => {
  getFormColumn(val, keyName);
};

const require = (msg: string, key: string) => {
  setErrorMessage(msg, key);
};

const reset = (key: string) => {
  resetErrorMessage(key);
};

function checkValidate() {
  if (!validate.email.status) {
    return false;
  } else {
    return true;
  }
}

function checkDataValue() {
  if (data.value.email) {
    return false;
  } else {
    return true;
  }
}

function getFormColumn(val, key) {
  if (key === "email") {
    data.value.email = val;
  }
}

function setErrorMessage(msg, key) {
  if (key === "email") {
    validate.email.status = true;
    validate.email.msg = msg;
  }
}

function resetErrorMessage(key) {
  if (key === "email") {
    validate.email.status = false;
  }
}
</script>

<template>
  <div class="custom-container c-624">
    <form class="form-card getpassword" v-if="steps === 1">
      <Input
        title="Email"
        type="email"
        placeholder="請輸入註冊的Email"
        name="email"
        rules="Email"
        :model="data.email"
        :status="validate.email.status"
        :msg="validate.email.msg"
        @change="change"
        @require="require"
        @reset="reset"
      />
      <div class="submit">
        <button type="button" @click="nextStep">下一步</button>
      </div>
      <div class="links">
        <router-link to="/login" class="link">返回會員登入</router-link>
      </div>
    </form>

    <div class="form-card getpassword" v-if="steps === 2">
      <div class="confirm">
        請確認您輸入的Email是否正確，我們將寄發驗證信到以下Email。
      </div>
      <div class="check">
        <div class="text">您的Email</div>
        <div class="mail">{{ data.email }}</div>
      </div>
      <div class="submit">
        <button type="button" @click="formSubmit">寄發驗證信</button>
      </div>
      <div class="links">
        若Email有誤, 請返回&nbsp<a @click="steps--" class="link cursor-pointer"
          >上一頁</a
        >
      </div>
    </div>

    <div class="form-card getpassword" v-if="steps === 3">
      <div class="icon">
        <i class="fa-solid fa-envelope"></i>
      </div>
      <div class="confirm">
        已寄發驗證信到您的Email中，請透過網址來設定新密碼。
      </div>
      <div class="check">
        <div class="text">驗證信有效時間為30分鐘</div>
      </div>
      <div class="return">
        <router-link to="/">返回首頁</router-link>
      </div>
    </div>
  </div>
</template>

<style src="../../assets/css/layout.css" scoped></style>  
<style src="../../assets/css/login/login.scss" scoped></style>
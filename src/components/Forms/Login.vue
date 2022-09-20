<script lang="ts" setup>
import { reactive, ref, toRefs, watch } from "vue";
import { useRouter } from "vue-router";
import Input from "../../utilities/input/Input.vue";
// axios
import useAxiosFunction from "../../utilities/api/useAxiosFunction";
import sendData from "../../api/getDataFunction";
// store
import store from "../../store";
import { storeToRefs } from "pinia";

const loginStatus = store.useLoginStore();
const useUserStore = store.useUserStore();
const { user } = storeToRefs(useUserStore);

const [res, axiosFetch] = useAxiosFunction();

const router = useRouter(); //重新導向用
const buttonSwitch = ref(false); //控制按鈕disable
const data = ref({
  email: "imtestingtheregister@gmail.com",
  password: "LetMeTestThePassword123456789@@",
}); //測試用資料

const validate = reactive({
  email: {
    status: false,
    msg: "請輸入正確的Email格式，如：12345@gmail.com",
  },
  password: {
    status: false,
    msg: "此欄位不可為空!",
  },
});

// 發送資料
const formSubmit = () => {
  // 判斷是否有欄位未填
  if (checkDataValue()) {
    alert("您有欄位尚未填寫!");
    return false;
  }

  let rawData = {
    email: data.value.email,
    password: data.value.password,
  };

  axiosFetch({
    axiosInstance: sendData,
    method: "POST",
    url: `/api/auth/login`,
    requestConfig: {
      rawData,
    },
  });

  watch(
    res,
    () => {
      checkRes();
    },
    { deep: true }
  );

  function checkRes() {
    const { res: response, error, loading } = res;

    console.log(response, error, loading);

    if (loading && error) {
      // console.log("err: ", error);
      const { email, password } = error;

      if (email) {
        setErrorMessage(email[0], "email");
      } else if (password) {
        setErrorMessage(password[0], "password");
      }
    } else if (!loading && response) {
      useUserStore.storeLogin(response)
      loginStatus.userLogin()
      console.log(user)
      router.push({ path: "/user_centre" });
    } else {
      // alert('伺服器忙碌中, 請稍後再試!')
    }
  }
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
  if (!validate.email.status && !validate.password.status) {
    return false;
  } else {
    return true;
  }
}

function checkDataValue() {
  if (data.value.email && data.value.password) {
    return false;
  } else {
    return true;
  }
}

function getFormColumn(val, key) {
  if (key === "email") {
    data.value.email = val;
  } else if (key === "password") {
    data.value.password = val;
  }
}

function setErrorMessage(msg, key) {
  if (key === "email") {
    validate.email.status = true;
    validate.email.msg = msg;
  } else if (key === "password") {
    validate.password.status = true;
    validate.password.msg = msg;
  }
}

function resetErrorMessage(key) {
  if (key === "email") {
    validate.email.status = false;
  } else if (key === "password") {
    validate.password.status = false;
  }
}
</script>

<template>
  <div class="custom-container c-624">
    <form class="form-card">
      <div class="login-logo">
        <img src="/images/content-page/login-page-logo.svg" alt="" />
      </div>
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
        @reset="reset"
      />

      <Input
        title="密碼"
        type="password"
        placeholder="請輸入密碼"
        name="password"
        :model="data.password"
        :status="validate.password.status"
        :msg="validate.password.msg"
        @change="change"
        @reset="reset"
      />
      <div class="submit">
        <button type="button" @click="formSubmit" :disabled="buttonSwitch">登入</button>
      </div>
      <div class="links">
        <router-link to="/forgotpassword" class="link">忘記密碼?</router-link>
        <router-link to="/register" class="link">註冊會員</router-link>
      </div>
    </form>
  </div>
</template>

<style src="../../assets/css/layout.css" scoped></style>
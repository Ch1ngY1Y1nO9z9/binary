<script lang="ts" setup>
import { onMounted, reactive, ref, toRefs, watch } from "vue";
import { useRouter } from "vue-router";
import Input from "/src/utilities/input/Input.vue";
// axios
// import useAxiosFunction from "../../utilities/api/useAxiosFunction";
import sendData from "../../api/getDataFunction";
// store
import store from "../../store";
import { storeToRefs } from "pinia";

interface IfetchResult {
  data?: any;
}

interface IerrResult {
  code?: number;
  message?: string;
}

interface Iresult {
  data?: object;
  code?: number;
  message?: string;
}

const response = reactive({
  res: {},
  err: {},
  loading: true,
});

// const [res, axiosFetch] = useAxiosFunction();

const loginStatus = store.useLoginStore();
const useUserStore = store.useUserStore();
const { user } = storeToRefs(useUserStore);
const { login } = loginStatus;
const router = useRouter(); //重新導向用
const buttonSwitch = ref(false); //控制按鈕disable
const data = ref({
  email: "imtestingtheregister@gmail.com",
  password: "LetMeTestThePassword123456789@@",
}); //測試用資料

onMounted(()=>{
  if(login){
    router.push({ path: "/user_centre" });
  }
})

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

const axiosFetch = async (configObj: any) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj;
  try {
    response.loading = true;

    const res = await axiosInstance[method.toLowerCase()](
      url,
      requestConfig.rawData
    );
    // console.log("response: ", res)
    response.res = res;
  } catch (err: any) {
    // console.log("err: ", err.response);
    response.err = err.response;
  } finally {
    response.loading = false;
  }
};

// 發送資料
const formSubmit = async() => {
  // 判斷是否有欄位未填
  if (checkDataValue()) {
    alert("您有欄位尚未填寫!");
    return false;
  }

  let rawData = {
    email: data.value.email,
    password: data.value.password,
  };

  await axiosFetch({
    axiosInstance: sendData,
    method: "POST",
    url: `/auth/login`,
    requestConfig: {
      rawData,
    },
  });

  const { res, err , loading }: { res: IfetchResult, err:IfetchResult , loading: Boolean } = response;

  const result: Iresult = res.data;
  const error: IerrResult = err.data;

  if (!loading && error?.code === 401) {
    if(error.message == 'Unauthorized'){
      alert('請再次檢查帳號或密碼是否有輸入錯誤!');
    }
  } else if (
    !loading &&
    result.code === 200
  ) {
    useUserStore.storeLogin(result);
      loginStatus.userLogin();
      router.push({ path: "/user_centre" });
  } else {
    alert("伺服器忙碌中, 請稍後再試!");
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

function getFormColumn(val: string, key: string) {
  if (key === "email") {
    data.value.email = val;
  } else if (key === "password") {
    data.value.password = val;
  }
}

function setErrorMessage(msg: string, key: string) {
  if (key === "email") {
    validate.email.status = true;
    validate.email.msg = msg;
  } else if (key === "password") {
    validate.password.status = true;
    validate.password.msg = msg;
  }
}

function resetErrorMessage(key: string) {
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
        <button type="button" @click="formSubmit" :disabled="buttonSwitch">
          登入
        </button>
      </div>
      <div class="links">
        <router-link to="/forgotpassword" class="link">忘記密碼?</router-link>
        <router-link to="/register" class="link">註冊會員</router-link>
      </div>
    </form>
  </div>
</template>

<style src="../../assets/css/layout.css" scoped></style>  
<style src="../../assets/css/login/login.scss" scoped></style>
<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from "vue";
import { useRouter } from "vue-router";
import Input from "/src/utilities/input/Input.vue";
// axios
// import useAxiosFunction from "../../utilities/api/useAxiosFunction";
import sendData from "../../api/getDataFunction";

// 取得來自網址query的token
import routeName from "../../utilities/getRoute/getRoute";

// const [res, axiosFetch] = useAxiosFunction();
interface IfetchResult {
  data?: any;
}

interface Iresult {
  data?: object;
  code?: number;
  message?: string;
}

const response = reactive({
  res: {},
  loading: true,
});

const steps = ref(1); //控制顯示的頁面
const router = useRouter();
const token = routeName().query.token;

onMounted(() => {
  // 驅逐沒帶query的訪問
  if (!token) {
    router.push({ path: "/" });
  }
});

const data = ref({
  password: "",
  passwordConfirmation: "",
  token,
}); //測試用資料

const validate = reactive({
  password: {
    status: false,
    msg: "此欄位不可為空!",
  },
  passwordConfirmation: {
    status: false,
    msg: "密碼不符",
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
    console.log("err: ", err.response);
  } finally {
    response.loading = false;
  }
};

// 發送資料
const formSubmit = async () => {
  // 判斷是否有錯誤未修正
  if (checkValidate()) {
    alert("填寫的資料有錯誤未修正!");
    return false;
  }

  // 判斷是否有欄位未填
  if (checkDataValue()) {
    alert("請正確填寫資料!");
    return false;
  }

  let rawData = {
    password: data.value.password,
    passwordConfirmation: data.value.passwordConfirmation,
  };

  // api尚未完成 暫不啟用
  // await axiosFetch({
  //   axiosInstance: sendData,
  //   method: "POST",
  //   url: `/auth/forgot-password`,
  //   requestConfig: {
  //     rawData,
  //   },
  // });

  // const { res, loading }: { res: IfetchResult; loading: Boolean } = response;

  // const result: Iresult = res.data;

  // if (!loading && result.code === 201) {
  //   alert(result.message);
  // } else if (
  //   !loading &&
  //   !result.code &&
  //   result.message === "User successfully registered"
  // ) {
  //   steps.value++;
  // } else {
  //   console.log(res);
  //   alert("伺服器忙碌中, 請稍後再試!");
  // }
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

const checkPassword = () => {
  if (data.value.password !== data.value.passwordConfirmation) {
    setErrorMessage("密碼不符", "passwordConfirmation");
  } else {
    resetErrorMessage("password");
    resetErrorMessage("passwordConfirmation");
  }
};

const checkValidate = () => {
  if (!validate.password.status && !validate.passwordConfirmation.status) {
    return false;
  } else {
    return true;
  }
};

const checkDataValue = () => {
  if (data.value.password && data.value.passwordConfirmation) {
    return false;
  } else {
    return true;
  }
};

const getFormColumn = (val: string, key: string) => {
  if (key === "password") {
    data.value.password = val;
  } else if (key === "passwordConfirmation") {
    data.value.passwordConfirmation = val;
  }
};

const setErrorMessage = (msg: string, key: string) => {
  if (key === "password") {
    validate.password.status = true;
    validate.password.msg = msg;
  } else if (key === "passwordConfirmation") {
    validate.passwordConfirmation.status = true;
    validate.passwordConfirmation.msg = msg;
  }
};

const resetErrorMessage = (key: string) => {
  if (key === "password") {
    validate.password.status = false;
  } else if (key === "passwordConfirmation") {
    validate.passwordConfirmation.status = false;
  }
};
</script>

<template>
  <div class="custom-container c-624">
    <form class="form-card getpassword">
      <Input
        title="新密碼"
        type="password"
        placeholder="請輸入密碼"
        name="password"
        rules="Comfirmation"
        :model="data.password"
        :status="validate.password.status"
        :msg="validate.password.msg"
        @change="change"
        @require="require"
        @reset="reset"
        @checkPassword="checkPassword"
      />

      <Input
        title="確認新密碼"
        type="password"
        placeholder="請輸入新密碼"
        name="passwordConfirmation"
        rules="Comfirmation"
        :model="data.passwordConfirmation"
        :status="validate.passwordConfirmation.status"
        :msg="validate.passwordConfirmation.msg"
        @change="change"
        @require="require"
        @reset="reset"
        @checkPassword="checkPassword"
      />
      <div class="submit">
        <button type="button" @click="formSubmit">送出</button>
      </div>
    </form>
  </div>
</template>

<style src="../../assets/css/layout.css" scoped></style>  
<style src="../../assets/css/account/account.scss" scoped></style>
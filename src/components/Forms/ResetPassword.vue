<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from "vue";
import { useRouter } from "vue-router";
import Input from "/src/utilities/input/Input.vue";
// axios
import axiosFetchFunction from "../../utilities/api/useAxiosFunction";
import sendData from "../../api/getDataFunction";

// 取得來自網址query的token
import routeName from "../../utilities/getRoute/getRoute";

interface IfetchData {
  res: {
    data: object;
    message: string;
    code: number;
  };
}

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
    token: data.value.token,
  };

  // api尚未完成 暫不啟用
  const response = await axiosFetchFunction<IfetchData>({
    axiosInstance: sendData,
    method: "POST",
    url: `/auth/reset-password`,
    requestConfig: {
      rawData,
    },
  });

  const { res } = response;

  console.log(res);

  if (res.code === 401) {
    alert("重設失敗! 請再次到忘記密碼頁面申請密碼重設");
  } else if (res.code === 200) {
    alert("已成功重設密碼!");
    router.push({ path: "/login" });
  } else {
    console.log(res);
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

const checkPassword = () => {
  if (!validate.password.status) {
    if (data.value.password !== data.value.passwordConfirmation) {
      setErrorMessage("密碼不符", "passwordConfirmation");
    } else {
      reset("password");
      reset("passwordConfirmation");
    }
  } else {
    setErrorMessage("密碼未依指定格式輸入", "passwordConfirmation");
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

const passwordRuleValidate = (msgSwitch: boolean) => {
  if (msgSwitch) {
    setErrorMessage(
      "密碼長度須超過8個字元且包含大小寫英文、特殊字元符號與數字",
      "password"
    );
  } else {
    reset("password");
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
        @passwordRuleValidate="passwordRuleValidate"
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

<style src="../../assets/css/account/account.scss" scoped></style>
<script lang="ts" setup>
import { reactive, ref, toRefs, watch } from "vue";
import { useRouter } from "vue-router";
import Input from "/src/utilities/input/Input.vue";
import ValidateInput from "/src/utilities/input/ValidateInput.vue";
// axios
// import useAxiosFunction from "../../utilities/api/useAxiosFunction";
import sendData from "../../api/getDataFunction";
// const [res, axiosFetch] = useAxiosFunction();
interface IfetchResult {
  data?: any;
}

interface Iresult {
  data?: object;
  code?: number;
  message?: {
    email: [];
  }|'';
}

const response = reactive({
  res: {},
  loading: true,
});

const router = useRouter(); //重新導向用
const checkBox = ref(false); //checkBox勾選判斷
const steps = ref(1); //控制顯示的頁面
const redir = ref(false); //判斷是否導向到登入頁
const time = ref(0); //定時器
let timer: string | number | NodeJS.Timeout | null | undefined = null;
const buttonSwitch = ref(false); //控制按鈕disable
const data = ref({
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  phone: "",
  verificationCode: "666666",
  invCode: "",
}); //測試用資料

const validate = reactive({
  name: {
    status: false,
    msg: "此名稱已有使用者使用!",
  },
  email: {
    status: false,
    msg: "請輸入正確的Email格式，如：12345@gmail.com",
  },
  password: {
    status: false,
    msg: "此欄位不可為空!",
  },
  passwordConfirmation: {
    status: false,
    msg: "密碼不符",
  },
  phone: {
    status: false,
    msg: "請確認手機號碼是否正確",
  },
  verificationCode: {
    status: false,
    msg: "輸入的驗證碼有誤，請確認後再次輸入或重新發送驗證碼",
  },
  invCode: {
    status: false,
    msg: "此邀請碼不存在，請確認後再次輸入",
  },
});

const toggleCheckboxx = () => {
  checkBox.value = !checkBox.value;
};

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
  // 判斷是否勾選閱讀規章
  if (!checkBox.value) {
    alert("請先閱讀規章!");
    return false;
  }
  // 判斷是否有錯誤未修正
  if (checkValidate()) {
    alert("填寫的資料有錯誤未修正!");
    return false;
  }

  // 判斷是否有資料未填
  if (checkDataValue()) {
    alert("您有資料尚未填寫!");
    return false;
  }

  let rawData = {
    name: data.value.name,
    email: data.value.email,
    password: data.value.password,
    passwordConfirmation: data.value.passwordConfirmation,
    verificationCode: data.value.verificationCode,
  };

  await axiosFetch({
    axiosInstance: sendData,
    method: "POST",
    url: `/auth/register`,
    requestConfig: {
      rawData,
    },
  });

  const { res, loading }: { res: IfetchResult; loading: Boolean } = response;

  const result = res.data;

  if (!loading && result.code === 201) {
    // alert(result.message.email[0]);
    if (result.message.email) {
      setErrorMessage(result.message.email[0], "email");
    } else if (result.message.verificationCode) {
      setErrorMessage(result.message.verificationCode[0], "verificationCode");
    } else if (result.message.verificationCode) {
      setErrorMessage(result.message.password[0], "password");
    }
  } else if (
    !loading &&
    !result.code
  ) {
    steps.value++;

    time.value = 4;
    redir.value = true;
    timer = setInterval(countDown, 1000);
  } else {
    console.log(res);
    alert("伺服器忙碌中, 請稍後再試!");
  }
};

// 倒數器
const countDown = () => {
  if (time.value > 0) {
    time.value--;
  } else {
    // clearInterval(timer);
    buttonSwitch.value = false;
    if (redir.value) {
      redir.value = false;
      router.push({ path: "/login" });
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

const checkPassword = () => {
  if (data.value.password !== data.value.passwordConfirmation) {
    setErrorMessage("密碼不符", "passwordConfirmation");
  } else {
    resetErrorMessage("password");
    resetErrorMessage("passwordConfirmation");
  }
};

const checkValidate = () => {
  if (
    !validate.name.status &&
    !validate.email.status &&
    !validate.password.status &&
    !validate.passwordConfirmation.status &&
    !validate.phone.status &&
    !validate.verificationCode.status &&
    !validate.invCode.status
  ) {
    return false;
  } else {
    return true;
  }
};

const checkDataValue = () => {
  if (
    data.value.name &&
    data.value.email &&
    data.value.password &&
    data.value.passwordConfirmation &&
    data.value.phone &&
    data.value.verificationCode
  ) {
    return false;
  } else {
    return true;
  }
};

const getFormColumn = (val: string, key: string) => {
  if (key === "name") {
    data.value.name = val;
  } else if (key === "email") {
    data.value.email = val;
  } else if (key === "password") {
    data.value.password = val;
  } else if (key === "passwordConfirmation") {
    data.value.passwordConfirmation = val;
  } else if (key === "phone") {
    data.value.phone = val;
  } else if (key === "verificationCode") {
    data.value.verificationCode = val;
  } else if (key === "invCode") {
    data.value.invCode = val;
  }
};

const setErrorMessage = (msg: string, key: string) => {
  if (key === "name") {
    validate.name.status = true;
    validate.name.msg = msg;
  } else if (key === "email") {
    validate.email.status = true;
    validate.email.msg = msg;
  } else if (key === "password") {
    validate.password.status = true;
    validate.password.msg = msg;
  } else if (key === "passwordConfirmation") {
    validate.passwordConfirmation.status = true;
    validate.passwordConfirmation.msg = msg;
  } else if (key === "phone") {
    validate.phone.status = true;
    validate.phone.msg = msg;
  } else if (key === "verificationCode") {
    validate.verificationCode.status = true;
    validate.verificationCode.msg = msg;
  } else if (key === "invCode") {
    validate.invCode.status = true;
    validate.invCode.msg = msg;
  }
};

const resetErrorMessage = (key: string) => {
  if (key === "name") {
    validate.name.status = false;
  } else if (key === "email") {
    validate.email.status = false;
  } else if (key === "password") {
    validate.password.status = false;
  } else if (key === "passwordConfirmation") {
    validate.passwordConfirmation.status = false;
  } else if (key === "phone") {
    validate.phone.status = false;
  } else if (key === "verificationCode") {
    validate.verificationCode.status = false;
  } else if (key === "invCode") {
    validate.invCode.status = false;
  }
};

const sendValidateCode = () => {
  if (!data.value.phone) {
    alert("請先填寫手機號碼再點擊發送");
    return false;
  }

  let yes = confirm("發送前請再次確認電話號碼是否正確");

  if (yes) {
    buttonSwitch.value = true;
    time.value = 60;
    timer = setInterval(countDown, 1000);
    alert("簡訊驗證碼已發送, 請確認手機是否收到簡訊!");
  }
};
</script>

<template>
  <div class="custom-container c-624">
    <form class="form-card" v-if="steps === 1">
      <Input
        title="用戶名稱*"
        type="text"
        name="name"
        placeholder="輸入用戶名稱"
        :model="data.name"
        :status="validate.name.status"
        :msg="validate.name.msg"
        @change="change"
        @require="require"
        @reset="reset"
      />

      <Input
        title="Email*"
        type="email"
        placeholder="輸入Email"
        name="email"
        rules="Email"
        :model="data.email"
        :status="validate.email.status"
        :msg="validate.email.msg"
        @change="change"
        @require="require"
        @reset="reset"
      />

      <Input
        title="密碼*"
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
        title="確認密碼*"
        type="password"
        placeholder="確認密碼"
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

      <Input
        title="手機號碼*"
        type="tel"
        placeholder="輸入手機號碼"
        name="phone"
        rules="NumberOnly"
        :model="data.phone"
        :status="validate.phone.status"
        :msg="validate.phone.msg"
        @change="change"
        @require="require"
        @reset="reset"
      />

      <ValidateInput
        title="簡訊驗證碼*(6碼)"
        type="text"
        placeholder="輸入驗證碼"
        :buttonSwitch="buttonSwitch"
        name="verificationCode"
        :model="data.verificationCode"
        :status="validate.verificationCode.status"
        :msg="validate.verificationCode.msg"
        :time="time"
        @change="change"
        @require="require"
        @reset="reset"
        @sendValidateCode="sendValidateCode"
      />

      <Input
        title="邀請碼"
        type="text"
        placeholder="若您無邀請碼, 請略過此處"
        name="invCode"
        :model="data.invCode"
        :status="validate.invCode.status"
        :msg="validate.invCode.msg"
        @change="change"
      />

      <div class="input-row">
        <div class="input-col">
          <input type="checkbox" class="input-control hidden" />
          <label class="input-label terms-label">
            <span
              class="checkbox-mask"
              :class="{ clicked: checkBox }"
              @:click="toggleCheckboxx"
            >
              <i class="fa-solid fa-check"></i>
            </span>
            我已仔細閱讀 <router-link to="#">＜XXXX規章＞</router-link>
          </label>
        </div>
      </div>
      <div class="submit">
        <button type="button" @click="formSubmit">送出</button>
      </div>
      <span class="msg">您輸入有誤或未完整填寫，請確認後再次送出。</span>
      <div class="links">
        <router-link to="/login" class="link">返回會員登入</router-link>
      </div>
    </form>

    <div class="form-card register" v-if="steps === 2">
      <div class="icon success">
        <i class="fa-solid fa-circle-check"></i>
      </div>
      <div class="confirm">歡迎您的加入，快來與我們一起玩吧！</div>
      <div class="check">
        <div class="text">
          <span>{{ time }}</span> 秒後將自動返回會員登入頁面...
        </div>
      </div>
      <div class="links">
        <router-link to="/index" class="link">返回首頁</router-link>
        <router-link to="/login" class="link">會員登入</router-link>
      </div>
    </div>
  </div>
</template>

<style src="../../assets/css/layout.css" scoped></style>  
<style src="../../assets/css/login/login.scss" scoped></style>
<style lang="css" scoped>
.input-row .input-col label .checkbox-mask.clicked svg {
  display: block;
}
.input-row .input-col label .checkbox-mask svg {
  display: none;
}
</style>
<script lang="ts" setup>
import { reactive, ref, toRefs, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import Input from "/src/utilities/input/Input.vue";
import ValidateInput from "/src/utilities/input/ValidateInput.vue";
// axios
import axiosFetchFunction from "../../utilities/api/useAxiosFunction";
import sendData from "../../api/getDataFunction";
import WebsiteTerms from "../../utilities/websiteTerms.vue";
import store from "../../store";

const router = useRouter(); //重新導向用
const checkBox = ref(false); //checkBox勾選判斷
const steps = ref(1); //控制顯示的頁面
const redir = ref(false); //判斷是否導向到登入頁
const time = ref(0); //定時器
const showModal = ref(false); //Modal框顯示
let timer: string | number | NodeJS.Timeout | null | undefined = null;
const buttonSwitch = ref(false); //控制按鈕disable

const loginStatus = store.useLoginStore();

onMounted(() => {
  if (loginStatus.login) {
    router.push({ path: "/user_centre" });
  }
});

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
    msg: "",
  },
  email: {
    status: false,
    msg: "",
  },
  password: {
    status: false,
    msg: "",
  },
  passwordConfirmation: {
    status: false,
    msg: "",
  },
  phone: {
    status: false,
    msg: "",
  },
  verificationCode: {
    status: false,
    msg: "",
  },
  invCode: {
    status: false,
    msg: "",
  },
});

const toggleCheckbox = () => {
  checkBox.value = !checkBox.value;
};

interface IfetchData {
  res: {
    data: object;
    message: string;
    code: number;
  };
}

// 發送資料
const formSubmit = async () => {
  // 判斷是否有錯誤未修正
  if (checkValidate()) {
    alert("填寫的資料有錯誤未修正!");
    return false;
  }

  // 判斷是否有資料未填
  if (!checkDataValue()) {
    return false;
  }

  // 判斷是否勾選閱讀規章
  if (!checkBox.value) {
    alert("請先閱讀規章!");
    return false;
  }

  let rawData = {
    name: data.value.name,
    email: data.value.email,
    password: data.value.password,
    passwordConfirmation: data.value.passwordConfirmation,
    verificationCode: data.value.verificationCode,
    invitation_code: data.value.invCode,
  };

  const response = await axiosFetchFunction<IfetchData>({
    axiosInstance: sendData,
    method: "POST",
    url: `/auth/register`,
    requestConfig: {
      rawData,
    },
  });

  const { res } = response;

  if (res.code == 401) {
    // alert(result.message.email[0]);
    // Object.entries(res.message).forEach(([key, value]) => {
    //   setErrorMessage(value.join(", "), key);
    // });

    setErrorMessage(res.message, "invCode");
    return false;
  }

  if (res.code == 200) {
    steps.value++;
    time.value = 4;
    redir.value = true;
    timer = setInterval(countDown, 1000);
  } else {
    alert("伺服器忙碌中, 請稍後再試!");
  }

  // 結束後清空內容
  response.res = {
    data: null,
    code: 0,
    message: '',
  };
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
  let checked = 0;
  Object.entries(data.value).forEach(([key, value]) => {
    if (key != "invCode" && value.length == 0) {
      setErrorMessage("此欄位不可留空!", key);
      checked++;
    }
  });
  if (checked != 0) {
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

const validLoading = ref(false);
const axiosValidte = async (key: string) => {
  if (validate.email.status) {
    return false;
  }

  validLoading.value = true;

  const response = await axiosFetchFunction({
    axiosInstance: sendData,
    method: "GET",
    url: `/auth/account_check?email=${data.value.email}`,
    requestConfig: {},
  });

  const { res } = response;
  validLoading.value = false;

  if (res.code == 401) {
    setErrorMessage(res.message, "email");
  } else {
    reset("email");
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
        needAxios="true"
        :model="data.email"
        :status="validate.email.status"
        :msg="validate.email.msg"
        @change="change"
        @require="require"
        @reset="reset"
        @axiosValidte="axiosValidte"
        :validLoading="validLoading"
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
        @passwordRuleValidate="passwordRuleValidate"
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
        rules="ResetEveryTime"
        :model="data.invCode"
        :status="validate.invCode.status"
        :msg="validate.invCode.msg"
        @change="change"
        @reset="reset"
      />

      <div class="input-row">
        <div class="input-col">
          <input type="checkbox" class="input-control hidden" />
          <label class="input-label terms-label">
            <span
              class="checkbox-mask"
              :class="{ clicked: checkBox }"
              @:click="toggleCheckbox"
            >
              <i class="fa-solid fa-check"></i>
            </span>
            我已仔細閱讀
          </label>
          <label class="terms-label cursor-pointer" @click="showModal = true">
            ＜XXXX規章＞
          </label>
          <n-modal v-model:show="showModal">
            <n-card
              style="width: 60%"
              title="XXXX規章"
              :bordered="false"
              size="huge"
              role="dialog"
              aria-modal="true"
            >
              <WebsiteTerms />
            </n-card>
          </n-modal>
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

<style src="../../assets/css/login/login.scss" scoped></style>
<style lang="css" scoped>
.input-row .input-col label .checkbox-mask.clicked svg {
  display: block;
}
.input-row .input-col label .checkbox-mask svg {
  display: none;
}
</style>
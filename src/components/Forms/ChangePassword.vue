<script lang="ts" setup>
import { ref, reactive } from "vue";
import Input from "../../utilities/input/Input.vue";
import ValidateInput from "../../utilities/input/ValidateInput.vue";
// axios
import useAxiosFunction from "../../utilities/api/useAxiosFunction";
import sendData from "../../api/getDataFunction";
const [res, axiosFetch] = useAxiosFunction();

const time = ref(0); //定時器
const buttonSwitch = ref(true);
let setTimert = {
  timer: null,
};
const switchButton = (type) => {
  // 切換表單時重設另一邊的狀態和資料
  buttonSwitch.value = !buttonSwitch.value;

  if (type === "account") {
    account_data.value = {
      old_password: "",
      password: "",
      passwordConfirmation: "",
    };
  }

  if (type === "wallet") {
    wallet_data.value = {
      old_password: "",
      password: "",
      passwordConfirmation: "",
      verificationCode: "",
    };
  }

  Object.assign(validate, {
    old_password: {
      status: false,
      msg: "此欄位不可為空!",
    },
    password: {
      status: false,
      msg: "此欄位不可為空!",
    },
    passwordConfirmation: {
      status: false,
      msg: "密碼不符",
    },
    verificationCode: {
      status: false,
      msg: "密碼不符",
    },
  });
};

const account_data = ref({
  old_password: "",
  password: "",
  passwordConfirmation: "",
}); //測試用資料

const wallet_data = ref({
  old_password: "",
  password: "",
  passwordConfirmation: "",
  verificationCode: "",
}); //測試用資料

const validate = reactive({
  old_password: {
    status: false,
    msg: "此欄位不可為空!",
  },
  password: {
    status: false,
    msg: "此欄位不可為空!",
  },
  passwordConfirmation: {
    status: false,
    msg: "密碼不符",
  },
  verificationCode: {
    status: false,
    msg: "密碼不符",
  },
});

// 發送資料
const formSubmit = (type) => {
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

  if (type === "account") {
    let rawData = {
      old_password: account_data.value.old_password,
      password: account_data.value.password,
      passwordConfirmation: account_data.value.passwordConfirmation,
    };
  } else if (type === "wallet") {
    let rawData = {
      old_password: wallet_data.value.old_password,
      password: wallet_data.value.password,
      passwordConfirmation: wallet_data.value.passwordConfirmation,
    };
  }

  //   無法使用暫時關著
  //   axiosFetch({
  //     axiosInstance: sendData,
  //     method: "POST",
  //     url: `/api/auth/forgot-password`,
  //     requestConfig: {
  //       rawData,
  //     },
  //   });

  watch(
    res,
    () => {
      checkRes();
    },
    { deep: true }
  );
};

const checkRes = () => {
  const { res: response, error, loading } = res;

  // console.log(response, error, loading);
  window.scrollTo(0, 0);

  if (!loading && error) {
    // console.log("err: ", error);
    const { email, verificationCode } = error;

    if (email) {
      setErrorMessage(email[0], "email");
    } else if (verificationCode) {
      setErrorMessage(verificationCode[0], "verificationCode");
    }
  } else if (!loading && error && response) {
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

const checkPassword = () => {
  if (account_data.value.password !== account_data.value.passwordConfirmation) {
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
  if (
    account_data.value.old_password &&
    account_data.value.password &&
    account_data.value.passwordConfirmation
  ) {
    return false;
  } else {
    return true;
  }
};

const getFormColumn = (val: string, key: string) => {
  if (key === "old_password") {
    account_data.value.old_password = val;
  } else if (key === "password") {
    account_data.value.password = val;
  } else if (key === "passwordConfirmation") {
    account_data.value.passwordConfirmation = val;
  }
};

const setErrorMessage = (msg: string, key: string) => {
  if (key === "old_password") {
    validate.old_password.status = true;
    validate.old_password.msg = msg;
  } else if (key === "password") {
    validate.password.status = true;
    validate.password.msg = msg;
  } else if (key === "passwordConfirmation") {
    validate.passwordConfirmation.status = true;
    validate.passwordConfirmation.msg = msg;
  }
};

const resetErrorMessage = (key: string) => {
  if (key === "old_password") {
    validate.old_password.status = false;
  } else if (key === "password") {
    validate.password.status = false;
  } else if (key === "passwordConfirmation") {
    validate.passwordConfirmation.status = false;
  }
};

const sendValidateCode = () => {
  buttonSwitch.value = true;
  time.value = 60;
  setTimert.timer = setInterval(countDown, 1000);
  alert("簡訊驗證碼已發送, 請確認手機是否收到簡訊!");
};

// 倒數器
const countDown = () => {
  if (time.value > 0) {
    time.value--;
  } else {
    clearInterval(setTimert.timer);
    buttonSwitch.value = false;
    if (redir.value) {
      redir.value = false;
      router.push({ path: "/login" });
    }
  }
};

</script>

<template>
  <div class="account">
    <div class="custom-container c-624 p-150">
      <div class="tab">
        <div class="tab-options">
          <button
            class="btn-options"
            :class="{ active: buttonSwitch }"
            @click="switchButton('account')"
          >
            登入密碼
          </button>
          <button
            class="btn-options"
            :class="{ active: !buttonSwitch }"
            @click="switchButton('wallet')"
          >
            取款密碼
          </button>
        </div>
      </div>

      <form v-if="buttonSwitch" id="account-password" class="form-card">
        <p class="text">為了保護您帳戶的安全，不要隨意分享你的密碼給其他人。</p>

        <Input
          title="目前錢包密碼"
          type="password"
          placeholder="輸入目前錢包密碼"
          name="old_password"
          rules="Comfirmation"
          :model="account_data.old_password"
          :status="validate.old_password.status"
          :msg="validate.old_password.msg"
          @change="change"
          @require="require"
          @reset="reset"
        />

        <Input
          title="新錢包密碼"
          type="password"
          placeholder="輸入新錢包密碼"
          name="password"
          rules="Comfirmation"
          :model="account_data.password"
          :status="validate.password.status"
          :msg="validate.password.msg"
          @change="change"
          @require="require"
          @reset="reset"
          @checkPassword="checkPassword"
        />

        <Input
          title="確認新錢包密碼"
          type="password"
          placeholder="確認新錢包密碼"
          name="passwordConfirmation"
          rules="Comfirmation"
          :model="account_data.passwordConfirmation"
          :status="validate.passwordConfirmation.status"
          :msg="validate.passwordConfirmation.msg"
          @change="change"
          @require="require"
          @reset="reset"
          @checkPassword="checkPassword"
        />

        <div class="links">
          <router-link to="/user_centre" class="link">取消</router-link>
          <button type="button" class="link" @click="formSubmit('account')">
            儲存
          </button>
        </div>

        <div class="links">
          <router-link to="/forgotpassword" class="return"
            >忘記密碼?</router-link
          >
        </div>
      </form>

      <form v-if="!buttonSwitch" id="stake-password" class="form-card">
        <p class="text">為了保護您帳戶的安全，不要隨意分享你的密碼給其他人。</p>

        <Input
          title="目前錢包密碼"
          type="password"
          placeholder="輸入目前錢包密碼"
          name="old_password"
          rules="Comfirmation"
          :model="wallet_data.old_password"
          :status="validate.old_password.status"
          :msg="validate.old_password.msg"
          @change="change"
          @require="require"
          @reset="reset"
        />

        <Input
          title="新錢包密碼"
          type="password"
          placeholder="輸入新錢包密碼"
          name="password"
          rules="Comfirmation"
          :model="wallet_data.password"
          :status="validate.password.status"
          :msg="validate.password.msg"
          @change="change"
          @require="require"
          @reset="reset"
          @checkPassword="checkPassword"
        />

        <Input
          title="確認新錢包密碼"
          type="password"
          placeholder="確認新錢包密碼"
          name="passwordConfirmation"
          rules="Comfirmation"
          :model="wallet_data.passwordConfirmation"
          :status="validate.passwordConfirmation.status"
          :msg="validate.passwordConfirmation.msg"
          @change="change"
          @require="require"
          @reset="reset"
          @checkPassword="checkPassword"
        />

        <ValidateInput
          title="簡訊驗證碼(6碼)"
          type="text"
          placeholder="輸入驗證碼"
          :buttonSwitch="buttonSwitch"
          name="verificationCode"
          :model="wallet_data.verificationCode"
          :status="validate.verificationCode.status"
          :msg="validate.verificationCode.msg"
          :time="time"
          @change="change"
          @require="require"
          @reset="reset"
          @sendValidateCode="sendValidateCode"
        />

        <div class="links">
          <router-link to="/user_centre" class="link">取消</router-link>
          <button type="button" class="link" @click="formSubmit('wallet')">
            儲存
          </button>
        </div>

        <div class="links">
          <router-link to="/forgotpassword" class="return"
            >忘記密碼?</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>
  
<style src="../../assets/css/account/account.scss" scoped></style>
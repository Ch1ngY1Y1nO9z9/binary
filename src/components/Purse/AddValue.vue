<script lang="ts" setup>
import { reactive, ref } from "vue";
import Input from "../../utilities/input/Input.vue";
import Select from "../../utilities/input/Select.vue";

// axios
import useAxiosFunction from "../../utilities/api/useAxiosFunction";
import sendData from "../../api/getDataFunction";

const [res, axiosFetch] = useAxiosFunction();
const steps = ref(1); //控制顯示的頁面

const data = ref({
  txid: "",
  txtype: "",
  from_address: "",
  password: "",
  import_amount: '0',
}); //預設資料

const chainOptions = [
  {
    value: "TRC20",
  },
  {
    value: "ERC20",
  },
];

const validate = reactive({
  txid: {
    status: false,
    msg: "此欄位不可為空!",
  },
  from_address: {
    status: false,
    msg: "此欄位不可為空!",
  },
  password: {
    status: false,
    msg: "此欄位不可為空",
  },
  import_amount: {
    status: false,
    msg: "此欄位不可為空!",
  },
});

// 發送資料
const formSubmit = () => {
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
    txid: data.value.txid,
    txtype: data.value.txtype,
    from_address: data.value.from_address,
    password: data.value.password,
    import_amount: data.value.import_amount,
  };

  axiosFetch({
    axiosInstance: sendData,
    method: "POST",
    url: `/api/auth/register`,
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
      steps.value++;
    } else {
      alert("伺服器忙碌中, 請稍後再試!");
    }
  };
};

const change = (val: string, keyName: string) => {
  getFormColumn(val, keyName);
  console.log(data.value)
};

const require = (msg: string, key: string) => {
  setErrorMessage(msg, key);
};

const reset = (key: string) => {
  resetErrorMessage(key);
};

const checkValidate = () => {
  if (
    !validate.txid.status &&
    !validate.from_address.status &&
    !validate.password.status &&
    !validate.import_amount.status
  ) {
    return false;
  } else {
    return true;
  }
};

const checkDataValue = () => {
  if (
    data.value.txid &&
    data.value.from_address &&
    data.value.password &&
    data.value.import_amount
  ) {
    return false;
  } else {
    return true;
  }
};

const getFormColumn = (val: string, key: string) => {
  if (key === "txid") {
    data.value.txid = val;
  } else if (key === "txtype") {
    data.value.txtype = val;
  } else if (key === "from_address") {
    data.value.from_address = val;
  } else if (key === "password") {
    data.value.password = val;
  } else if (key === "import_amount") {
    data.value.import_amount = val;
  }
};

const setErrorMessage = (msg: string, key: string) => {
  if (key === "txid") {
    validate.txid.status = true;
    validate.txid.msg = msg;
  } else if (key === "from_address") {
    validate.from_address.status = true;
    validate.from_address.msg = msg;
  } else if (key === "password") {
    validate.password.status = true;
    validate.password.msg = msg;
  } else if (key === "import_amount") {
    validate.import_amount.status = true;
    validate.import_amount.msg = msg;
  }
};

const resetErrorMessage = (key: string) => {
  if (key === "txid") {
    validate.txid.status = false;
  } else if (key === "from_address") {
    validate.from_address.status = false;
  } else if (key === "password") {
    validate.password.status = false;
  } else if (key === "import_amount") {
    validate.import_amount.status = false;
  }
};
</script>

<template>
  <div class="purchase">
    <div class="custom-container c-624 p-200">
      <form class="form-card" v-if="steps === 1">
        <Select
          title="鏈"
          name="txtype"
          :options="chainOptions"
          :model="data.txtype"
          @change="change"
        />

        <div class="input-row">
          <label for="text" class="input-label">官方收幣地址</label>
          <div class="input-col">
            <input
              type="text"
              class="input-control"
              disabled
              value="AABB12345666"
            />
            <span class="icon cursor-pointer">
              <i class="fa-solid fa-copy"></i>
            </span>
          </div>
          <span class="msg"></span>
        </div>

        <Input
          title="會員發幣地址"
          type="text"
          name="from_address"
          placeholder="請輸入發幣地址"
          :model="data.from_address"
          :status="validate.from_address.status"
          :msg="validate.from_address.msg"
          :address="true"
          @change="change"
          @require="require"
          @reset="reset"
        />

        <Input
          title="存入金額(USDT)"
          type="number"
          name="import_amount"
          placeholder="請輸入發幣地址"
          :model="data.import_amount"
          :status="validate.import_amount.status"
          :msg="validate.import_amount.msg"
          @change="change"
          @require="require"
          @reset="reset"
        />

        <Input
          title="TXID"
          type="text"
          name="txid"
          placeholder="請輸入發幣地址"
          :model="data.txid"
          :status="validate.txid.status"
          :msg="validate.txid.msg"
          @change="change"
          @require="require"
          @reset="reset"
        />

        <div class="input-row cal">
          <div class="left">
            <div class="currency">U幣</div>
            <div class="icon">
              <i class="fa-solid fa-up-down"></i>
            </div>
            <div class="point">點數</div>
          </div>
          <div class="right">
            <div class="spend">
              <span class="title">花費</span>
              {{data.import_amount}}
            </div>
            <hr />
            <div class="buy">
              <span class="title">買入</span>
              {{(parseInt(data.import_amount)*31).toFixed(3)}}
            </div>
          </div>
        </div>
        <div class="input-row">
          <label for="files" class="input-label"
            >交易明細截圖上傳
            <div class="upload-img">+</div>
          </label>
          <div class="input-col">
            <input
              id="files"
              type="file"
              name="files"
              class="input-control hidden"
              accept=".jpg,.png,.jpeg,.JPG,.PNG,.JPEG"
            />
          </div>
          <span class="msg"></span>
        </div>
        <Input
          title="錢包密碼"
          type="password"
          name="password"
          placeholder="請輸入發幣地址"
          :model="data.password"
          :status="validate.password.status"
          :msg="validate.password.msg"
          :password="true"
          @change="change"
          @require="require"
          @reset="reset"
        />
        <div class="submit">
          <button type="submit">下一步</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style src="../../assets/css/purse/purse.scss" scoped></style>
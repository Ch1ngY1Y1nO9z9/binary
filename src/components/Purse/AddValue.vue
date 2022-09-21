<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import Input from "/src/utilities/input/Input.vue";
import Select from "/src/utilities/input/Select.vue";
// axios
// import useAxiosFunction from "../../utilities/api/useAxiosFunction";
import sendData from "../../api/getDataFunction";
// const [res, axiosFetch] = useAxiosFunction();

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

interface Ifetch {
  res: {
    data?: {
      code?: number
      data?: {
        code: number
        message: string
      }
    }
  };
  err: {
    code?: number
    data?: {
      code?: number
    }
  };
  loading: boolean;
}

const response: Ifetch = reactive({
  res: {},
  err: {},
  loading: true,
});

const steps = ref(1); //控制顯示的頁面
const to_address = import.meta.env.VITE_APP_ADDRESS;
const chainOptions = [
  {
    value: "TRC20",
  },
  {
    value: "ERC20",
  },
];

const chainOptionsDefaultValue = chainOptions[1].value;

const data = ref({
  txid: "",
  txtype: chainOptionsDefaultValue,
  from_address: "",
  to_address,
  password: "",
  import_amount: "1",
}); //預設資料

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
const checkForm = () => {
  // 判斷是否有錯誤未修正
  if (checkValidate()) {
    alert("填寫的資料有錯誤未修正!");
    return false;
  } else if (checkDataValue()) {
    alert("您有資料尚未填寫!");
    return false;
  } else {
    steps.value++;
  }
};

const formSubmit = async () => {
  let rawData = {
    txid: data.value.txid,
    txtype: data.value.txtype,
    from_address: data.value.from_address,
    password: data.value.password,
    import_amount: data.value.import_amount,
  };

  await axiosFetch({
    axiosInstance: sendData,
    method: "POST",
    url: `/transaction`,
    requestConfig: {
      rawData,
    },
  });

  const { res, err, loading } = response;

  const result = res.data;
  const error = err.data;

  console.log(response);

  if (!loading && result?.code === 200) {
    alert("等待入金資料最多三筆，請稍後再試");
  } else if (!loading && result?.code === 201) {
    steps.value++;
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

const toFixed = (number: number, m: number) => {
  if (typeof number !== "number") {
    throw new Error("number不是数字");
  }
  let result = String(Math.round(Math.pow(10, m) * number) / Math.pow(10, m));
  if (result.indexOf(".") == -1) {
    if (m != 0) {
      result += ".";
      result += new Array(m + 1).join("0");
    }
  } else {
    let arr = result.split(".");
    if (arr[1].length < m) {
      arr[1] += new Array(m - arr[1].length + 1).join("0");
    }
    result = arr.join(".");
  }
  return result;
};
</script>

<template>
  <div class="purchase">
    <div class="custom-container c-624 p-200">
      <form class="form-card" v-if="steps === 1">
        <Select
          title="鏈"
          name="txtype"
          :defaultValue="chainOptionsDefaultValue"
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
              {{ data.import_amount }}
            </div>
            <hr />
            <div class="buy">
              <span class="title">買入</span>
              {{ toFixed(Number(data.import_amount) * 31, 2) }}
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
          <button type="button" @click="checkForm">下一步</button>
        </div>
      </form>

      <div class="form-card" v-if="steps === 2">
        <h2 class="title">加值確認</h2>
        <p class="text">
          請確認您輸入的資訊是否有誤，平台於確認收到款項後，自動將點數匯入您的投注錢包中。
        </p>
        <div class="list">
          <div class="row">
            <div class="col">鍊</div>
            <div class="col">{{ data.txtype }}</div>
          </div>
          <div class="row">
            <div class="col">官方收幣地址</div>
            <div class="col">{{ data.to_address }}</div>
          </div>
          <div class="row">
            <div class="col">會員發幣地址</div>
            <div class="col">{{ data.from_address }}</div>
          </div>
          <div class="row point">
            <div class="left">
              <div class="col">入金金額 (USDT)</div>
              <div class="col">
                <span class="icon">
                  <i class="fa-solid fa-up-down"></i>
                </span>
                買入點數
              </div>
            </div>
            <div class="right">
              <div class="col">{{ data.import_amount }}</div>
              <div class="col">
                {{ toFixed(Number(data.import_amount) * 31, 2) }}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">TXID</div>
            <div class="col">{{ data.txid }}</div>
          </div>
          <div class="row pic">
            <div class="col">交易明細截圖</div>
            <div class="picture">
              <img src="" alt="" />
            </div>
          </div>
          <div class="submit">
            <button type="button" @click="formSubmit">確認加值</button>
          </div>

          <div class="return-link">
            若資訊有誤, 請返回 &nbsp
            <span class="link cursor-pointer" @click="steps--">上一頁</span>
          </div>
        </div>
      </div>

      <div
        class="succes result-msg"
        v-if="!response.loading && steps === 3 && !response.err?.code"
      >
        <div class="icon">
          <i class="fa-solid fa-circle-check"></i>
        </div>
        <div class="msg-detail">
          <div class="title">加值成功</div>
          <div class="text">您可以在會員功能中找到該操作紀錄</div>
        </div>
      </div>

      <div
        class="failed result-msg"
        v-if="!response.loading && steps === 3 && response.err?.code"
      >
        <div class="icon">
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
        <div class="msg-detail">
          <div class="title">加值失敗</div>
          <div class="text">請確認資訊後，重新操作。</div>
        </div>
      </div>

      <div
        class="form-card"
        v-if="!response.loading && steps === 3 && !response.err?.code"
      >
        <h2 class="title">加值明細</h2>
        <p class="text">平台於確認收到款項後，自動將點數匯入您的投注錢包中。</p>
        <div class="list">
          <div class="row">
            <div class="col">單號</div>
            <div class="col">123456789012345</div>
          </div>
          <div class="row">
            <div class="col">訂單時間</div>
            <div class="col">2022/07/20 17:56</div>
          </div>
          <div class="row">
            <div class="col">鍊</div>
            <div class="col">TRC、ERC</div>
          </div>
          <div class="row">
            <div class="col">官方收幣地址</div>
            <div class="col">AABB12345666</div>
          </div>
          <div class="row">
            <div class="col">會員發幣地址</div>
            <div class="col">CBA987654321</div>
          </div>
          <div class="row point">
            <div class="left">
              <div class="col">入金金額 (USDT)</div>
              <div class="col">
                <span class="icon">
                  <i class="fa-solid fa-up-down"></i>
                </span>
                買入點數
              </div>
            </div>
            <div class="right">
              <div class="col">1,000</div>
              <div class="col">100,000</div>
            </div>
          </div>
          <div class="row">
            <div class="col">TXID</div>
            <div class="col">DEF987654321</div>
          </div>
          <div class="row pic">
            <div class="col">交易明細截圖</div>
            <div class="picture">
              <img src="" alt="" />
            </div>
          </div>
          <div class="submit">
            <router-link to="/user_centre">返回會員中心</router-link>
          </div>
        </div>
      </div>

      <div
        class="form-card"
        v-if="!response.loading && steps === 3 && response.err?.code"
      >
        <p class="text">這裡會需要放一些告知用戶失敗的原因嗎</p>
        <div class="links">
          <router-link to="/user_centre" class="link">返回首頁</router-link>
          <router-link to="/user_centre" class="link">會員中心</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="../../assets/css/layout.css" scoped></style>
<style src="../../assets/css/purse/purse.scss" scoped></style>
<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from "vue";
import Input from "/src/utilities/input/Input.vue";
import Select from "/src/utilities/input/Select.vue";
// axios
import useAxiosFunction from "../../utilities/api/useAxiosFunction";
import uploadFIleSetting from "../../api/fileUploadFunction";
import sendData from "../../api/getDataFunction";

import store from "../../store";

const useUserStore = store.useUserStore();
const { user } = useUserStore;

interface Idata {
  address: string;
}

interface IfetchData {
  res: {
    data: object;
    message: string;
    code: number;
  };
}

interface IresultData {
  createdAt: string;
  fromAddress: string;
  importAmount: string;
  txid: string;
  txtype: string;
}

const steps = ref(1); //控制顯示的頁面
const statusCode = ref(0);
let to_address = ref("");
const result = ref<any>({
  createdAt: "",
  fromAddress: "",
  importAmount: "",
  txid: "",
  txtype: "",
});

// 抓當前可用的入金錢包

onMounted(async () => {
  sendData.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${user.access_token}`;

  const response = await useAxiosFunction<Idata>({
    axiosInstance: sendData,
    method: "GET",
    url: "/get_wallet_import",
    requestConfig: {},
  });

  const { res } = response;

  if (res.data) {
    to_address.value = res.data.address;
  }
});
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
  image: undefined,
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
  image: {
    status: false,
    msg: "請上傳交易明細截圖!",
  },
});

// 發送資料
const checkForm = () => {
  // 判斷是否有錯誤未修正
  if (checkValidate()) {
    alert("填寫的資料有錯誤未修正!");
    return false;
  } else if (!checkDataValue()) {
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

  // 發送前在Header增加Authorization
  uploadFIleSetting.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${user.access_token}`;

  const response = await useAxiosFunction<IfetchData>({
    axiosInstance: uploadFIleSetting,
    method: "POST",
    url: `/transaction`,
    requestConfig: {
      rawData,
    },
  });

  const { res } = response;

  if (res.data) {
    result.value = res.data;
  }

  if (res.code === 201) {
    statusCode.value = 201;
  } else {
    statusCode.value = res.code;
    alert("伺服器忙碌中, 請稍後再試!");
  }

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

const checkValidate = () => {
  if (
    !validate.txid.status &&
    !validate.from_address.status &&
    !validate.password.status &&
    !validate.import_amount.status &&
    !validate.image.status
  ) {
    return false;
  } else {
    return true;
  }
};

const checkDataValue = () => {
  let checked = 0;
  Object.entries(data.value).forEach(([key, value]) => {
    if (key != "image" && value != undefined && value.length === 0) {
      setErrorMessage("此欄位不可留空!", key);
      checked++;
    }
    if (key == "image" && value == undefined) {
      console.log(key);
      setErrorMessage("請上傳交易明細的截圖!", key);
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
  } else if (key === "image") {
    validate.image.status = true;
    validate.image.msg = msg;
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

const fillInAddress = () => {
  if (user.wallet_address !== null) {
    data.value.from_address = user.wallet_address;
  }
};

const imagePreview = ref<string>("");
function pickFile(e: any) {
  var input = e.target as any;
  if (input.files && input.files[0]) {
    data.value.image = input.files[0];
    // create a new FileReader to read this image and convert to base64 format
    var reader = new FileReader();
    // Define a callback function to run, when FileReader finishes its job
    reader.onload = (e) => {
      // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
      // Read image as base64 and set to imageData
      if (e.target !== null) {
        imagePreview.value = e.target.result as string;
      }
    };
    // Start the reader job - read file as a data url (base64 format)
    reader.readAsDataURL(input.files[0]);

    validate.image.status = false;
  }
}

const changeColor = ref(false);
const copyText = ref("點擊複製");
const copyInvCode = async () => {
  changeColor.value = !changeColor.value;
  await navigator.clipboard.writeText(to_address.value);
  if (changeColor.value) {
    copyText.value = "已複製!";
  } else {
    copyText.value = "點擊複製!";
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
              :value="data.to_address"
            />

            <n-popover trigger="hover">
              <template #trigger>
                <span
                  class="icon cursor-pointer"
                  :class="{ yellow: changeColor }"
                  @mousedown="copyInvCode"
                  @mouseup="copyInvCode"
                >
                  <i class="fa-solid fa-copy"></i>
                </span>
              </template>
              {{ copyText }}
            </n-popover>
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
          @fillInAddress="fillInAddress"
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
              {{ toFixed(Number(data.import_amount) * 10, 0) }}
            </div>
          </div>
        </div>
        <div class="input-row">
          <label for="files" class="input-label"
            >交易明細截圖上傳
            <div class="upload-img cursor-pointer">+</div>
          </label>
          <div class="input-col" :class="{ error: validate.image.status }">
            <input
              id="files"
              type="file"
              class="input-control hidden"
              accept=".jpg,.png,.jpeg,.JPG,.PNG,.JPEG"
              @change="pickFile"
            />
          </div>
          <span class="msg">{{ validate.image.msg }}</span>

          <n-image
            class="mt-5"
            v-if="imagePreview.length"
            object-fit="cover"
            :src="imagePreview"
          />
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
          <div class="row flex-col">
            <div class="col">官方收幣地址</div>
            <div class="col break-words">{{ data.to_address }}</div>
          </div>
          <div class="row flex-col">
            <div class="col">會員發幣地址</div>
            <div class="col break-words">{{ data.from_address }}</div>
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
                {{ toFixed(Number(data.import_amount) * 10, 0) }}
              </div>
            </div>
          </div>
          <div class="row flex-col">
            <div class="col">TXID(交易編號)</div>
            <div class="col break-words">{{ data.txid }}</div>
          </div>
          <div class="row pic">
            <div class="col">交易明細截圖</div>
            <div class="picture h-auto">
              <n-image object-fit="cover" :src="imagePreview" />
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

      <div class="succes result-msg" v-if="steps === 3 && statusCode === 201">
        <div class="icon">
          <i class="fa-solid fa-circle-check"></i>
        </div>
        <div class="msg-detail">
          <div class="title">加值成功</div>
          <div class="text">您可以在會員功能中找到該操作紀錄</div>
        </div>
      </div>

      <div class="failed result-msg" v-if="steps === 3 && statusCode !== 201">
        <div class="icon">
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
        <div class="msg-detail">
          <div class="title">加值失敗</div>
          <div class="text">請確認資訊後，重新操作。</div>
        </div>
      </div>

      <div class="form-card" v-if="steps === 3 && statusCode === 201">
        <h2 class="title">加值明細</h2>
        <p class="text">平台於確認收到款項後，自動將點數匯入您的投注錢包中。</p>
        <div class="list">
          <div class="row">
            <div class="col">單號</div>
            <div class="col">{{ result.txid }}</div>
          </div>
          <div class="row">
            <div class="col">訂單時間</div>
            <div class="col">
              {{ new Date(result.createdAt).toLocaleString() }}
            </div>
          </div>
          <div class="row">
            <div class="col">鍊</div>
            <div class="col">{{ result.txtype }}</div>
          </div>
          <div class="row">
            <div class="col">官方收幣地址</div>
            <div class="col">{{ to_address }}</div>
          </div>
          <div class="row">
            <div class="col">會員發幣地址</div>
            <div class="col">{{ result.fromAddress }}</div>
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
              <div class="col">{{ result.importAmount }}</div>
              <div class="col">
                {{ toFixed(Number(result.importAmount) * 10, 0) }}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">TXID(交易編號)</div>
            <div class="col">{{ result.txid }}</div>
          </div>
          <div class="row pic">
            <div class="col">交易明細截圖</div>
            <div class="picture">
              <n-image class="w-full" object-fit="cover" :src="imagePreview" />
            </div>
          </div>
          <div class="submit">
            <router-link to="/user_centre">返回會員中心</router-link>
          </div>
        </div>
      </div>

      <div class="form-card" v-if="steps === 3 && statusCode !== 201">
        <p class="text">等待入金資料最多三筆，請稍後再試</p>
        <div class="links">
          <router-link to="/user_centre" class="link">返回首頁</router-link>
          <router-link to="/user_centre" class="link">會員中心</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="../../assets/css/purse/purse.scss" scoped></style>

<style lang="scss" scoped>
.n-image {
  width: 100%;
}
.n-image img {
  width: 100% !important;
}

.yellow {
  color: rgba(252, 189, 31, 1);
}

input:disabled {
  background: rgb(235, 235, 235) !important;
  color: rgb(57, 57, 57) !important;
}
</style>
<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import { storeToRefs } from "pinia";
import store from "../../store";
import { UploadFileInfo } from "naive-ui";
// axios
import useAxiosFunction from "../../utilities/api/useAxiosFunction";
import sendData from "../../api/getDataFunction";
import uploadFIleSetting from "../../api/fileUploadFunction";

import { useRouter } from "vue-router";
const router = useRouter(); //重新導向用

const useUserStore = store.useUserStore();
const { user } = storeToRefs(useUserStore);
const {
  name,
  email,
  birthday,
  country,
  city,
  wallet_address,
  gender,
  profile_photo_url: profile_photo_path,
  access_token,
  uuid
} = user.value;

// 表單預設值做v-model雙向綁定
const data = reactive({
  name,
  year: "2022",
  month: "12",
  day: "31",
  country,
  city,
  wallet_address,
  gender,
  profile_photo_path: undefined
});

const imagePreview = ref(profile_photo_path);
function pickFile(e: any) {
  var input = e.target as any;
  if (input.files && input.files[0]) {
    data.profile_photo_path = input.files[0]
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
  }
}

// 性別選擇
const genderCheckbox = ref(gender);
// 修改checkbox
const changeCheckbox = (newValue: string) => {
  genderCheckbox.value = newValue;
};

// 年月日產生器
const yearsAry: string[] = [];
const min = 1900;
const max = 2022;

for (let i = max; i > min; i--) {
  yearsAry.push(i.toString());
}

const monthAry: string[] = [
  "12",
  "11",
  "10",
  "09",
  "08",
  "07",
  "06",
  "05",
  "04",
  "03",
  "02",
  "01",
];
const dayAry = ref<string[]>([]);

const daysGenerator = (num: number) => {
  const Ary: string[] = [];
  for (let i: number = num; i > 0; i--) {
    if (i > 10) {
      Ary.push(i.toString());
    } else if (i < 10) {
      Ary.push("0" + i);
    }
  }
  dayAry.value = Ary;
};

const daysHandler = () => {
  const bigAry: string[] = ["01", "03", "05", "07", "08", "10", "12"];
  const smolAry: string[] = ["04", "06", "09", "11"];
  const leapYear: boolean = isLeap();

  if (bigAry.includes(data.month)) {
    daysGenerator(31);
  } else if (smolAry.includes(data.month)) {
    daysGenerator(30);
  } else if (leapYear) {
    daysGenerator(29);
  } else {
    daysGenerator(28);
  }
};

const isLeap = () => {
  if (
    (Number(data.year) % 4 == 0 && Number(data.year) % 100 != 0) ||
    Number(data.year) % 400 == 0
  ) {
    return true;
  }
  return false;
};

onMounted(() => {
  const setBirthdayDefault = (birthday: string) => {
    const birthdayAry = birthday.split("-");
    data.year = birthdayAry[0];
    data.month = birthdayAry[1];
    data.day = birthdayAry[2];
  };

  if (birthday) {
    setBirthdayDefault(birthday);
  }
  daysHandler();
  citiesGenerator();
});

// 國家位置與行政區域
interface Location {
  country_code: string;
  country_name: string;
  cities: string[];
}

// 國家假資料(等API)
const locationData: Location[] = [
  {
    country_code: "TW",
    country_name: "台灣",
    cities: ["台中", "台北"],
  },
  {
    country_code: "CN",
    country_name: "中國",
    cities: ["上海", "北京"],
  },
];

const currentCountry = ref<string[]>([]);
const citiesGenerator = () => {
  Object.entries(locationData).forEach(([key, value]) => {
    if (value.country_name == data.country) {
      currentCountry.value = value.cities;
    }
  });
};

// 驗證發幣地址
const lengthValidate = ref({
  status: false,
  msg: "",
});
const checkLength = () => {
  if (data.wallet_address.length === 32 || data.wallet_address.length === 42) {
    lengthValidate.value.status = false;
    lengthValidate.value.msg = "";
  } else {
    lengthValidate.value.status = true;
    lengthValidate.value.msg = "發幣地址長度只能為34碼或42碼!";
  }

  if (data.wallet_address.length === 0) {
    lengthValidate.value.status = false;
    lengthValidate.value.msg = "";
  }
};

// 驗證密碼API
const password = ref("");
const showPasswordConfirm = ref(false);
const passwordValidate = ref({
  status: false,
  msg: "",
});

const checkPassword = () => {
  if (password.value.trim().length === 0) {
    passwordValidate.value.status = true;
    passwordValidate.value.msg = "請輸入密碼";
  } else {
    passwordValidate.value.status = false;
    passwordValidate.value.msg = "";
  }
};

interface IfetchData {
  res: {
    data: object;
    message: string;
    code: number;
  };
}

const passwordCheck = async () => {

  let rawData = {
    email,
    password: password.value
  }

  // 發送前在Header增加Authorization
  sendData.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${access_token}`;

  const response = await useAxiosFunction<IfetchData>({
    axiosInstance: sendData,
    method: "POST",
    url: `/auth/password_check`,
    requestConfig: {
      rawData
    },
  });

  const { res } = response;

  if (res.code === 401) {
    passwordValidate.value.status = true;
    passwordValidate.value.msg = "密碼錯誤";
    return true;
  } else {
    return false;
  }
};

const submitForm = async () => {
  if (showPasswordConfirm.value) {
    // 檢查密碼是否有填
    await checkPassword();
    if (passwordValidate.value.status) {
      return false;
    } else {
      // 發送api確認密碼是否正確
      if (await passwordCheck()) {
        return false;
      } else {
        // 組合表單
        const rawData = {
          birthday: data.year + "-" + data.month + "-" + data.day,
          gender: data.gender,
          country: data.country,
          city: data.city,
          wallet_address: data.wallet_address,
          profile_photo_path: data.profile_photo_path,
        };

        // 發送前在Header增加Authorization
        uploadFIleSetting.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access_token}`;

        const response = await useAxiosFunction<IfetchData>({
          axiosInstance: uploadFIleSetting,
          method: "POST",
          url: `/auth/update`,
          requestConfig: {
            rawData,
          },
        });

        const { res } = response;

        if (res.code === 200) {
          // 成功則更新pinia的內容
          useUserStore.updateLogin(res);

          router.push({ path: "/account/profile" });
        }
      }
    }
  } else {
    showPasswordConfirm.value = true;
    return false;
  }
};
</script>


<template>
  <div class="account">
    <div class="custom-container c-624 p-150">
      <form class="form-card">
        <div
          class="account_pic edit error bg-center bg-cover"
          :style="`background-image: url(${imagePreview})`"
        >
          <i v-if="imagePreview == null" class="fa-solid fa-user defalut-icon"></i>
          <label class="fileUploadLabel" for="fileUpload">
            <div class="upload-icon">
              <i class="fa-solid fa-image"></i>
            </div>
          </label>

          <input
            type="file"
            accept=".jpg,.png,.JPG,.PNG,.jpeg,.JPEG"
            id="fileUpload"
            @change="pickFile"
          />
        </div>
        <div class="pic_notify">檔案建議為小於1MB的jpeg、png。</div>
        <div class="account-setting list edit">
          <div class="row">
            <div class="col">用戶編號</div>
            <div class="col">{{user.uuid}}</div>
          </div>
          <div class="row input-control">
            <div class="col">用戶名稱</div>
            <div class="input-col">
              <input type="text" v-model="data.name" />
            </div>
            <span class="msg"></span>
          </div>
          <div class="row">
            <div class="col">Email</div>
            <div class="col">{{ email }}</div>
          </div>

          <div class="row input-control">
            <div class="col">居住地</div>
            <div class="input-col error">
              <select
                class="input-control"
                v-model="data.country"
                @change="citiesGenerator"
              >
                <option
                  v-for="country in locationData"
                  :key="country.country_code"
                  :value="country.country_name"
                >
                  {{ country.country_name }}
                </option>
              </select>
              <div class="arrow">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <div class="input-col">
              <select v-model="data.city" class="input-control">
                <option
                  v-for="cities in currentCountry"
                  :key="cities"
                  :value="cities"
                >
                  {{ cities }}
                </option>
              </select>
              <div class="arrow">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <span class="msg"></span>
          </div>

          <div class="row input-control">
            <div class="col">性別</div>
            <div class="input-col">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                v-model="data.gender"
              />
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                v-model="data.gender"
              />
              <input
                type="radio"
                name="gender"
                id="other"
                value="other"
                v-model="data.gender"
              />

              <label for="male">
                <div
                  class="checkbox"
                  :class="{ selected: genderCheckbox === 'male' }"
                  @click="changeCheckbox('male')"
                >
                  <i class="fa-solid fa-square-check"></i>
                </div>
                男性
              </label>

              <label for="female">
                <div
                  class="checkbox"
                  :class="{ selected: genderCheckbox === 'female' }"
                  @click="changeCheckbox('female')"
                >
                  <i class="fa-solid fa-square-check"></i>
                </div>
                女性
              </label>
              <label for="other">
                <div
                  class="checkbox"
                  :class="{ selected: genderCheckbox === 'other' }"
                  @click="changeCheckbox('other')"
                >
                  <i class="fa-solid fa-square-check"></i>
                </div>
                其他
              </label>
            </div>
            <span class="msg"></span>
          </div>

          <div class="row input-control">
            <div class="col">生日</div>
            <div class="input-col">
              <select
                name="year"
                id="year"
                class="input-control"
                v-model="data.year"
                @change="daysHandler"
              >
                <option
                  v-for="index in yearsAry"
                  :key="'year.' + index"
                  :value="index"
                >
                  {{ index }}
                </option>
              </select>
              <div class="arrow">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <div class="input-col">
              <select
                name="month"
                id="month"
                class="input-control"
                v-model="data.month"
                @change="daysHandler"
              >
                <option
                  v-for="index in monthAry"
                  :key="'month.' + index"
                  :value="index"
                >
                  {{ index }}
                </option>
              </select>
              <div class="arrow">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <div class="input-col">
              <select
                name="day"
                id="day"
                class="input-control"
                v-model="data.day"
              >
                <option
                  v-for="index in dayAry"
                  :key="'day.' + index"
                  :value="index"
                >
                  {{ index }}
                </option>
              </select>
              <div class="arrow">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <span class="msg"></span>
          </div>

          <div class="row input-control">
            <div class="col">發幣地址</div>
            <div class="input-col" :class="{ error: lengthValidate.status }">
              <input
                type="text"
                v-model="data.wallet_address"
              />
            </div>
            <span class="msg ml-[85px]">{{ lengthValidate.msg }}</span>
          </div>

          <div class="row password-confirm" v-show="showPasswordConfirm">
            <div class="col">目前密碼</div>
            <div class="input-col" :class="{ error: passwordValidate.status }">
              <input
                type="password"
                placeholder="輸入用戶密碼"
                v-model="password"
                @keyup="checkPassword"
              />
            </div>
            <span class="msg ml-[85px]">{{ passwordValidate.msg }}</span>
            <div class="notice">
              <router-link to="/forgotpassword">忘記密碼?</router-link>
            </div>
          </div>

          <div class="links">
            <router-link to="/account/profile" class="link">取消</router-link>
            <button type="button" class="link" @click="submitForm">儲存</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style src="../../assets/css/account/account.scss" scoped></style>
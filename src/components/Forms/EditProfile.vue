<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import { storeToRefs } from "pinia";
import store from "../../store";

const useUserStore = store.useUserStore();
const { user } = storeToRefs(useUserStore);
const { name, birthday, country, city, wallet_address, gender } = user.value;
// 表單預設值做v-model雙向綁定
const data = reactive({
    name,
    birthday,
    country,
    city,
    wallet_address,
    gender
})

// 修改checkbox
const changeCheckbox = (newValue: string) => {
  genderCheckbox.value = newValue;
};

// 年月日產生器
const dateGenerator = reactive([1975, 12, 31]);
const genderCheckbox = ref(gender);

// onMounted(() => {
//   const date = birthday.split("-");
//   getBirthDaySplit(date);
// });

// const getBirthDaySplit = (date) => {
//   const years = isLeap(date[0]);
// //   const months = getMonthAry();
// //   const days = getDays();

//   return { years, months, days };
// };

// const isLeap = (year) => {
//   if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     return 1;
//   }
//   return 0;
// };
</script>


<template>
  <div class="account">
    <div class="custom-container c-624 p-150">
      <form class="form-card">
        <div class="account_pic edit error">
          <label for="fileUpload">
            <div class="upload-icon">
              <i class="fa-solid fa-image"></i>
            </div>
          </label>
          <input type="file" accept=".jpg,.png,.JPG,.PNG,.jpeg,.JPEG" name="avatar" id="fileUpload" />
        </div>
        <div class="pic_notify">檔案建議為小於1MB的JPEG、PNG。</div>
        <div class="account-setting list edit">
          <div class="row">
            <div class="col">用戶編號</div>
            <div class="col">ABC123456789</div>
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
            <div class="col">qwe12345@gmail.com</div>
          </div>

          <div class="row input-control">
            <div class="col">居住地</div>
            <div class="input-col error">
              <select v-model="data.country" class="input-control">
                <option value="台灣" selected>台灣</option>
                <option value="中國">中國</option>
              </select>
              <div class="arrow">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <div class="input-col">
              <select v-model="data.city" class="input-control">
                <option value="台中市" selected>台中市</option>
                <option value="台北市">台北市</option>
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
              <input type="radio" name="gender" id="male" value="male" v-model="data.gender"/>
              <input type="radio" name="gender" id="female" value="female" v-model="data.gender"/>
              <input type="radio" name="gender" id="other" value="other" v-model="data.gender"/>

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
              <select name="year" id="year" class="input-control">
                <option v-for="index in 2022" :key="index" :value="index">{{index}}</option>
              </select>
              <div class="arrow">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <div class="input-col">
              <select name="month" id="month" class="input-control">
                <option value="">12</option>
              </select>
              <div class="arrow">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <div class="input-col">
              <select name="day" id="day" class="input-control">
                <option value="">25</option>
              </select>
              <div class="arrow">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <span class="msg"></span>
          </div>

          <div class="row input-control">
            <div class="col">發幣地址</div>
            <div class="input-col">
              <input type="text" v-model="data.wallet_address" />
            </div>
            <span class="msg"></span>
          </div>

          <div class="row password-confirm">
            <div class="col">目前密碼</div>
            <div class="input-col">
              <input type="password" placeholder="輸入用戶密碼" />
            </div>
            <span class="msg"></span>
            <div class="notice">
              <router-link to="/forgotpassword">忘記密碼?</router-link>
            </div>
          </div>

          <div class="links">
            <router-link to="/account/profile" class="link">取消</router-link>
            <button type="submit" class="link">儲存</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style src="../../assets/css/layout.css" scoped></style>  
<style src="../../assets/css/account/account.scss" scoped></style>
<script lang="ts" setup>
// 引入寫好的axios(並非從套件來, 而是先設定好的實例)
import useAxios from "../../utilities/api/useAxios";
import apiSetting from "../../api/basicSetting";

import { storeToRefs } from "pinia";
import store from "../../store";

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
  profile_photo_url,
  invitation_code,
} = user.value;

const [response, refetch] = useAxios({
  axiosInstance: apiSetting,
  method: "GET",
  url: "/auth/user-profile",
  requestConfig: {
  },
});

// console.log(response);

// 表單打包
const formRow = [
  {
    name: "numbering",
    title: "用戶編號",
    value: "ABC123456789",
  },
  {
    name: "name",
    title: "用戶名稱",
    value: name,
  },
  {
    name: "mail",
    title: "Email",
    value: email,
  },
  {
    name: "location",
    title: "居住地",
    value: `${country} ${city}`,
  },
  {
    name: "gender",
    title: "性別",
    value: gender,
  },
  {
    name: "birthday",
    title: "生日",
    value: birthday,
  },
  {
    name: "address",
    title: "發幣地址",
    value: wallet_address,
  },
];
</script>
  
<template>
  <div class="account">
    <div class="custom-container c-624 p-150">
      <div class="form-card">
        <div class="account_pic">
          <img :src="profile_photo_url" alt="avatar" />
        </div>
        <div class="account-setting list">
          <div class="row" v-for="row in formRow" :key="row.name">
            <div class="col">
              {{ row.title }}
            </div>
            <div class="col">
              {{ row.value }}
              <span v-if="row.name === 'name'" class="class normal"
                >菁英公爵</span
              >
            </div>
            <router-link
              v-if="row.name === 'numbering'"
              to="/account/profile_edit"
              >修改個人檔案</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <style src="../../assets/css/layout.css" scoped></style>  
  <style src="../../assets/css/account/account.css" scoped></style>
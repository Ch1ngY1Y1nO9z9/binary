<script lang="ts" setup>
// 引入寫好的axios(並非從套件來, 而是先設定好的實例)
import useAxiosFunction from "../../utilities/api/useAxiosFunction";
import sendData from "../../api/getDataFunction";

import { storeToRefs } from "pinia";
import store from "../../store";
import { onMounted, ref } from "vue";

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
  access_token,
  uuid,
} = user.value;

interface IfetchData {
  res: {
    data: object;
    message: string;
    code: number;
  };
}

onMounted(async () => {
  // 發送前在Header增加Authorization
  sendData.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${access_token}`;

  const response = await useAxiosFunction<IfetchData>({
    axiosInstance: sendData,
    method: "GET",
    url: "/auth/user-profile",
    requestConfig: {},
  });

  useUserStore.updateLogin(response.res)
});

const changeColor = ref(false);
const copyText = ref("點擊複製");
const copyInvCode = async () => {
  changeColor.value = !changeColor.value;
  await navigator.clipboard.writeText(invitation_code);
  if (changeColor.value) {
    copyText.value = "已複製!";
  } else {
    copyText.value = "點擊複製!";
  }
};

// 表單打包
const formRow = [
  {
    name: "numbering",
    title: "用戶編號",
    value: uuid,
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
  {
    name: "invitation_code",
    title: "推薦碼",
    value: invitation_code,
  },
];

</script>
  
<template>
  <div class="account">
    <div class="custom-container c-624 p-150">
      <div class="form-card">
        <div class="account_pic">
          <img v-if="profile_photo_url != null" :src="profile_photo_url" alt="avatar" />
          <i v-if="profile_photo_url == null" class="fa-solid fa-user defalut-icon"></i>
        </div>
        <div class="account-setting list">
          <div
            class="row w-full"
            v-for="row in formRow"
            :key="row.name"
          >
            <div class="col">
              {{ row.title }}
            </div>
            <div class="col">
              {{ row.value }}
              <span v-if="row.name === 'name'" class="class normal"
                >菁英公爵</span
              >
            </div>
            <n-popover v-if="row.name == 'invitation_code'" trigger="hover">
              <template #trigger>
                <span
                  class="cursor-pointer icon ml-auto mt-[-10px] text-[#0046AE] text-[20px]"
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
        </div>
        <router-link class="editProfile" to="/account/profile_edit">修改個人檔案</router-link>
      </div>
    </div>
  </div>
</template>

  <style src="../../assets/css/account/account.scss" scoped></style>

  <style lang="scss">
.yellow {
  color: rgba(252, 189, 31, 1);
}

.defalut-icon {
  color: white;
  opacity: .5;
}
</style>
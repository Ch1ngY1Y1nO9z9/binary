<script lang="ts" setup>
// 引入寫好的axios(並非從套件來, 而是先設定好的實例)
import useAxiosFunction from "../../utilities/api/useAxiosFunction";
import sendData from "../../api/getDataFunction";
import { storeToRefs } from "pinia";
import store from "../../store";
import { onMounted, reactive, ref } from "vue";

const useUserStore = store.useUserStore();
const { user } = useUserStore;

const List = ref();
const showListCtrl = ref(0)

interface IfetchData {
  res: {
    data: object;
    message: string;
    code: number;
  };
}

onMounted(async () => {
  sendData.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${user.access_token}`;

  const response = await useAxiosFunction<IfetchData>({
    axiosInstance: sendData,
    method: "GET",
    url: "/auth/user-friends",
    requestConfig: {},
  });

  const { res } = response;

  List.value = res.data;

  if(Array.isArray(res.data)){
    showListCtrl.value = res.data.length
  }

});
</script>

<template>
  <div class="commission">
    <div class="custom-container c-840 p-200">
      <div class="friends-cards">
        <template v-if="showListCtrl !== 0">
          <div v-for="person in List" :key="person.uuid" class="card">
            <div class="account">
              <div class="account-pic">
                <img :src="person.profilePhotoUrl" alt="avatar" />
              </div>
              <div class="account-detail">
                <div class="name">
                  {{ person.name }}
                  <span class="status status-r">推薦人</span>
                  <span v-if="person.status" class="status status-g"
                    >上線中</span
                  >
                  <span v-if="!person.status" class="status offline">離線</span>
                </div>
                <div class="points">
                  有效投注(點)：{{ person.userPointA + person.userPointB }}
                </div>
              </div>
            </div>
            <div class="msg-icon">
              <i class="fa-solid fa-comment-dots"></i>
            </div>
          </div>
        </template>
        <div v-if="showListCtrl === 0" class="none-list w-full">
          <i class="text-[104px] fa-solid fa-user-plus"></i>
          <p class="my-[30px] text-[18px]">參與遊戲, 結交更多好友！</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="../../assets/css/commission/commission.scss" scoped></style>
<script lang="ts" setup>
// 引入寫好的axios(並非從套件來, 而是先設定好的實例)
import useAxiosFunction from "../../utilities/api/useAxiosFunction";
import apiSetting from "../../api/basicSetting";
import { storeToRefs } from "pinia";
import store from "../../store";
import { onMounted, reactive, ref } from "vue";

const useUserStore = store.useUserStore();
const { user } = useUserStore;

const List = ref();

interface IfetchData {
  res: any
  err: {};
  loading: boolean;
  controller: object
}

onMounted(async() => {
  apiSetting.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${user.access_token}`;

  const response: IfetchData = await useAxiosFunction({
    axiosInstance: apiSetting,
    method: "GET",
    url: "/auth/user-friends",
    requestConfig: {},
  });

  const { res, err, loading, controller } = response;
  List.value = res.data
});
</script>

<template>
  <div class="commission">
    <div class="custom-container c-840 p-200">
      <div class="friends-cards">
        <div v-for="person in List" :key="person.uuid" class="card">
          <div class="account">
            <div class="account-pic">
              <img :src="person.profilePhotoUrl" alt="avatar" />
            </div>
            <div class="account-detail">
              <div class="name">
                {{person.name}}
                <span class="status status-r">推薦人</span>
                <span v-if="person.status" class="status status-g">上線中</span>
                <span v-if="!person.status" class="status offline">離線</span>
              </div>
              <div class="points">有效投注(點)：{{person.userPointA+person.userPointB}}</div>
            </div>
          </div>
          <div class="msg-icon">
            <i class="fa-solid fa-comment-dots"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="../../assets/css/layout.scss"></style>
<style src="../../assets/css/commission/commission.scss" scoped></style>
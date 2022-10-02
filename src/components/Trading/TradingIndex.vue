<script lang="ts" setup>
import { onMounted, ref } from "vue";
import routeName from "../../utilities/getRoute/getRoute";
import Pagination from "../../utilities/pagination/Pagination.vue";
import Title from "/src/utilities/Title.vue";

const btnSwitch = ref(false);

const { name } = routeName();
const emit = defineEmits(["changeTitle"]);

onMounted(() => {
  console.log(name);
  emit("changeTitle", name);
});

const fakeData = ref([
  {
    txid: "123456789012345",
    account: "123456789012345",
    point: "999999999",
    chain: "TRC",
    usdt: "1000",
    status: "",
  },
  {
    txid: "123456789012345",
    account: "123456789012345",
    point: "999999999",
    chain: "TRC",
    usdt: "1000",
    status: "cancel",
  },
  {
    txid: "123456789012345",
    account: "123456789012345",
    point: "999999999",
    chain: "TRC",
    usdt: "100000",
    status: "",
  },
  {
    txid: "123456789012345",
    account: "123456789012345",
    point: "500",
    chain: "TRC",
    usdt: "100000000",
    status: "",
  },
  {
    txid: "123456789012345",
    account: "123456789012345",
    point: "999999999",
    chain: "TRC",
    usdt: "1000",
    status: "",
  },
  {
    txid: "123456789012345",
    account: "123456789012345",
    point: "999999999",
    chain: "TRC",
    usdt: "1000",
    status: "",
  },
  {
    txid: "123456789012345",
    account: "123456789012345",
    point: "500",
    chain: "TRC",
    usdt: "1000",
    status: "",
  },
  {
    txid: "123456789012345",
    account: "123456789012345",
    point: "999999999",
    chain: "TRC",
    usdt: "1000",
    status: "",
  },
  {
    txid: "123456789012345",
    account: "123456789012345",
    point: "999999999",
    chain: "TRC",
    usdt: "1000",
    status: "",
  },
  {
    txid: "123456789012345",
    account: "123456789012345",
    point: "999999999",
    chain: "TRC",
    usdt: "1000",
    status: "",
  },
]);

const changeStatus = (index: number) => {
  if (fakeData.value[index].status == "") {
    fakeData.value[index].status = "cancel";
  } else {
    fakeData.value[index].status = "";
  }
};
</script>

<template>
  <Title title="交易中心" />
  <div class="trading">
    <div class="custom-container c-1056 p-200">
      <div class="trading-header">
        <div class="icon-title">
          <h3>
            <span class="icon">
              <img src="/images/content-page/subtitle-logo.svg" alt="" />
            </span>
            交易列表
          </h3>
        </div>
        <div class="buttons">
          <router-link to="/trading_center/list" class="btn"
            >我的交易</router-link
          >
          <router-link to="/trading_center/pointTrading" class="btn"
            >點數交易</router-link
          >
        </div>
      </div>

      <div class="result-table">
        <div class="row header">
          <div class="col">交易編號</div>
          <div class="col">會員帳號</div>
          <div class="col">點數</div>
          <div class="col">鏈</div>
          <div class="col">金額(USDT)</div>
          <div class="col">預定</div>
        </div>
        <div v-for="(data, index) in fakeData" :key="index" class="row body">
          <div class="col">{{ data.txid }}</div>
          <div class="col">{{ data.account }}</div>
          <div class="col">{{ data.point }}</div>
          <div class="col">{{ data.chain }}</div>
          <div class="col">{{ data.usdt }}</div>
          <div class="col">
            <router-link
              :to="`/trading_center/reservation/${index}`"
              class="btn"
              :class="[
                { 'cancel text-center': data.status == 'cancel' },
                { 'reservation text-center': data.status !== 'cancel' },
              ]"
              @click="changeStatus(index)"
            >
              <template v-if="data.status != 'cancel'"> 我要預定 </template>
              <template v-if="data.status == 'cancel'"> 取消預定 </template>
            </router-link>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  </div>
</template>

<style lang="scss" src="../../assets/css/trading/trading.scss" scoped></style>
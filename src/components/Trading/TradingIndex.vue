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
  <Title title="????????????" />
  <div class="trading">
    <div class="custom-container c-1056 p-200">
      <div class="trading-header">
        <div class="icon-title">
          <h3>
            <span class="icon">
              <img src="/images/content-page/subtitle-logo.svg" alt="" />
            </span>
            ????????????
          </h3>
        </div>
        <div class="buttons">
          <router-link to="/trading_center/list" class="btn"
            >????????????</router-link
          >
          <router-link to="/trading_center/pointTrading" class="btn"
            >????????????</router-link
          >
        </div>
      </div>

      <div class="result-table">
        <div class="row header">
          <div class="col">????????????</div>
          <div class="col">????????????</div>
          <div class="col">??????</div>
          <div class="col">???</div>
          <div class="col">??????(USDT)</div>
          <div class="col">??????</div>
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
              <template v-if="data.status != 'cancel'"> ???????????? </template>
              <template v-if="data.status == 'cancel'"> ???????????? </template>
            </router-link>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  </div>
</template>

<style lang="scss" src="../../assets/css/trading/trading.scss" scoped></style>
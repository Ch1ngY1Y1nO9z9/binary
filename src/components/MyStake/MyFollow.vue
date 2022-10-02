<script lang="ts" setup>
import Pagination from "/src/utilities/pagination/Pagination.vue";
import Title from "../../utilities/CPTitle.vue";

const fakeData = [
  {
    date: "2022/04/25",
    account: "123456789012345",
    condition: "1,000",
    statement: "+",
    statementPoint: "999,999,999",
  },
  {
    date: "2022/04/25",
    account: "123456789012345",
    condition: "20%",
    statement: "-",
    statementPoint: "6,000",
  },
  {
    date: "2022/04/25",
    account: "123456789012345",
    condition: "6",
    statement: "+",
    statementPoint: "6,000",
  },
  {
    date: "2022/04/25",
    account: "123456789012345",
    condition: "1,000",
    statement: "-",
    statementPoint: "20",
  },
  {
    date: "2022/04/25",
    account: "123456789012345",
    condition: "20%",
    statement: "-",
    statementPoint: "999,999,999",
  },
  {
    date: "2022/04/25",
    account: "123456789012345",
    condition: "55",
    statement: "+",
    statementPoint: "6,000",
  },
  {
    date: "2022/04/25",
    account: "123456789012345",
    condition: "1,000",
    statement: "-",
    statementPoint: "6,000",
  },
  {
    date: "2022/04/25",
    account: "123456789012345",
    condition: "20%",
    statement: "-",
    statementPoint: "500",
  },
  {
    date: "2022/04/25",
    account: "123456789012345",
    condition: "100,000,000",
    statement: "+",
    statementPoint: "6,000",
  },
];
</script>

<template>
  <Title
    title="我的跟單列表"
    subtitle="我的注單"
    returnText="返回會員中心"
    returnLink="/user_centre"
  />
  <div class="track">
    <div class="custom-container c-1056 p-200">
      <table class="trading-table">
        <thead>
          <tr>
            <th>開始日期</th>
            <th>會員帳號</th>
            <th>交易條件(每筆)</th>
            <th>目前損益</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in fakeData" :key="index">
            <td>{{ data.date }}</td>
            <td>{{ data.account }}</td>
            <td>{{ data.condition }}</td>
            <td
              :class="[
                { 'status-g': data.statement == '-' },
                { 'status-r': data.statement == '+' },
              ]"
            >
              {{
                data.statement == "-"
                  ? "-" + data.statementPoint
                  : data.statementPoint
              }}
            </td>
            <td>
              <router-link
                :to="`/myStake/myFollow/edit/${index + 1}`"
                class="link"
                >編輯</router-link
              >
              <router-link to="/myStake/myFollow/detail" class="link"
                >查看</router-link
              >
              <router-link
                :to="`/myStake/myFollow/cancel/${index}`"
                class="btn cancel"
                >取消跟單</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  </div>
</template>

<style src="../../assets/css/mystake/mystake.scss" scoped></style>
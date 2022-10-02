<script lang="ts" setup>
import Title from "../../utilities/CPTitle.vue";
import Pagination from "/src/utilities/pagination/Pagination.vue";

const fakeData = [
  {
    date: "2022/04/25",
    target: "義大利 甲級聯賽",
    matchName: "ＸＸＸ隊比賽贏",
    amount: "1,000",
    statement: "+",
    statementPoint: "999,999,999",
  },
  {
    date: "2022/04/25",
    target: "台積電",
    matchName: "收盤價格漲",
    amount: "1,000",
    statement: "-",
    statementPoint: "6,000",
  },
  {
    date: "2022/04/25",
    target: "義大利 甲級聯賽",
    matchName: "ＸＸＸ隊比賽贏",
    amount: "1,000",
    statement: "+",
    statementPoint: "6,000",
  },
  {
    date: "2022/04/25",
    target: "台積電",
    matchName: "收盤價格漲",
    amount: "1,000",
    statement: "-",
    statementPoint: "20",
  },
  {
    date: "2022/04/25",
    target: "台積電",
    matchName: "收盤價格漲",
    amount: "1,000",
    statement: "-",
    statementPoint: "999,999,999",
  },
  {
    date: "2022/04/25",
    target: "義大利 甲級聯賽",
    matchName: "ＸＸＸ隊比賽贏",
    amount: "1,000",
    statement: "+",
    statementPoint: "6,000",
  },
  {
    date: "2022/04/25",
    target: "義大利 甲級聯賽",
    matchName: "ＸＸＸ隊比賽贏",
    amount: "1,000",
    statement: "-",
    statementPoint: "6,000",
  },
  {
    date: "2022/04/25",
    target: "台積電",
    matchName: "收盤價格漲",
    amount: "1,000",
    statement: "-",
    statementPoint: "500",
  },
  {
    date: "2022/04/25",
    target: "台積電",
    matchName: "收盤價格漲",
    amount: "100,000,000",
    statement: "+",
    statementPoint: "6,000",
  },
  {
    date: "2022/04/25",
    target: "台積電",
    matchName: "收盤價格漲",
    amount: "1,000",
    statement: "+",
    statementPoint: "999,999,999",
  },
];
</script>

<template>
  <Title
    title="金融定期定額列表"
    subtitle="我的注單"
    returnText="返回會員中心"
    returnLink="/user_centre"
  />
  <div class="track">
    <div class="custom-container c-1056 p-200">
      <div class="catalog">
        <div class="options">
          <button class="btn btn-o active">全部</button>
          <button class="btn btn-o">體育遊戲</button>
          <button class="btn btn-o">金融遊戲</button>
        </div>
      </div>
      <table class="trading-table">
        <thead>
          <tr>
            <th>開始日期</th>
            <th>標的</th>
            <th>遊戲名稱</th>
            <th>金額</th>
            <th>目前損益</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in fakeData" :key="index">
            <td>{{ data.date }}</td>
            <td>{{ data.target }}</td>
            <td>{{ data.matchName }}</td>
            <td>{{ data.amount }}</td>
            <td
              :class="[
                { 'status-r': data.statement == '+' },
                { 'status-g': data.statement == '-' },
              ]"
            >
              {{
                data.statement == "-"
                  ? "-" + data.statementPoint
                  : data.statementPoint
              }}
            </td>
            <td>
              <button type="button" class="link">編輯</button>
              <router-link to="/myStake/schedule/detail" class="link">查看</router-link>
              <button type="button" class="btn cancel">取消跟單</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  </div>
</template>

<style src="../../assets/css/mystake/mystake.scss" scoped></style>
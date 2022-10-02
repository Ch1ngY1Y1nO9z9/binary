<script lang="ts" setup>
import Pagination from "/src/utilities/pagination/Pagination.vue";
import Title from "../../utilities/CPTitle.vue";

const fakeData = [
  {
    data: "",
    account: "",
    condition: "",
    statement: "",
  },
];
</script>

<template>
  <Title
    title="我的跟單詳情"
    subtitle="我的注單"
    returnText="返回"
    returnLink="/myStake/myFollow"
  />
  <div class="track">
    <div class="custom-container c-1056 p-200">
      <div class="board stake_detail">
        <div class="left">
          <div class="col">
            <div class="type">
              <div>開始日期:&nbsp;</div>
              <div>會員帳號:&nbsp;</div>
              <div>跟單類型:&nbsp;</div>
              <div>每筆點數:&nbsp;</div>
            </div>
            <div class="res">
              <div>2022/04/25</div>
              <div>123456789012345</div>
              <div>固定跟單</div>
              <div>1,000</div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="col">
            <div class="type">
              <div>總勝率</div>
              <div>場數</div>
              <div>累積獲利</div>
            </div>
            <div class="res">
              <div>75<span class="per">%</span></div>
              <div>179,669</div>
              <div>123,456,789</div>
            </div>
          </div>
        </div>
      </div>

      <div class="catalog">
        <div class="options">
          <button class="btn btn-o active">全部</button>
          <button class="btn btn-o">搓合中</button>
          <button class="btn btn-o">已成交</button>
          <button class="btn btn-o">已結算</button>
          <button class="btn btn-o">未成交</button>
        </div>
      </div>

      <table class="trading-table">
        <thead>
          <tr>
            <th>狀態</th>
            <th>單號</th>
            <th>遊戲名稱</th>
            <th>下注內容</th>
            <th>下注時間</th>
            <th>下注金額</th>
            <!-- <th>
                                更新時間
                            </th> -->
            <th>搓合金額</th>
            <!-- <th>
                                操作
                            </th> -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>搓合中</td>
            <td>1234567890</td>
            <td>一二三四五六七八九十...</td>
            <td>一二三四五六七...</td>
            <td>
              2022/04/25<br />
              12:04:00
            </td>
            <td>999,999,999</td>
            <!-- <td>
                                2022/04/25<br />
                                12:04:00
                            </td> -->
            <td>999,999,999</td>
            <!-- <td>
                                <a href="" class="link">前往盤口</a>
                            </td> -->
          </tr>
          <tr>
            <td>搓合中</td>
            <td>1234567890</td>
            <td>一二三四五六七八九十...</td>
            <td>一二三四五六七...</td>
            <td>
              2022/04/25<br />
              12:04:00
            </td>
            <td>6,000</td>
            <!-- <td>
                                2022/04/25<br />
                                12:04:00
                            </td> -->
            <td>0</td>
            <!-- <td>
                                <a href="" class="link">前往盤口</a>
                            </td> -->
          </tr>
          <tr>
            <td>已成交</td>
            <td>1234567890</td>
            <td>一二三四五六七八九十...</td>
            <td>一二三四五六七...</td>
            <td>
              2022/04/25<br />
              12:04:00
            </td>
            <td>6,000</td>
            <!-- <td>
                                2022/04/25<br />
                                12:04:00
                            </td> -->
            <td>11</td>
            <!-- <td>
                                <a href="" class="link">前往盤口</a>
                            </td> -->
          </tr>
          <tr>
            <td>搓合中</td>
            <td>1234567890</td>
            <td>一二三四五六七八九十...</td>
            <td>一二三四五六七...</td>
            <td>
              2022/04/25<br />
              12:04:00
            </td>
            <td>20</td>
            <!-- <td>
                                2022/04/25<br />
                                12:04:00
                            </td> -->
            <td>20</td>
            <!-- <td>
                                <a href="" class="link">前往盤口</a>
                            </td> -->
          </tr>
          <tr>
            <td>已結算</td>
            <td>1234567890</td>
            <td>一二三四五六七八九十...</td>
            <td>一二三四五六七...</td>
            <td>
              2022/04/25<br />
              12:04:00
            </td>
            <td>999,999,999</td>
            <!-- <td>
                                2022/04/25<br />
                                12:04:00
                            </td> -->
            <td>0</td>
            <!-- <td>
                                <a href="" class="link">前往盤口</a>
                            </td> -->
          </tr>
          <tr>
            <td>未成交</td>
            <td>1234567890</td>
            <td>一二三四五六七八九十...</td>
            <td>一二三四五六七...</td>
            <td>
              2022/04/25<br />
              12:04:00
            </td>
            <td>6,000</td>
            <!-- <td>
                                2022/04/25<br />
                                12:04:00
                            </td> -->
            <td>999,999,999</td>
            <!-- <td>
                                <a href="" class="link">前往盤口</a>
                            </td> -->
          </tr>
          <tr>
            <td>已結算</td>
            <td>1234567890</td>
            <td>一二三四五六七八九十...</td>
            <td>一二三四五六七...</td>
            <td>
              2022/04/25<br />
              12:04:00
            </td>
            <td>6,000</td>
            <!-- <td>
                                2022/04/25<br />
                                12:04:00
                            </td> -->
            <td>0</td>
            <!-- <td>
                                <a href="" class="link">前往盤口</a>
                            </td> -->
          </tr>
          <tr>
            <td>搓合中</td>
            <td>1234567890</td>
            <td>一二三四五六七八九十...</td>
            <td>一二三四五六七...</td>
            <td>
              2022/04/25<br />
              12:04:00
            </td>
            <td>500</td>
            <!-- <td>
                                2022/04/25<br />
                                12:04:00
                            </td> -->
            <td>500</td>
            <!-- <td>
                                <a href="" class="link">前往盤口</a>
                            </td> -->
          </tr>
          <tr>
            <td>已成交</td>
            <td>1234567890</td>
            <td>一二三四五六七八九十...</td>
            <td>一二三四五六七...</td>
            <td>
              2022/04/25<br />
              12:04:00
            </td>
            <td>6,000</td>
            <!-- <td>
                                2022/04/25<br />
                                12:04:00
                            </td> -->
            <td>6,000</td>
            <!-- <td>
                                <a href="" class="link">前往盤口</a>
                            </td> -->
          </tr>
          <tr>
            <td>未成交</td>
            <td>1234567890</td>
            <td>一二三四五六七八九十...</td>
            <td>一二三四五六七...</td>
            <td>
              2022/04/25<br />
              12:04:00
            </td>
            <td>6,000</td>
            <!-- <td>
                                2022/04/25<br />
                                12:04:00
                            </td> -->
            <td>999,999,999</td>
            <!-- <td>
                                <a href="" class="link">前往盤口</a>
                            </td> -->
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  </div>
</template>
  
<style src="../../assets/css/mystake/mystake.scss" scoped></style>
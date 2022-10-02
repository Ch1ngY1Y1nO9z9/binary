<script lang="ts" setup>
import Title from "../../utilities/CPTitle.vue";
import Pagination from "/src/utilities/pagination/Pagination.vue";
</script>

<template>
  <Title
    title="注單追蹤"
    subtitle="我的注單"
    returnText="返回會員中心"
    returnLink="/user_centre"
  />
  <div class="track">
    <div class="custom-container c-1056 p-200">
      <div class="catalog">
        <div class="options">
          <button class="btn btn-o active">全部</button>
          <button class="btn btn-o">搓合中</button>
          <button class="btn btn-o">已成交</button>
          <button class="btn btn-o">已結算</button>
          <button class="btn btn-o">未成交</button>
        </div>
        <div class="filter">
          <button class="btn">本週</button>
          <button class="btn">上週</button>
          <button class="btn">昨日</button>
          <button class="btn active">今日</button>
          <div class="datetimepicker">
            <div class="input-date">
              <div
                class="datepicker relative form-floating h-full"
                data-mdb-toggle-button="false"
              >
                <input
                  type="text"
                  class="form-control block w-full transition ease-in-out"
                />
                <button
                  class="datepicker-toggle-button"
                  data-mdb-toggle="datepicker"
                >
                  <i class="fa-solid fa-calendar-days"></i>
                </button>
              </div>
            </div>
            <span>至</span>
            <div class="input-date">
              <div
                class="datepicker relative form-floating h-full"
                data-mdb-toggle-button="false"
              >
                <input
                  type="text"
                  class="form-control block w-full transition ease-in-out"
                />
                <button
                  class="datepicker-toggle-button"
                  data-mdb-toggle="datepicker"
                >
                  <i class="fa-solid fa-calendar-days"></i>
                </button>
              </div>
            </div>
            <button class="submit-btn" type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
              搜尋
            </button>
          </div>
        </div>
        <div class="options">
          <button class="btn btn-b active">全部</button>
          <button class="btn btn-b">體育</button>
          <button class="btn btn-b">新聞</button>
          <button class="btn btn-b">政治</button>
          <button class="btn btn-b">金融</button>
          <button class="btn btn-b">彩票</button>
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
            <th>搓合金額</th>
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
            <td>999,999,999</td>
          </tr>
          <tr>
            <td>搓合中</td>
            <td>1234567890</td>
            <td>一二三四五六七八九十...</td>
            <td class="keepall">一二三四五六七...</td>
            <td>
              2022/04/25<br />
              12:04:00
            </td>
            <td>6,000</td>
            <td>0</td>
          </tr>
          <tr>
            <td>已成交</td>
            <td>1234567890</td>
            <td>一二三四五六七八九十...</td>
            <td class="keepall">一二三四五六七...</td>
            <td>
              2022/04/25<br />
              12:04:00
            </td>
            <td>6,000</td>
            <td>11</td>
          </tr>
          <tr>
            <td>搓合中</td>
            <td>1234567890</td>
            <td>一二三四五六七八九十...</td>
            <td class="keepall">一二三四五六七...</td>
            <td>
              2022/04/25<br />
              12:04:00
            </td>
            <td>20</td>
            <td>20</td>
          </tr>
          <tr>
            <td>已結算</td>
            <td>1234567890</td>
            <td>一二三四五六七八九十...</td>
            <td class="keepall">一二三四五六七...</td>
            <td>
              2022/04/25<br />
              12:04:00
            </td>
            <td>999,999,999</td>
            <td>0</td>
          </tr>
          <tr>
            <td>未成交</td>
            <td>1234567890</td>
            <td>一二三四五六七八九十...</td>
            <td class="keepall">一二三四五六七...</td>
            <td>
              2022/04/25<br />
              12:04:00
            </td>
            <td>6,000</td>
            <td>999,999,999</td>
          </tr>
          <tr>
            <td>已結算</td>
            <td>1234567890</td>
            <td>一二三四五六七八九十...</td>
            <td class="keepall">一二三四五六七...</td>
            <td>
              2022/04/25<br />
              12:04:00
            </td>
            <td>6,000</td>
            <td>0</td>
          </tr>
          <tr>
            <td>搓合中</td>
            <td>1234567890</td>
            <td>一二三四五六七八九十...</td>
            <td class="keepall">一二三四五六七...</td>
            <td>
              2022/04/25<br />
              12:04:00
            </td>
            <td>500</td>
            <td>500</td>
          </tr>
          <tr>
            <td>已成交</td>
            <td>1234567890</td>
            <td>一二三四五六七八九十...</td>
            <td class="keepall">一二三四五六七...</td>
            <td>
              2022/04/25<br />
              12:04:00
            </td>
            <td>6,000</td>
            <td>6,000</td>
          </tr>
          <tr>
            <td>未成交</td>
            <td>1234567890</td>
            <td>一二三四五六七八九十...</td>
            <td class="keepall">一二三四五六七...</td>
            <td>
              2022/04/25<br />
              12:04:00
            </td>
            <td>6,000</td>
            <td>999,999,999</td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  </div>
</template>

<style src="../../assets/css/mystake/mystake.scss" scoped></style>
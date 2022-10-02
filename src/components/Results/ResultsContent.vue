<script lang="ts" setup>
import { ref } from "vue";
import CPTitle from "/src/utilities/CPTitle.vue";
import Pagination from "../../utilities/pagination/Pagination.vue";

const modalToggle = ref(false)
</script>
    
<template>
  <CPTitle
    title="投注明細"
    subtitle="會員戰績風雲榜"
    returnText="返回會員戰績"
    returnLink="/member_results/index"
  />
  <div class="result">
    <div class="custom-container c-1056 p-200">
      <div class="card-left-layout">
        <div class="account-card">
          <div class="account">
            <div class="avatar">
              <img src="" alt="account avatar" />
            </div>
            <div class="account-detail">
              <span class="class normal">菁英公爵</span>
              <div class="name">Gatsby556</div>
            </div>
          </div>
          <div class="rate">
            <div class="total-rate">
              <span class="wins">66<span class="per">%</span></span>
              <br />
              <div class="total">333/500</div>
              <div class="title">總勝率</div>
            </div>
            <div class="total-rate">
              <span class="wins">75<span class="per">%</span></span>
              <br />
              <div class="total">66/100</div>
              <div class="title">近百場勝率</div>
            </div>
          </div>

          <button type="button" @click="modalToggle = !modalToggle" class="btn follow">
            跟單
          </button>
        </div>
        <div class="table">
          <table class="trading-table">
            <thead>
              <tr>
                <th>編號</th>
                <th>下注時間</th>
                <th>遊戲名稱</th>
                <th>下注內容</th>
                <th>下注金額(點)</th>
                <th>結果</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1234567</td>
                <td>
                  2022/04/25 <br />
                  12:04:00
                </td>
                <td>一二三四五六七八...</td>
                <td>一二三四五六七八九十一二三四五...</td>
                <td>999,999,999</td>
                <td class="status-r">贏</td>
              </tr>
              <tr>
                <td>1234567</td>
                <td>
                  2022/04/25 <br />
                  12:04:00
                </td>
                <td>苗栗縣長參選人預測</td>
                <td>您認為徐志榮會參選2022苗栗縣長...</td>
                <td>6,000</td>
                <td class="status-r">贏</td>
              </tr>
              <tr>
                <td>1234567</td>
                <td>
                  2022/04/25 <br />
                  12:04:00
                </td>
                <td>苗栗縣長參選人預測</td>
                <td>您認為徐志榮會參選2022苗栗縣長...</td>
                <td>6,000</td>
                <td class="status-r">贏</td>
              </tr>
              <tr>
                <td>1234567</td>
                <td>
                  2022/04/25 <br />
                  12:04:00
                </td>
                <td>苗栗縣長參選人預測</td>
                <td>您認為徐志榮會參選2022苗栗縣長...</td>
                <td>20</td>
                <td class="status-g">輸</td>
              </tr>
              <tr>
                <td>1234567</td>
                <td>
                  2022/04/25 <br />
                  12:04:00
                </td>
                <td>苗栗縣長參選人預測</td>
                <td>您認為徐志榮會參選2022苗栗縣長...</td>
                <td>999,999,999</td>
                <td class="status-g">輸</td>
              </tr>
              <tr>
                <td>1234567</td>
                <td>
                  2022/04/25 <br />
                  12:04:00
                </td>
                <td>苗栗縣長參選人預測</td>
                <td>您認為徐志榮會參選2022苗栗縣長...</td>
                <td>6,000</td>
                <td class="status-r">贏</td>
              </tr>
              <tr>
                <td>1234567</td>
                <td>
                  2022/04/25 <br />
                  12:04:00
                </td>
                <td>苗栗縣長參選人預測</td>
                <td>您認為徐志榮會參選2022苗栗縣長...</td>
                <td>6,000</td>
                <td class="status-r">贏</td>
              </tr>
              <tr>
                <td>1234567</td>
                <td>
                  2022/04/25 <br />
                  12:04:00
                </td>
                <td>苗栗縣長參選人預測</td>
                <td>您認為徐志榮會參選2022苗栗縣長...</td>
                <td>500</td>
                <td class="status-g">輸</td>
              </tr>
              <tr>
                <td>1234567</td>
                <td>
                  2022/04/25 <br />
                  12:04:00
                </td>
                <td>苗栗縣長參選人預測</td>
                <td>您認為徐志榮會參選2022苗栗縣長...</td>
                <td>6,000</td>
                <td class="status-g">輸</td>
              </tr>
              <tr>
                <td>1234567</td>
                <td>
                  2022/04/25 <br />
                  12:04:00
                </td>
                <td>苗栗縣長參選人預測</td>
                <td>您認為徐志榮會參選2022苗栗縣長...</td>
                <td>6,000</td>
                <td class="status-r">贏</td>
              </tr>
            </tbody>
          </table>
          <Pagination />
        </div>
      </div>
    </div>
  </div>
  <div v-if="modalToggle" class="modal">
        <div class="mask" @click="modalToggle = !modalToggle">
            <div class="follow-modal">
                <div class="close-icon">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div class="footer">
                    <div class="links">
                        <router-link to="/member_results/follow/setting/regular" class="link">
                            每筆<br/>
                            固定金額
                        </router-link>
                        <router-link to="/member_results/follow/setting/persentage" class="link">
                            每筆<br/>
                            比例金額
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
    
    <style lang="scss" src="../../assets/css/results/results.scss" scoped></style>
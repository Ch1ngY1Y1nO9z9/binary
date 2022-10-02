<script lang="ts" setup>
import { ref } from "vue";
import CPTitle from "/src/utilities/CPTitle.vue";
import Pagination from "../../utilities/pagination/Pagination.vue";
</script>

<template>
  <CPTitle
    title="會員戰績風雲榜"
    subtitle=""
    returnText="我的跟單列表"
    returnLink="/MyStake/myFollow"
  />
  <div class="results">
    <div class="custom-container c-1272 p-200">
      <div class="catalog">
        <div class="options">
          <button class="btn btn-o active">全部</button>
          <button class="btn btn-o">搓合中</button>
          <button class="btn btn-o">已成交</button>
          <button class="btn btn-o">已結算</button>
          <button class="btn btn-o">未成交</button>
          <div class="sort">
            <select name="sort" class="input-control">
              <option value="">依編號(由小至大)</option>
              <option value="">依編號(由大至小)</option>
            </select>
            <div class="arrow">
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="catalog">
        <div class="options">
          <button class="btn btn-y active">全部</button>
          <button class="btn btn-y">搓合中</button>
          <button class="btn btn-y">已成交</button>
          <button class="btn btn-y">已結算</button>
          <button class="btn btn-y">未成交</button>
        </div>
      </div>

      <div class="list">
        <div class="result-card">
          <div class="account">
            <div class="pic">
              <img src="" alt="avatart" />
            </div>
            <div class="name">
              <span class="class normal">菁英公爵</span>
              Gatsby556
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
          <div class="follow-links">
            <router-link to="/member_results/detail" class="btn out-line"> 投注明細 </router-link>
            <router-link to="/member_results/detail" class="btn follow-btn"> 跟單 </router-link>
          </div>
        </div>
        <div class="result-card">
          <div class="account">
            <div class="pic">
              <img src="" alt="avatart" />
            </div>
            <div class="name">
              <span class="class normal">菁英公爵</span>
              Gatsby556
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
          <div class="follow-links">
            <router-link to="/member_results/detail" class="btn out-line"> 投注明細 </router-link>
            <button class="btn follow-btn followed">取消跟單</button>
          </div>
        </div>
        <div class="result-card">
          <div class="account">
            <div class="pic">
              <img src="" alt="avatart" />
            </div>
            <div class="name">
              <span class="class normal">菁英公爵</span>
              Gatsby556
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
          <div class="follow-links">
            <router-link to="/member_results/detail" class="btn out-line"> 投注明細 </router-link>
            <router-link to="/member_results/detail" class="btn follow-btn"> 跟單 </router-link>
          </div>
        </div>
        <div class="result-card">
          <div class="account">
            <div class="pic">
              <img src="" alt="avatart" />
            </div>
            <div class="name">
              <span class="class normal">菁英公爵</span>
              Gatsby556
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
          <div class="follow-links">
            <router-link to="/member_results/detail" class="btn out-line"> 投注明細 </router-link>
            <router-link to="/member_results/detail" class="btn follow-btn"> 跟單 </router-link>
          </div>
        </div>
        <div class="result-card">
          <div class="account">
            <div class="pic">
              <img src="" alt="avatart" />
            </div>
            <div class="name">
              <span class="class platinum">白金伯爵</span>
              Gatsby556
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
          <div class="follow-links">
            <router-link to="/member_results/detail" class="btn out-line"> 投注明細 </router-link>
            <router-link to="/member_results/detail" class="btn follow-btn"> 跟單 </router-link>
          </div>
        </div>
        <div class="result-card">
          <div class="account">
            <div class="pic">
              <img src="" alt="avatart" />
            </div>
            <div class="name">
              <span class="class platinum">白金伯爵</span>
              Gatsby556
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
          <div class="follow-links">
            <router-link to="/member_results/detail" class="btn out-line"> 投注明細 </router-link>
            <button class="btn follow-btn followed">取消跟單</button>
          </div>
        </div>
        <div class="result-card">
          <div class="account">
            <div class="pic">
              <img src="" alt="avatart" />
            </div>
            <div class="name">
              <span class="class platinum">白金伯爵</span>
              Gatsby556
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
          <div class="follow-links">
            <router-link to="/member_results/detail" class="btn out-line"> 投注明細 </router-link>
            <router-link to="/member_results/detail" class="btn follow-btn"> 跟單 </router-link>
          </div>
        </div>
        <div class="result-card">
          <div class="account">
            <div class="pic">
              <img src="" alt="avatart" />
            </div>
            <div class="name">
              <span class="class platinum">白金伯爵</span>
              Gatsby556
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
          <div class="follow-links">
            <router-link to="/member_results/detail" class="btn out-line"> 投注明細 </router-link>
            <router-link to="/member_results/detail" class="btn follow-btn"> 跟單 </router-link>
          </div>
        </div>
        <div class="result-card">
          <div class="account">
            <div class="pic">
              <img src="" alt="avatart" />
            </div>
            <div class="name">
              <span class="class platinum">白金伯爵</span>
              Gatsby556
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
          <div class="follow-links">
            <router-link to="/member_results/detail" class="btn out-line"> 投注明細 </router-link>
            <router-link to="/member_results/detail" class="btn follow-btn"> 跟單 </router-link>
          </div>
        </div>
        <div class="result-card">
          <div class="account">
            <div class="pic">
              <img src="" alt="avatart" />
            </div>
            <div class="name">
              <span class="class golden">金牌男爵</span>
              Gatsby556
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
          <div class="follow-links">
            <router-link to="/member_results/detail" class="btn out-line"> 投注明細 </router-link>
            <button class="btn follow-btn followed">取消跟單</button>
          </div>
        </div>
        <div class="result-card">
          <div class="account">
            <div class="pic">
              <img src="" alt="avatart" />
            </div>
            <div class="name">
              <span class="class golden">金牌男爵</span>
              Gatsby556
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
          <div class="follow-links">
            <router-link to="/member_results/detail" class="btn out-line"> 投注明細 </router-link>
            <router-link to="/member_results/detail" class="btn follow-btn"> 跟單 </router-link>
          </div>
        </div>
        <div class="result-card">
          <div class="account">
            <div class="pic">
              <img src="" alt="avatart" />
            </div>
            <div class="name">
              <span class="class golden">金牌男爵</span>
              Gatsby556
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
          <div class="follow-links">
            <router-link to="/member_results/detail" class="btn out-line"> 投注明細 </router-link>
            <router-link to="/member_results/detail" class="btn follow-btn"> 跟單 </router-link>
          </div>
        </div>
      </div>

      <Pagination />
    </div>
  </div>
</template>


<style lang="scss" src="../../assets/css/results/results.scss" scoped></style>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import CPTitle from "/src/utilities/CPTitle.vue";
import Pagination from "../../utilities/pagination/Pagination.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const setting = router.currentRoute.value.params.setting;
onMounted(() => {
  if (setting != "persentage" && setting != "regular") {
    router.push({ path: "/member_results/detail" });
  }
});
console.log(setting);
</script>
    
    <template>
  <CPTitle
    title="跟單設定"
    subtitle="會員戰績風雲榜"
    returnText="返回會員戰績"
    returnLink="/member_results/index"
  />
  <div class="result">
    <div class="custom-container c-954 p-200">
      <template v-if="setting === 'persentage'">
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
          </div>

          <form class="form-card">
            <div class="input-row">
              <label for="chain" class="input-label">跟單類型</label>
              <div class="input-col">
                <select name="chain" id="chain" class="input-control">
                  <option value="">每筆固定金額</option>
                  <option value="" selected>每筆比例金額</option>
                </select>
                <div class="arrow">
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <span class="msg"></span>
            </div>
            <div class="input-row">
              <label for="point" class="input-label">每筆比例</label>
              <div class="input-col">
                <input
                  id="point"
                  type="text"
                  name="point"
                  class="input-control"
                  placeholder="請輸入每筆比例"
                  value="50%"
                />
              </div>
              <span class="msg"></span>
            </div>
            <div class="input-row">
              <label for="point" class="input-label"
                >單筆最高金額上限(點)</label
              >
              <div class="input-col">
                <input
                  id="point"
                  type="number"
                  name="point"
                  class="input-control"
                  placeholder="請輸入單筆最高金額上限(點)"
                  value="100000"
                />
              </div>
              <span class="msg"></span>
            </div>
            <div class="input-row">
              <label for="chain" class="input-label">跟單場數</label>
              <div class="input-col">
                <select name="chain" id="chain" class="input-control">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="" selected>5</option>
                </select>
                <div class="arrow">
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <span class="msg"></span>
            </div>
            <div class="input-row">
              <label for="password" class="input-label"
                >錢包密碼
                <router-link class="link float-right" to="/forgotPassword"
                  >忘記密碼?</router-link
                ></label
              >
              <div class="input-col">
                <input
                  id="password"
                  type="password"
                  name="password"
                  class="input-control"
                  placeholder="請輸入錢包密碼"
                />
              </div>
              <span class="msg"></span>
            </div>

            <div class="links">
              <router-link to="/member_results/detail" class="link"
                >取消</router-link
              >
              <button type="button" class="link">確定跟單</button>
            </div>
          </form>
        </div>
      </template>

      <template v-if="setting === 'regular'">
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
          </div>
          <form class="form-card">
            <div class="input-row">
              <label for="chain" class="input-label">跟單類型</label>
              <div class="input-col">
                <select name="chain" id="chain" class="input-control">
                  <option value="">每筆固定金額</option>
                  <option value="">每筆比例金額</option>
                </select>
                <div class="arrow">
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <span class="msg"></span>
            </div>
            <div class="input-row">
              <label for="point" class="input-label">金額(點)</label>
              <div class="input-col">
                <input
                  id="point"
                  type="number"
                  name="point"
                  class="input-control"
                  placeholder="請輸入金額(點)"
                />
              </div>
              <span class="msg"></span>
            </div>
            <div class="input-row">
              <label for="chain" class="input-label">跟單場數</label>
              <div class="input-col">
                <select name="chain" id="chain" class="input-control">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="" selected>5</option>
                </select>
                <div class="arrow">
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <span class="msg"></span>
            </div>
            <div class="input-row">
              <label for="password" class="input-label"
                >錢包密碼
                <router-link class="link float-right" to="/forgotPassword"
                  >忘記密碼?</router-link
                ></label
              >
              <div class="input-col">
                <input
                  id="password"
                  type="password"
                  name="password"
                  class="input-control"
                  placeholder="請輸入錢包密碼"
                />
              </div>
              <span class="msg"></span>
            </div>

            <div class="links">
              <router-link to="/member_results/detail" class="link"
                >取消</router-link
              >
              <button type="button" class="link">確定跟單</button>
            </div>
          </form>
        </div>
      </template>
    </div>
  </div>
</template>
    
    
    <style lang="scss" src="../../assets/css/results/results.scss" scoped></style>
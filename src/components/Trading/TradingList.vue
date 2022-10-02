<script lang="ts" setup>
import { ref } from "vue";
import CPTitle from "/src/utilities/CPTitle.vue";
import Pagination from "../../utilities/pagination/Pagination.vue";

const btnSwitch = ref(false);
const chatToggle = ref(false);
const confirmToggle = ref(false)
</script>

<template>
  <CPTitle
    title="我的交易"
    subtitle="交易中心"
    returnText="返回交易中心"
    returnLink="/trading_center/index"
  />
  <div class="trading">
    <div class="custom-container c-1056 p-200">
      <div class="tab">
        <div class="tab-options sm">
          <button
            @click="btnSwitch = !btnSwitch"
            class="btn-options"
            :class="{ active: !btnSwitch }"
          >
            買點
          </button>
          <button
            @click="btnSwitch = !btnSwitch"
            class="btn-options"
            :class="{ active: btnSwitch }"
          >
            賣點
          </button>
        </div>
      </div>

      <table class="trading-table">
        <thead>
          <tr>
            <th>交易編號</th>
            <th>會員帳號</th>
            <th>販售點數</th>
            <th>鏈</th>
            <th>金額 (USDT)</th>
            <th>對話</th>
            <th>對方狀態</th>
            <th class="form-section">我的狀態</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123456789012345</td>
            <td>123456789012345</td>
            <td>999,999,999</td>
            <td>TRC</td>
            <td>999,999,999</td>
            <td class="icon">
              <div class="comment" @click="chatToggle = !chatToggle">
                <i class="fa-solid fa-comment-dots"></i>
              </div>
            </td>
            <td class="status-g">交易中</td>
            <td>
              <form action="">
                <div class="select-col">
                  <select name="" id="">
                    <option value="">交易取消</option>
                    <option value="">交易成功</option>
                  </select>
                </div>
                <div class="select-col">
                  <select name="" id="">
                    <option value="">取消原因</option>
                  </select>
                </div>
                <button @click="confirmToggle = !confirmToggle" type="button" class="btn confirm">
                  確認
                </button>
              </form>
            </td>
          </tr>
          <tr>
            <td>123456789012345</td>
            <td>123456789012345</td>
            <td>999,999,999</td>
            <td>TRC</td>
            <td>999,999,999</td>
            <td class="icon">
              <div class="comment" @click="chatToggle = !chatToggle">
                <i class="fa-solid fa-comment-dots"></i>
              </div>
            </td>
            <td class="status-g">交易中</td>
            <td>
              <form action="">
                <div class="select-col">
                  <select name="" id="">
                    <option value="">交易取消</option>
                    <option value="">交易成功</option>
                  </select>
                </div>
                <div class="select-col">
                  <select name="" id="">
                    <option value="">取消原因</option>
                  </select>
                </div>
                <button @click="confirmToggle = !confirmToggle" type="button" class="btn confirm">
                  確認
                </button>
              </form>
            </td>
          </tr>
          <tr>
            <td>123456789012345</td>
            <td>123456789012345</td>
            <td>999,999,999</td>
            <td>TRC</td>
            <td>999,999,999</td>
            <td class="icon">
              <div class="comment" @click="chatToggle = !chatToggle">
                <i class="fa-solid fa-comment-dots"></i>
              </div>
            </td>
            <td class="status-g">交易中</td>
            <td>
              <form action="">
                <div class="select-col">
                  <select name="" id="">
                    <option value="">交易取消</option>
                    <option value="">交易成功</option>
                  </select>
                </div>
                <div class="select-col">
                  <select name="" id="">
                    <option value="">取消原因</option>
                  </select>
                </div>
                <button @click="confirmToggle = !confirmToggle" type="button" class="btn confirm">
                  確認
                </button>
              </form>
            </td>
          </tr>
          <tr>
            <td>123456789012345</td>
            <td>123456789012345</td>
            <td>999,999,999</td>
            <td>TRC</td>
            <td>999,999,999</td>
            <td class="icon">
              <div class="comment" @click="chatToggle = !chatToggle">
                <i class="fa-solid fa-comment-dots"></i>
              </div>
            </td>
            <td class="status-g">交易中</td>
            <td>
              <form action="">
                <div class="select-col">
                  <select name="" id="">
                    <option value="">交易取消</option>
                    <option value="">交易成功</option>
                  </select>
                </div>
                <div class="select-col">
                  <select name="" id="">
                    <option value="">取消原因</option>
                  </select>
                </div>
                <button
                  type="button"
                  class="btn confirm disabled"
                >
                  確認
                </button>
              </form>
            </td>
          </tr>
          <tr>
            <td>123456789012345</td>
            <td>123456789012345</td>
            <td>999,999,999</td>
            <td>TRC</td>
            <td>999,999,999</td>
            <td class="icon">
              <div class="comment" @click="chatToggle = !chatToggle">
                <i class="fa-solid fa-comment-dots"></i>
              </div>
            </td>
            <td class="status-g">交易中</td>
            <td>
              <form action="">
                <div class="select-col">
                  <select name="" id="">
                    <option value="">交易取消</option>
                    <option value="">交易成功</option>
                  </select>
                </div>
                <div class="select-col">
                  <select name="" id="">
                    <option value="">取消原因</option>
                  </select>
                </div>
                <button type="button" @click="confirmToggle = !confirmToggle" class="btn confirm">
                  確認
                </button>
              </form>
            </td>
          </tr>
          <tr>
            <td>123456789012345</td>
            <td>123456789012345</td>
            <td>999,999,999</td>
            <td>TRC</td>
            <td>999,999,999</td>
            <td class="icon">
              <div class="comment" @click="chatToggle = !chatToggle">
                <i class="fa-solid fa-comment-dots"></i>
              </div>
            </td>
            <td class="status-g">交易中</td>
            <td>
              <form action="">
                <div class="select-col">
                  <select name="" id="">
                    <option value="">交易取消</option>
                    <option value="">交易成功</option>
                  </select>
                </div>
                <div class="select-col">
                  <select name="" id="">
                    <option value="">取消原因</option>
                  </select>
                </div>
                <button type="button" @click="confirmToggle = !confirmToggle" class="btn confirm">
                  確認
                </button>
              </form>
            </td>
          </tr>
          <tr>
            <td>123456789012345</td>
            <td>123456789012345</td>
            <td>999,999,999</td>
            <td>TRC</td>
            <td>999,999,999</td>
            <td class="icon">
              <div class="comment" @click="chatToggle = !chatToggle">
                <i class="fa-solid fa-comment-dots"></i>
              </div>
            </td>
            <td class="status-g">交易中</td>
            <td>
              <form action="">
                <div class="select-col">
                  <select name="" id="">
                    <option value="">交易取消</option>
                    <option value="">交易成功</option>
                  </select>
                </div>
                <div class="select-col">
                  <select name="" id="">
                    <option value="">取消原因</option>
                  </select>
                </div>
                <button type="button" @click="confirmToggle = !confirmToggle" class="btn confirm">
                  確認
                </button>
              </form>
            </td>
          </tr>
          <tr>
            <td>123456789012345</td>
            <td>123456789012345</td>
            <td>999,999,999</td>
            <td>TRC</td>
            <td>999,999,999</td>
            <td class="icon">
              <div class="comment" @click="chatToggle = !chatToggle">
                <i class="fa-solid fa-comment-dots"></i>
              </div>
            </td>
            <td class="status-g">交易中</td>
            <td>
              <form action="">
                <div class="select-col">
                  <select name="" id="">
                    <option value="">交易取消</option>
                    <option value="">交易成功</option>
                  </select>
                </div>
                <div class="select-col">
                  <select name="" id="">
                    <option value="">取消原因</option>
                  </select>
                </div>
                <button type="button" @click="confirmToggle = !confirmToggle" class="btn confirm">
                  確認
                </button>
              </form>
            </td>
          </tr>
          <tr>
            <td>123456789012345</td>
            <td>123456789012345</td>
            <td>999,999,999</td>
            <td>TRC</td>
            <td>999,999,999</td>
            <td class="icon">
              <div class="comment" @click="chatToggle = !chatToggle">
                <i class="fa-solid fa-comment-dots"></i>
              </div>
            </td>
            <td class="status-g">交易中</td>
            <td>
              <form action="">
                <div class="select-col">
                  <select name="" id="">
                    <option value="">交易取消</option>
                    <option value="">交易成功</option>
                  </select>
                </div>
                <div class="select-col">
                  <select name="" id="">
                    <option value="">取消原因</option>
                  </select>
                </div>
                <button type="button" @click="confirmToggle = !confirmToggle" class="btn confirm">
                  確認
                </button>
              </form>
            </td>
          </tr>
          <tr>
            <td>123456789012345</td>
            <td>123456789012345</td>
            <td>999,999,999</td>
            <td>TRC</td>
            <td>999,999,999</td>
            <td class="icon">
              <div class="comment" @click="chatToggle = !chatToggle">
                <i class="fa-solid fa-comment-dots"></i>
              </div>
            </td>
            <td class="status-g">交易中</td>
            <td>
              <form action="">
                <div class="select-col">
                  <select name="" id="">
                    <option value="">交易取消</option>
                    <option value="">交易成功</option>
                  </select>
                </div>
                <div class="select-col">
                  <select name="" id="">
                    <option value="">取消原因</option>
                  </select>
                </div>
                <button type="button" @click="confirmToggle = !confirmToggle" class="btn confirm">
                  確認
                </button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination />
    </div>
  </div>

  <div v-if="chatToggle" class="modal">
    <div class="mask">
      <div class="chat-modal">
        <div class="header">
          <div class="user">
            <div class="icon">
              <img src="" alt="" />
            </div>
            <div class="detail">
              <div class="title">賣方</div>
              <div class="name">THEAPPLE</div>
            </div>
          </div>
          <div class="close-icon" @click="chatToggle = !chatToggle">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div class="body">
          <div class="tips">
            提醒：在完成交易前，請賣家、買家留存TXID相關截圖，並上傳至交易中心。
          </div>
          <div class="chat">
            <div class="left">
              <div class="comment">
                <div class="i"></div>
                <div class="m">一二三四五六七八九十一二三四五</div>
                <div class="t">18:45</div>
              </div>
            </div>
            <div class="right">
              <div class="comment">
                <div class="t">18:45</div>
                <div class="m">
                  一二三四五六七八九十一二三四五 一二三四五六七八九十一二三四五
                  一二三四五六七八九
                </div>
                <div class="i"></div>
              </div>
            </div>
            <div class="left">
              <div class="comment">
                <div class="i"></div>
                <div class="m">一二三四五六七八九</div>
                <div class="t">18:45</div>
              </div>
            </div>
            <div class="date">
              <span> 2022/07/24 </span>
            </div>
            <div class="right">
              <div class="comment">
                <div class="t">18:45</div>
                <div class="m">一二三四五六七</div>
                <div class="i"></div>
              </div>
            </div>
            <div class="right">
              <div class="comment">
                <div class="t">22:45</div>
                <div class="m">一二三四</div>
                <div class="i"></div>
              </div>
            </div>
          </div>
          <div class="quick_command">
            <div class="options">
              <div class="option">發出收幣地址</div>
              <div class="option">請您點擊交易完成</div>
              <div class="option">請您點擊交易取消</div>
              <div class="option">完成發幣請查收</div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="upload">
            <label for="uploadfile">
              <i class="fa-solid fa-plus"></i>
            </label>
            <input type="file" class="hidden" id="uploadfile" />
          </div>
          <div class="input-col">
            <input class="input-control" type="text" placeholder="請輸入內容" />
          </div>
          <button type="submit" class="submit">
            <i class="fa-solid fa-location-arrow"></i>
          </button>
          <div class="mic">
            <i class="fa-solid fa-microphone"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="confirmToggle" class="modal">
        <div class="mask" @click="confirmToggle = !confirmToggle">
            <div class="confirm-modal">
                <div class="header">
                    按下確認後，狀態將會無法復原或編輯，您確定要變更為ＸＸＸ狀態？
                </div>
                <div class="footer">
                    <div class="links">
                        <button type="button" class="link" @click="confirmToggle = !confirmToggle">取消</button>
                        <button type="button" class="link" @click="confirmToggle = !confirmToggle">確認</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="../../assets/css/trading/trading.scss" scoped></style>
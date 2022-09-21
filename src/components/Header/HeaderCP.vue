<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

import { storeToRefs } from "pinia";
import store from "../../store";

const loginStatus = store.useLoginStore();
const useUserStore = store.useUserStore();
const { login } = storeToRefs(loginStatus);
const { user } = storeToRefs(useUserStore);
// console.log(user.value);

const menu_switch = ref(false);
const menu_collapse = ref(false);
const notify_switch = ref(false);

const switchMenu = () => {
  menu_switch.value = !menu_switch.value;

  if (menu_collapse.value) {
    menu_collapse.value = !menu_collapse.value;
  }
};

const switchCollapse = () => {
  menu_collapse.value = !menu_collapse.value;
};

const switchNotifyMenu = () => {
  notify_switch.value = !notify_switch.value;
};

const router = useRouter();
let currentPathObject = router.currentRoute.value;

// 測試用
// console.log("Route Object", currentPathObject);

const navButtons = [
  {
    title: "娛樂",
    link: "/news",
  },
  {
    title: "財經",
    link: "/news",
  },
  {
    title: "國際",
    link: "/news",
  },
  {
    title: "體育",
    link: "/news",
  },
  {
    title: "政治",
    link: "/news",
  },
  {
    title: "社會",
    link: "/news",
  },
  {
    title: "幣圈",
    link: "/news",
  },
  {
    title: "體育",
    link: "/news",
  },
  {
    title: "政治",
    link: "/news",
  },
  {
    title: "社會",
    link: "/news",
  },
  {
    title: "幣圈",
    link: "/news",
  },
];
</script>

<template>
  <header id="header" class="layoutHeader">
    <div class="custom-container c-1620 flex">
      <div class="header-l flex-none">
        <router-link to="/" class="logo">
          <img src="/images/layout_logo.svg" alt="logo" />
          <span class="site-name">共同市場</span>
        </router-link>
      </div>
      <div class="header-r shrink">
        <template v-if="!login">
          <router-link
            v-if="currentPathObject.name === 'Index'"
            to="/register"
            class="register-btn"
          >
            免費註冊
          </router-link>
          <router-link to="/login" class="account">
            <i class="fa-solid fa-user"></i>
          </router-link>
        </template>

        <template v-if="login">
          <div class="search">
            <input type="text" class="search" placeholder="搜尋" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div class="point">
            <i class="fa-solid fa-sack-dollar"></i>
            <div class="number">{{ user.user_pointA }}</div>
          </div>
          <div
            class="notify"
            :class="{ active: notify_switch }"
            @click="switchNotifyMenu"
          >
            <i class="fa-solid fa-bell"></i>
          </div>
          <button class="account">
            <i class="fa-solid fa-user"></i>
          </button>
        </template>
        <div class="burger-menu">
          <button
            class="burger burger-style"
            :class="{ on: menu_switch }"
            @click="switchMenu"
          >
            <span></span>
          </button>

          <div class="menu" :class="{ on: menu_switch }">
            <div class="main-menu">
              <nav class="desktop">
                <div class="buttons">
                  <button
                    class="menu-botton collapse-menu"
                    @click="switchCollapse"
                  >
                    <i class="fa-solid fa-comment-dots"></i>
                    <div>話題新聞</div>
                  </button>
                  <router-link to="/news" class="menu-botton">
                    <i class="fa-solid fa-newspaper"></i>
                    <div>新聞列表</div>
                  </router-link>
                </div>
                <div class="buttons">
                  <router-link to="/stake/hot" class="menu-botton">
                    <i class="fa-solid fa-fire"></i>
                    <div>熱門下注</div>
                  </router-link>
                  <router-link to="/lottery/list" class="menu-botton">
                    <i class="fa-solid fa-rectangle-list"></i>
                    <div>投注列表</div>
                  </router-link>
                  <router-link to="/trading" class="menu-botton">
                    <i class="fa-solid fa-hand-holding-dollar"></i>
                    <div>交易中心</div>
                  </router-link>
                </div>
                <div class="buttons">
                  <router-link to="/results" class="menu-botton">
                    <i class="fa-solid fa-address-card"></i>
                    <div>會員戰績</div>
                  </router-link>
                  <router-link to="#" class="menu-botton">
                    <i class="fa-solid fa-crown"></i>
                    <div>活動中心</div>
                  </router-link>
                </div>
              </nav>

              <nav class="mobile">
                <div class="buttons">
                  <button class="menu-botton collapse-menu">
                    <i class="fa-solid fa-comment-dots"></i>
                    <div>話題新聞</div>
                  </button>
                  <router-link to="/news" class="menu-botton">
                    <i class="fa-solid fa-newspaper"></i>
                    <div>新聞列表</div>
                  </router-link>
                  <router-link to="/stake/hot" class="menu-botton">
                    <i class="fa-solid fa-fire"></i>
                    <div>熱門下注</div>
                  </router-link>
                  <router-link to="/lottery/list" class="menu-botton">
                    <i class="fa-solid fa-rectangle-list"></i>
                    <div>投注列表</div>
                  </router-link>
                  <router-link to="/trading" class="menu-botton">
                    <i class="fa-solid fa-hand-holding-dollar"></i>
                    <div>交易中心</div>
                  </router-link>
                  <router-link to="/results" class="menu-botton">
                    <i class="fa-solid fa-address-card"></i>
                    <div>會員戰績</div>
                  </router-link>
                  <router-link to="#" class="menu-botton">
                    <i class="fa-solid fa-crown"></i>
                    <div>活動中心</div>
                  </router-link>
                </div>
              </nav>
            </div>

            <div class="menu-modal" :class="{ active: menu_collapse }">
              <div class="close-btn">
                <button
                  class="menu-link-button burger-style"
                  @click="switchCollapse"
                >
                  <span></span>
                </button>
              </div>
              <div class="modal-layout">
                <div class="link-list">
                  <nav class="menu-links">
                    <router-link
                      v-for="button in navButtons"
                      :key="button.title"
                      :to="button.link"
                      class="menu-link"
                    >
                      {{ button.title }}
                    </router-link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed-buttons">
            <div class="quick_link">
                <div class="menu-btn">
                    <div class="icon">
                        <i class="fa-solid fa-angle-up"></i>
                        <!-- <i class="fa-solid fa-angle-down"></i> -->
                    </div>
                    <div class="title">注單</div>
                </div>
                <div class="btn-list">
                    <a href="#">
                        <div class="number">
                            5
                        </div>
                        搓合中
                    </a>
                    <a href="#">
                        <div class="number">
                            8
                        </div>
                        已成交
                    </a>
                    <a href="#">
                        <div class="number">
                            99+
                        </div>
                        未成交
                    </a>
                </div>
            </div>
            <a href="#" class="quick_link">
                客服中心
            </a>
            <a href="#header" class="btt">
                <i class="fa-solid fa-arrow-up"></i>
            </a>
        </div>
  </header>

  <div
    class="h-notify-list"
    :class="{ active: notify_switch }"
    v-if="currentPathObject.name !== 'Index' && login"
  >
    <div class="notify-center">
      <div class="title">通知中心</div>
      <div class="event-notify">
        <div class="left">
          <div class="msg-title">活動通知 <span class="number">99</span></div>
          <div class="text">一二三四五六七八九十一二三四五六七八九十...</div>
        </div>
        <div class="right">
          <button type="button">
            <i class="fa-solid fa-circle-chevron-right"></i>
          </button>
        </div>
      </div>
      <div class="stake-notify">
        <div class="left">
          <div class="msg-title">下注通知 <span class="number">5</span></div>
          <div class="text">一二三四五六七八九十一二三四五六七八九十...</div>
        </div>
        <div class="right">
          <button type="button">
            <i class="fa-solid fa-circle-chevron-right"></i>
          </button>
        </div>
      </div>
      <div class="system-notify">
        <div class="left">
          <div class="msg-title">系統通知</div>
          <div class="text">一二三四五六七八九十一二三四五六七八九十...</div>
        </div>
        <div class="right">
          <button type="button">
            <i class="fa-solid fa-circle-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="notify-detail">
      <div class="title">
        活動通知
        <button type="button">標記為已讀</button>
      </div>
      <div class="detail-list">
        <router-link to="#" class="detail">
          <div class="left">
            <div class="pic">
              <img src="" alt="" />
            </div>
          </div>
          <div class="mid">
            <div class="event-name">5月任務活動</div>
            <div class="event-title">趁現在完成活動任務！可獲得100Ｕ幣！</div>
            <div class="time">2022/04/27 21:00</div>
          </div>
          <div class="right">
            <div class="unread icon"></div>
          </div>
        </router-link>
        <router-link to="#" class="detail">
          <div class="left">
            <div class="pic">
              <img src="" alt="" />
            </div>
          </div>
          <div class="mid">
            <div class="event-name">5月任務活動</div>
            <div class="event-title">趁現在完成活動任務！可獲得100Ｕ幣！</div>
            <div class="time">2022/04/27 21:00</div>
          </div>
          <div class="right">
            <div class="unread icon"></div>
          </div>
        </router-link>
        <router-link to="#" class="detail">
          <div class="left">
            <div class="pic">
              <img src="" alt="" />
            </div>
          </div>
          <div class="mid">
            <div class="event-name">5月任務活動</div>
            <div class="event-title">趁現在完成活動任務！可獲得100Ｕ幣！</div>
            <div class="time">2022/04/27 21:00</div>
          </div>
          <div class="right">
            <div class="icon"></div>
          </div>
        </router-link>
        <router-link to="#" class="detail">
          <div class="left">
            <div class="pic">
              <img src="" alt="" />
            </div>
          </div>
          <div class="mid">
            <div class="event-name">5月任務活動</div>
            <div class="event-title">趁現在完成活動任務！可獲得100Ｕ幣！</div>
            <div class="time">2022/04/27 21:00</div>
          </div>
          <div class="right">
            <div class="icon"></div>
          </div>
        </router-link>
      </div>
    </div>

    <div class="trade-center-notify">
      <div class="title">交易中心通知</div>
      <div class="notify-list">
        <router-link to="#" class="note">
          <div class="left">
            <div class="pic">
              <img src="" alt="" />
            </div>
          </div>
          <div class="right">
            <div class="msg-title">私訓提醒</div>
            <div class="text">來自XXXXXX的聊天訊息，前往交易中心確認...</div>
            <div class="time">2022/04/27 21:00</div>
          </div>
        </router-link>
        <router-link to="#" class="note">
          <div class="left">
            <div class="pic">
              <img src="" alt="" />
            </div>
          </div>
          <div class="right">
            <div class="msg-title">私訓提醒</div>
            <div class="text">來自XXXXXX的聊天訊息，前往交易中心確認...</div>
            <div class="time">2022/04/27 21:00</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style src="../../assets/css/layout.css" scoped></style>
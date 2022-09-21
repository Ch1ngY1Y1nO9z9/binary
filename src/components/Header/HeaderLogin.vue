<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

import { storeToRefs } from "pinia";
import store from "../../store";

const loginStatus = store.useLoginStore();
const useUserStore = store.useUserStore();
const { login } = storeToRefs(loginStatus);
const { user } = storeToRefs(useUserStore);
console.log(user.value);

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
console.log("Route Object", currentPathObject);

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
          <img src="/images/logo.svg" alt="logo" />
          <span class="site-name">共同市場</span>
        </router-link>
      </div>
      <div class="header-r shrink">

        <router-link to="/login" class="account">
          <i class="fa-solid fa-user"></i>
        </router-link>

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
  </header>
</template> 

<style src="../../assets/css/layout.css" scoped></style>  
<style src="../../assets/css/login/login.css" scoped></style>  
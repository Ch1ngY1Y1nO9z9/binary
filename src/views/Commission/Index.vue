<script lang="ts" setup>
    import { ref } from "vue";
    import LayoutCP from "../../layouts/LayoutCP.vue";
    import Title from "../../utilities/CPTitle.vue";
    import routeName from "../../utilities/getRoute/getRoute";
    
    const title = ref("");
    const { name } = routeName();
    
    // 根據頁面判斷不同的標題
    if (name === "Credit") {
      title.value = "返佣列表";
    } else {
      title.value = "我的推薦好友";
    }
    </script>
                
                <template>
      <LayoutCP>
        <template v-slot:title>
          <Title
            :title="title"
            subtitle="推薦績效"
            returnText="返回會員中心"
            returnLink="/user_centre"
          />
        </template>
        <router-view></router-view>
      </LayoutCP>
    </template>
                
                
<script lang="ts" setup>
import { ref } from "vue";
import LayoutCP from "../../layouts/LayoutCP.vue";
import Title from "../../utilities/CPTitle.vue";
import routeName from "../../utilities/getRoute/getRoute";

const title = ref("");
const { name } = routeName();

// 根據頁面判斷不同的標題
if (name === "ChangePassword" || name === "ChangeWalletPassword") {
  title.value = "修改密碼";
}else if(name === 'Results') {
  title.value = "個人戰績";
} else {
  title.value = "個人檔案";
}
</script>
    
    <template>
  <LayoutCP>
    <template v-slot:title>
      <Title
        :title="title"
        subtitle="帳戶設定"
        returnText="返回會員中心"
        returnLink="/user_centre"
      />
    </template>

    <router-view></router-view>
  </LayoutCP>
</template>
    
    
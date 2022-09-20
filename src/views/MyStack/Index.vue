<script lang="ts" setup>
import { ref } from "vue";
import LayoutCP from "../../layouts/LayoutCP.vue";
import Title from "../../utilities/CPTitle.vue";
import routeName from "../../utilities/getRoute/getRoute";

const title = ref("");
const { name } = routeName();

// 根據頁面判斷不同的標題
if (name === "MyFollow") {
  title.value = "會員跟單列表";
} else if (name === "Track") {
  title.value = "注單追蹤";
} else {
  title.value = "定期定額列表詳情";
}
</script>
            
            <template>
  <LayoutCP>
    <template v-slot:title>
      <Title
        :title="title"
        subtitle="我的注單"
        returnText="返回會員中心"
        returnLink="/user_centre"
      />
    </template>
    <router-view></router-view>
  </LayoutCP>
</template>
            
            
<script lang="ts" setup>
import { ref } from "vue";
import LayoutCP from "../../layouts/LayoutCP.vue";
import Title from "../../utilities/CPTitle.vue";
import routeName from "../../utilities/getRoute/getRoute";

const title = ref("");
const { name } = routeName();

// 根據頁面判斷不同的標題
if (name === "GamesCollect") {
  title.value = "遊戲收藏";
} else {
  title.value = "新聞收藏";
}
</script>
        
        <template>
  <LayoutCP>
    <template v-slot:title>
      <Title
        :title="title"
        subtitle="收藏清單"
        returnText="返回會員中心"
        returnLink="/user_centre"
      />
    </template>

    <router-view></router-view>
  </LayoutCP>
</template>
        
        
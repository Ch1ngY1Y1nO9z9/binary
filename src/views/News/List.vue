
<script lang="ts" setup>
import LayoutCP from "/src/layouts/LayoutCP.vue";
import Title from "/src/utilities/CPTitle.vue";
import Recommend from "/src/utilities/swiper/recommend.vue";
import TopNews from "/src/utilities/swiper/TopNews.vue";
import Catalog from "/src/utilities/sectionTemplate/Catalog.vue";
</script>
    
    <template>
  <LayoutCP>
    <template v-slot:title>
      <Title
        title="政治新聞"
        subtitle="話題新聞"
        returnText="返回"
        returnLink="/news"
      />
    </template>
    <Recommend />
    <TopNews />
    <Catalog />
  </LayoutCP>
</template>

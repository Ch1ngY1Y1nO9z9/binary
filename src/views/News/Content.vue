
<script lang="ts" setup>
import LayoutCP from "/src/layouts/LayoutCP.vue";
import Title from "/src/utilities/CPTitle.vue";
import Article from "/src/utilities/sectionTemplate/Article.vue";
import StakeCards from "/src/utilities/sectionTemplate/StakeCards.vue";
import Interests from "/src/utilities/swiper/Interests.vue";
import Related from "/src/utilities/sectionTemplate/Related.vue";
</script>
    
    <template>
  <LayoutCP>
    <template v-slot:title>
      <Title
        title="政治新聞"
        subtitle="話題新聞"
        returnText="返回"
        returnLink="/news/type"
      />
    </template>
    <Article />
    <StakeCards />
    <Interests />
    <Related />
  </LayoutCP>
</template>

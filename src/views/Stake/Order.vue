<script lang="ts" setup>
import LayoutCP from "/src/layouts/LayoutCP.vue";
import Title from "/src/utilities/CPTitle.vue";
import Related from "../../utilities/sectionTemplate/Related.vue";
import Interests from "../../utilities/swiper/Interests.vue";
import Order from "../../utilities/sectionTemplate/Order.vue";
</script>

<template>
  <LayoutCP>
    <template v-slot:title>
      <Title
        title="投注單"
        subtitle="熱門下注"
        returnText="返回熱門下注"
        returnLink="/stake"
      />
    </template>
    <Order />
    <Interests />
    <Related />
  </LayoutCP>
</template>

<script lang="ts" setup>
import LayoutIndex from '/src/layouts/LayoutIndex.vue'
import Banner from "/src/components/Index/Banner.vue";
import TopNews from "/src/components/Index/TopNews.vue";
import NewsList from "/src/components/Index/NewsList.vue";
import Follow from "/src/components/Index/Follow.vue";
import Cards from "/src/components/Index/Cards.vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
</script>

<template>
  <LayoutIndex>
    <Banner />
    <TopNews />
    <NewsList />
    <Follow />
    <Cards />
  </LayoutIndex>
</template>

<script lang="ts" setup>
import LayoutIndex from '../../layouts/LayoutIndex.vue'
import Banner from "../../components/Index/Banner.vue";
import TopNews from "../../components/Index/TopNews.vue";
import NewsList from "../../components/Index/NewsList.vue";
import Follow from "../../components/Index/Follow.vue";
import Cards from "../../components/Index/Cards.vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../../assets/js/swiper.js";
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
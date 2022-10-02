<script lang="ts" setup>
import { ref } from "vue";
import { defineProps } from "vue";


// 使用此頁籤需傳入頁面的url、單頁面最大顯示筆數、總資料筆數來做出頁籤
const props = defineProps({
  pageUrl: String,
  numberOfData: Number,
  pageLimit: Number
});

const current_page = ref();
</script>

<template>
  <div class="pagination">
    <button class="prev-arrow">
      <i class="fa-solid fa-angle-left"></i>
    </button>
    <div class="pages">
      <router-link class="active" to="#">1</router-link>
      <router-link to="#">2</router-link>
      <router-link to="#">3</router-link>
      <router-link to="#">...</router-link>
      <router-link to="#">13</router-link>
    </div>
    <button class="next-arrow">
      <i class="fa-solid fa-angle-right"></i>
    </button>
  </div>
</template>

<style lang="scss" src="../../assets/css/utilities/pagination.scss" scoped></style>
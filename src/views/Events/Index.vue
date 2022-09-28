<script lang="ts" setup>
import { ref } from "vue";
import LayoutCP from "../../layouts/LayoutCP.vue";
import Title from "/src/utilities/Title.vue";
import routeName from "../../utilities/getRoute/getRoute";
</script>
        
<template>
  <LayoutCP>
    <template v-slot:title>
      <Title title="我的活動" subtitle="會員中心" />
    </template>

    <router-view></router-view>
  </LayoutCP>
</template>
        
        
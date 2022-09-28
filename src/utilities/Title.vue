<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps({
  title: String,
});
</script>
    
<template>
  <h1 class="pagetitle">{{ title }}</h1>
</template>
    
    
    <style>
</style>

<style src="../assets/css/pagetitle.scss" scoped></style>
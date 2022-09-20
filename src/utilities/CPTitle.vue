<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps({
  title: String,
  subtitle: String,
  returnText: String,
  returnLink: String,
});

</script>

<template>
  <h1 class="pagetitle cp">
    <div class="title">
      <div class="subtitle">{{ subtitle }}</div>
      {{ title }}
    </div>
    <router-link :to=returnLink class="return-btn"> {{ returnText }} </router-link>
  </h1>
</template>

<style src="../assets/css/layout.css" scoped></style>
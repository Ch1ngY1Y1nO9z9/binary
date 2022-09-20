<script lang="ts">
export default {
  name: "LayoutIndex",
};
</script>
    
<script lang="ts" setup>
import { onMounted, useSlots } from "vue";
import Header from "../components/Header/HeaderIndex.vue";
import Footer from "../components/Footer/FooterIndex.vue";

const slot = useSlots();

onMounted(()=>{
  window.scrollTo(0, 0);
})
</script>
    
<template>
  <Header />

  <slot></slot>

  <Footer />
</template>
<script lang="ts">
export default {
  name: "LoginLayout",
};
</script>

<script lang="ts" setup>
import { onMounted, useSlots } from "vue";
import Header from "../components/Header/HeaderLogin.vue";
import Footer from "../components/Footer/FooterSp.vue";

const slot = useSlots();

onMounted(()=>{
  window.scrollTo(0, 0);
})

</script>

<template>
  <Header />

  <slot name="title"></slot>

  <section class="content">
    <slot></slot>
  </section>

  <Footer />
</template>
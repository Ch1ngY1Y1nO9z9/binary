<script lang="ts">
export default {
  name: "LoginLayCP",
};
</script>
    
<script lang="ts" setup>
import { onMounted, useSlots } from "vue";
import Header from "../components/Header/HeaderCP.vue";
import Footer from "../components/Footer/FooterCP.vue";

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

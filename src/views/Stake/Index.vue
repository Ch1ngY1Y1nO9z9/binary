
<script lang="ts" setup>
    import LayoutCP from "/src/layouts/LayoutCP.vue";
    import Title from "/src/utilities/Title.vue";
    import Recommend from "../../utilities/swiper/Recommend.vue";
    import SwiperSection from "/src/utilities/swiper/SwiperSection_Stake.vue";

    const newsType = [
        {
            name:'entertainment',
            title:'金融 TOP10',
        },
        {
            name:'economic',
            title:'時事 TOP10',
        },
        {
            name:'national',
            title:'體育 TOP10',
        }
    ]
    </script>
     
    <template>
  <LayoutCP>
    <template v-slot:title>
      <Title title="熱門下注" />
    </template>
    <Recommend />
    <SwiperSection
      v-for="type in newsType"
      :key="type.name"
      :name="type.name"
      :title="type.title"
    />
  </LayoutCP>
</template>

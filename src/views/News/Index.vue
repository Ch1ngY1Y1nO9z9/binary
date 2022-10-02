
<script lang="ts" setup>
    import LayoutCP from "/src/layouts/LayoutCP.vue";
    import Title from "/src/utilities/Title.vue";
    import Recommend from "../../utilities/swiper/Recommend.vue";
    import SwiperSection from "/src/utilities/swiper/SwiperSection.vue";

    const newsType = [
        {
            name:'entertainment',
            title:'娛樂',
        },
        {
            name:'economic',
            title:'財經',
        },
        {
            name:'national',
            title:'國際',
        },
        {
            name:'sports',
            title:'體育',
        },
        {
            name:'political',
            title:'國際',
        },
        {
            name:'social',
            title:'社會',
        },
        {
            name:'cryptocurrency',
            title:'幣圈',
        },
    ]
    </script>
    
    <template>
  <LayoutCP>
    <template v-slot:title>
      <Title title="話題新聞" />
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

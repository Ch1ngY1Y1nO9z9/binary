<script lang="ts" setup>
import LayoutCP from "../../layouts/LayoutCP.vue";
import Title from "../../utilities/Title.vue";
import Activity from "../../components/UserCentre/Activity.vue";
import MenuList from "../../components/UserCentre/MenuList.vue";
</script>

<template>
  <LayoutCP>
    <template v-slot:title>
      <Title title="會員中心" />
    </template>
    <div class="centre">
      <div class="custom-container c-1056 p-200">
        <Activity />
        <MenuList />
      </div>
    </div>
  </LayoutCP>
</template>

<style src="../../assets/css/layout.css" scoped></style>
<script lang="ts" setup>
const activeity = [
  {
    title: "好友推廣",
    link: "/user_centre/promote",
    pic: "/images/event/friends-promote.jpg",
  },
  {
    title: "我的活動",
    link: "/events/index",
    pic: "/images/event/my-event.jpg",
  },
];
</script>

<template>
  <div class="activity">
    <router-link :to="block.link" class="block"  v-for="block in activeity" :key="block.title">
      <div class="title">{{ block.title }}</div>
      <div class="pic">
        <img :src="block.pic" alt="" />
      </div>
    </router-link>
  </div>
</template>

<style src="../../assets/css/user/centre.scss" scoped></style>
<script lang="ts" setup>
const menulist = [
  {
    id: 1,
    title: "帳戶設定",
    icon: '<i class="fa-solid fa-circle-user"></i>',
    links: [
      {
        linkName: "個人檔案",
        link: "/account/profile",
      },
      {
        linkName: "個人戰績",
        link: "/account/results",
      },
      {
        linkName: "修改密碼",
        link: "/account/change_password",
      },
    ],
  },
  {
    id: 2,
    title: "我的錢包",
    icon: '<i class="fa-solid fa-wallet"></i>',
    links: [
      {
        linkName: "錢包紀錄",
        link: "/purse/purseRecords",
      },
      {
        linkName: "錢包加值",
        link: "/purse/addValue",
      },
      {
        linkName: "轉帳",
        link: "/purse/transfer",
      },
    ],
  },
  {
    id: 3,
    title: "我的注單",
    icon: '<i class="fa-solid fa-file-invoice-dollar"></i> ',
    links: [
      {
        linkName: "注單追蹤",
        link: "/myStake/track",
      },
      {
        linkName: "我的跟單列表",
        link: "/myStake/myFollow",
      },
      {
        linkName: "金融定期定額列表",
        link: "/myStake/schedule",
      },
    ],
  },
  {
    id: 4,
    title: "收藏清單",
    icon: '<i class="fa-solid fa-bookmark"></i>',
    links: [
      {
        linkName: "新聞收藏",
        link: "/collect/news",
      },
      {
        linkName: "遊戲收藏",
        link: "/collect/games",
      },
    ],
  },
  {
    id: 5,
    title: "推薦績效",
    icon: '<i class="fa-solid fa-chart-column"></i>',
    links: [
      {
        linkName: "返佣列表",
        link: "/commission/credit",
      },
      {
        linkName: "我的好友",
        link: "/commission/friends",
      },
    ],
  },
  {
    id: 6,
    title: "得獎專區",
    icon: '<i class="fa-solid fa-trophy"></i>',
    links: [
      {
        linkName: "項目",
        link: "#",
      },
      {
        linkName: "項目",
        link: "#",
      },
    ],
  },
];
</script>
    

<template>
  <div class="menu-list">
    <div class="menu" v-for="menu in menulist" :key="menu.id">
      <div class="title">
        <span class="icon" v-html="menu.icon"></span>
        {{ menu.title }}
      </div>
      <div class="link" v-for="link in menu.links" :key="link.link">
        <router-link :to="link.link">{{ link.linkName }}</router-link>
      </div>
    </div>
  </div>
</template>

<style src="../../assets/css/user/centre.css" scoped></style>
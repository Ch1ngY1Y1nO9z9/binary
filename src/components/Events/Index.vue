<script lang="ts" setup>
import { ref } from "vue";

const eventsList = [
  {
    title: "簽到好禮",
    bg: "/images/event/singup-bg.jpg",
    key: "singup",
  },
  {
    title: "首儲拿好禮",
    bg: "/images/event/first-purchase-bg.jpg",
    key: "first-purchase",
  },
  {
    title: "儲值加碼送",
    bg: "/images/event/purchase-plus-bg.jpg",
    key: "purchase-plus",
  },
  {
    title: "限時任務",
    bg: "/images/event/time-limit-bg.jpg",
    key: "time-limit",
  },
  {
    title: "排行榜",
    bg: "/images/event/ranking-bg.jpg",
    key: "ranking",
  },
  {
    title: "邀好友 賺點數(第1重)",
    bg: "/images/event/invite-1-bg.jpg",
    key: "invite-1",
  },
  {
    title: "邀好友 賺點數(第2重)",
    bg: "/images/event/invite-2-bg.jpg",
    key: "invite-2",
  },
];

const showModal = ref(false);
</script>

<template>
  <div class="events">
    <div class="custom-container c-843 p-200">
      <div class="flex justify-between flex-wrap">
        <div
          v-for="event in eventsList"
          :key="event.key"
          :ref="event.key"
          class="event"
          :style="`background-image: url(${event.bg})`"
          @click="showModal = !showModal"
        >
          {{ event.title }}
        </div>
      </div>
      <n-modal
        transform-origin="center"
        :mask-closable="false"
        v-model:show="showModal"
      >
        <n-card
          class="custom-card"
          :bordered="false"
          size="huge"
          role="dialog"
          aria-modal="true"
          content-style="padding: 0;"
        >
          <div class="card-header">
            <button type="button" @click="showModal = false">
              <i class="fa-solid fa-x"></i>
            </button>
            <div class="date">2022/05/01 ~ 2022/05/07</div>
          </div>

          <div class="card-body">
            <div class="dayly-rewards">
              <div class="reward get">
                <div class="pill-date rounded-full">Day 1</div>
                <div class="content">
                  <div class="get-icon rounded-full">GET</div>
                  <div class="icon">
                    <i class="fa-solid fa-coins"></i>
                    <p><span>10</span> 點數</p>
                  </div>
                </div>
              </div>

              <div class="reward current">
                <div class="pill-date rounded-full">Day 2</div>
                <div class="content">
                  <div class="get-icon rounded-full">GET</div>
                  <div class="icon">
                    <i class="fa-solid fa-sack-dollar"></i>
                    <p><span>10</span> 點數</p>
                  </div>
                </div>
              </div>

              <div class="reward">
                <div class="pill-date rounded-full">Day 3</div>
                <div class="content">
                  <div class="get-icon rounded-full">GET</div>
                  <div class="icon">
                    <i class="fa-solid fa-sack-dollar"></i>
                    <p><span>10</span> 點數</p>
                  </div>
                </div>
              </div>

              <div class="reward">
                <div class="pill-date rounded-full">Day 4</div>
                <div class="content">
                  <div class="get-icon rounded-full">GET</div>
                  <div class="icon">
                    <i class="fa-solid fa-sack-dollar"></i>
                    <p><span>10</span> 點數</p>
                  </div>
                </div>
              </div>

              <div class="reward">
                <div class="pill-date rounded-full">Day 5</div>
                <div class="content">
                  <div class="get-icon rounded-full">GET</div>
                  <div class="icon">
                    <i class="fa-solid fa-sack-dollar"></i>
                    <p><span>10</span> 點數</p>
                  </div>
                </div>
              </div>

              <div class="reward">
                <div class="pill-date rounded-full">Day 6</div>
                <div class="content">
                  <div class="get-icon rounded-full">GET</div>
                  <div class="icon">
                    <i class="fa-solid fa-sack-dollar"></i>
                    <p><span>10</span> 點數</p>
                  </div>
                </div>
              </div>

              <div class="reward">
                <div class="pill-date rounded-full">Day 7</div>
                <div class="content">
                  <div class="get-icon rounded-full">GET</div>
                  <div class="icon">
                    <i class="fa-solid fa-sack-dollar"></i>
                    <p><span>50</span> 點數</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card-footer">
            <button type="button">領取獎勵</button>
          </div>
        </n-card>
      </n-modal>
    </div>
  </div>
</template>

<style lang="scss" src="../../assets/css/event/event.scss" scoped></style>
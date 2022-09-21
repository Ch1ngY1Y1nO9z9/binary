<script lang="ts" setup>
import RadarChart from "../../utilities/chart/Rader.vue";
// import { Radar } from "vue-chartjs";
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   PointElement,
//   RadialLinearScale,
//   LineElement,
//   Plugin,
// } from "chart.js";

// ChartJS.register(
//   Title,
//   Tooltip,
//   Legend,
//   PointElement,
//   RadialLinearScale,
//   LineElement
// );

// const ctx = document.getElementById("radar-chart");
// const myRadarChart = new Chart(ctx, {
//   type: "radar",
//   data: {
//     labels: ["類別1", "類別1", "類別1", "類別1", "類別1", "類別1", "類別1"],
//     datasets: [
//       {
//         label: "",
//         data: [80, 15, 25, 20, 70, 50, 90],
//         backgroundColor: "rgba(255, 98, 31, 0.7)",
//         borderColor: "rgba(0, 0, 0, 0)",
//         pointBorderColor: "rgba(0, 0, 0, 0)",
//         pointBackgroundColor: "rgba(0, 0, 0, 0)",
//       },
//     ],
//   },
//   options: {
//     responsice: true,
//     legend: {
//       display: false,
//     },
//     tooltips: {
//       enabled: false,
//     },
//     title: {
//       display: false,
//       text: "none",
//     },
//     scale: {
//       ticks: {
//         suggestedMin: 0,
//         suggestedMax: 100,
//         stepSize: 20,
//         callback: function (value, index, values) {
//           if (value === 100) {
//             return "";
//           } else {
//             return value + "%";
//           }
//         },
//       },
//     },
//   },
// });
</script>

<template>
  <div class="result">
    <div class="custom-container c-840 p-200">
      <div class="card-left-layout">
        <div class="board-card">
          <div class="board-detail">
            <div class="board-card-title">勝場</div>
            <div class="board-card-text">1,000,000</div>
          </div>
          <div class="board-detail">
            <div class="board-card-title">勝率</div>
            <div class="board-card-text">75%</div>
          </div>
          <div class="board-detail">
            <div class="board-card-title">累積獲利</div>
            <div class="board-card-text">500,000,000</div>
          </div>
          <div class="board-detail">
            <div class="board-card-title">平均獲利</div>
            <div class="board-card-text">500</div>
          </div>
        </div>
        <div class="chart">
          <RadarChart />
        </div>
      </div>
    </div>
  </div>
</template>

<style src="../../assets/css/layout.css" scoped></style>
<style lang="scss" scoped src="../../assets/css/results/results.scss"></style>
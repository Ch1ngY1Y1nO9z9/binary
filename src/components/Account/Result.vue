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
          <canvas id="radar-chart"> </canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="../../assets/css/results/results.scss"></style>
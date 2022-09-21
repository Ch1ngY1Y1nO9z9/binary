<script lang="ts">
import { defineComponent, h } from "vue";

import { Radar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement
);

export default defineComponent({
  name: "RadarChart",
  components: {
    Radar,
  },
  props: {
    chartId: {
      type: String,
      default: "radar-chart",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
  },
  setup(props) {
    const chartData = {
      labels: ["類別1", "類別1", "類別1", "類別1", "類別1", "類別1", "類別1"],
      datasets: [
        {
          label: "",
          data: [80, 15, 25, 20, 70, 50, 90],
          backgroundColor: "rgba(255, 98, 31, 0.7)",
          borderColor: "rgba(0, 0, 0, 0)",
          pointBorderColor: "rgba(0, 0, 0, 0)",
          pointBackgroundColor: "rgba(0, 0, 0, 0)",
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: false,
      legend: false
    };

    return () =>
      h(Radar, {
        chartData,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
      });
  },
});
</script>

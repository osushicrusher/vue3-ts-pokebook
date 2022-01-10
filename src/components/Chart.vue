<template>
    <PieChart :chartData="pieData" />
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { usePokemonStore } from "../store/pokemon";
import { Chart, ChartData, registerables } from "chart.js";
import { defineComponent } from "vue";
import { PieChart, LineChart } from "vue-chart-3";

// 使用するモジュールの宣言
// ここでは便宜上、全てのモジュールを使用する registerables を使用しているが、
// 必要十分なモジュールのみを宣言することで、ツリーシェイキングを行うことができる
Chart.register(...registerables);

export default defineComponent({
  components: {
    PieChart,
    LineChart,
  },
  setup() {
    const store = usePokemonStore()
    const { findSelectedPokemonStatus } = storeToRefs(store)

    // selectedPokemonのステータス
    const HP = findSelectedPokemonStatus.value.HP
    const Attack = findSelectedPokemonStatus.value.Attack
    const Defense = findSelectedPokemonStatus.value.Defense
    const SpAttack = findSelectedPokemonStatus.value.SpAttack
    const SpDefense = findSelectedPokemonStatus.value.SpDefense
    const Speed = findSelectedPokemonStatus.value.Speed

    // PieChart 用のデータ
    const pieData: ChartData<"pie"> = {
      labels: ["HP", "こうげき", "ぼうぎょ", "とくこう", "とくぼう", "すばやさ"],
      datasets: [
        {
          label: "My First Dataset",
          data: [HP, Attack, Defense, SpAttack, SpDefense, Speed],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(50, 50, 150)",
            "rgb(100, 150, 150)",
            "rgb(150, 100, 100)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    return { pieData };
  },
});
</script>
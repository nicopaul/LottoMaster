<script setup lang="ts">
import EuroJackpotWinningNumbers from "@/components/euroJackpot/EuroJackpotWinningNumbers.vue";

const winningFiveOutOfFifty: number[] = [1, 4, 25, 39, 40];
const winningEuroNumbers: [number, number] = [4, 5];
const drawDate = "20.06.2022";
</script>

<template>
  <div class="latest-results">
    <h2>Latest Results</h2>
    <EuroJackpotWinningNumbers
      v-bind:fiveOutOfFifty="winningFiveOutOfFifty"
      v-bind:euroNumbers="winningEuroNumbers"
      v-bind:draw-date="drawDate"
    />
  </div>
</template>

<style>
.latest-results {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

@media (max-width: 1024px) {
  .latest-results {
    align-items: center;
  }
}
</style>

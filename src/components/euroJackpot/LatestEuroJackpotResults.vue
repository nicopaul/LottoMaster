<script setup lang="ts">
import EuroJackpotWinningNumbers from "@/components/euroJackpot/EuroJackpotWinningNumbers.vue";

// These are test values I used for designig. Since I could not connect to the graphQL api I let them there
// so they can be replaced after graphQL is used.
const winningFiveOutOfFifty: number[] = [1, 4, 25, 39, 40];
const winningEuroNumbers: [number, number] = [4, 5];
const drawDate = "20.06.2022";
</script>

<template>
  <div class="latest-results">
    <h2>Latest Results</h2>
    <span class="not-available"
      >There are currently no draw data available.</span
    >

    <EuroJackpotWinningNumbers
      v-if="false"
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

.not-available {
  margin: 2rem;
}

@media (max-width: 1024px) {
  .latest-results {
    align-items: center;
  }
}
</style>

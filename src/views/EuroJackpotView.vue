<script setup lang="ts">
import LatestEuroJackpotResults from "@/components/euroJackpot/LatestEuroJackpotResults.vue";
</script>

<template>
  <div class="euro-jackpot">
    <LatestEuroJackpotResults />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .euro-jackpot {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

<script setup lang="ts">
import LatestResults from '@/components/euroJackpot/LatestResults.vue';
</script>

<template>
  <div class="euro-jackpot">
    <LatestResults />
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

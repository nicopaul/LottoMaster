<script setup lang="ts">
import LatestMegaMillionsResults from "@/components/megaMillions/LatestMegaMillionsResults.vue";
</script>

<template>
  <div class="mega-million">
    <LatestMegaMillionsResults />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .mega-million {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

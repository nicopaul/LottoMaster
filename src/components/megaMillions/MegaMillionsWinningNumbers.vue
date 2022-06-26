<script setup lang="ts">
const props = defineProps<{
  drawDate: string;
  whiteBalls: string[];
  goldMegaBall: string;
}>();
</script>

<template>
  <div class="winning-number-paper">
    <span>Draw from {{ drawDate }}</span>
    <div class="winning-numbers">
      <div class="white-balls">
        <span
          v-for="number in whiteBalls"
          class="winning-number white-ball"
          :key="number"
        >
          {{ number }}
        </span>
      </div>
      <div class="gold-mega-ball">
        <span class="winning-number gold-ball">
          {{ goldMegaBall }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.winning-number-paper {
  background-color: rgba(45, 45, 45, 1);
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 1px 2px 3px 0 rgba(255, 255, 255, 0.24);
}

.winning-numbers {
  display: flex;
}

.white-balls,
.gold-mega-ball {
  display: flex;
}
.white-balls {
  margin-right: 1rem;
}

.winning-number {
  margin: 0.5rem;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  color: black;
  text-align: center;
}

.white-ball {
  background: radial-gradient(circle at 25px 25px, #bbbbbb, #ffffff);
}

.gold-ball {
  background: radial-gradient(circle at 25px 25px, #e1c340, #ffff80);
}
</style>

<script setup lang="ts">
defineProps<{
  drawDate: string;
  fiveOutOfFifty: number[];
  euroNumbers: [number, number];
}>();
</script>

<template>
  <div class="winning-number-paper">
    <span>Draw from {{ drawDate }}</span>
    <div class="winning-numbers">
      <div class="five-out-of-fifty">
        <span
          v-for="number in fiveOutOfFifty"
          class="winning-number foof"
          :key="number"
        >
          {{ number}}
        </span>
      </div>
      <div class="euro-numbers">
        <span
          v-for="number in euroNumbers"
          class="winning-number euro-number"
          :key="number"
        >
          {{ number}}
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

.five-out-of-fifty,
.euro-numbers {
  display: flex;
}
.five-out-of-fifty {
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

.foof {
  background: radial-gradient(circle at 25px 25px, #E1C340, #ffff80);
}

.euro-number {
  background: radial-gradient(circle at 25px 25px, #E32227, #f4a7a9);
}
</style>

<script setup lang="ts">
import SupportedLottoGameItem from "./SupportedLottoGameItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
</script>

<template>
  <div class="welcome-message">
    <h1>Welcome to Lottomaster</h1>
    <h3>The only place needed for all your Lotto concerns.</h3>
  </div>

  <SupportedLottoGameItem img="@/assets/eurojackpot-logo-vector.svg">
    <template #icon>
      <img
        alt="lotto balls logo"
        class="logo"
        src="@/assets/eurojackpot-logo-vector.svg"
        width="120"
        height="120"
      />
    </template>
    <template #heading>Euro Jackpot</template>

    <div>
      <p>Eurojackpot is a transnational European lottery launched in March 2012. Meanwhile there are 18
        participating european countries. The goal is to match 5 out of 50 and 2 supplementary numbers out of 12.</p>
      <p>The draw takes place every Tuesday and Friday at 9pm (GMT+3)</p>
    </div>
  </SupportedLottoGameItem>

</template>

<style scoped>
.welcome-message {
  display: flex;
  flex-direction: column;
  place-items: flex-start;
  margin-bottom: 2rem;
}

@media (max-width: 1024px) {
  .welcome-message {
    place-items: center;
  }
}
</style>

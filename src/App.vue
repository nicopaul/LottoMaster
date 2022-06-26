<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template class="app">
  <header>
    <div class="wrapper">
      <img
        alt="lotto balls logo"
        class="logo"
        src="@/assets/lotto_balls.png"
        width="70"
        height="35"
      />
      <h1 class="green">Lottomaster</h1>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/euro-jackpot">Euro Jackpot</RouterLink>
      <RouterLink to="/mega-millions">Mega Millions</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-bottom: 2rem;
}

.wrapper {
  display: flex;
  flex-direction: row;
}

.logo {
  display: block;
  margin-right: 1rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (max-width: 1024px) {
  body {
    display: flex;
  }

  header {
    place-items: flex-start;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: start;
    margin-left: -1rem;
    font-size: 1rem;
  }
}
</style>

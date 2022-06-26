<script setup lang="ts">
import axios from "axios";
import MegaMillionsWinningNumbers from "@/components/megaMillions/MegaMillionsWinningNumbers.vue";
import moment from "moment";

/**
 * I am using default data, since I can't get the component to rerender.
 */
let latestData: {
  drawDate: string;
  megaBall: string;
  whiteBalls: string[];
} = {
  drawDate: "06-26-2022",
  megaBall: "18",
  whiteBalls: ["09", "10", "25", "44", "70"],
};

/**
 * I tried to use a different public api, cause I could not connect to the lottohelden.de/graphql api.
 * Retrieving te data works just fine, but I can't get the component to rerender. I had some looks on Stackoverflow,
 * but none of the suggested solutions worked for me. One of the problems may be, that I am using Vue 3, but most of the
 * examples are for V1 / V2. Since I never worked with Vue before I probably am missing something crucial.
 */
axios.get("https://data.ny.gov/resource/5xaw-6ayf.json").then((value) => {
  if (value.data) {
    latestData = {
      drawDate: moment(value.data[0].draw_date).format("MM-DD-YYYY"),
      megaBall: value.data[0].mega_ball,
      whiteBalls: (value.data[0].winning_numbers as string).split(" "),
    };
  }
});
</script>

<template>
  <div class="latest-results" v-if="latestData">
    <h2>Latest Results</h2>
    <MegaMillionsWinningNumbers
      v-bind:drawDate="latestData.drawDate"
      v-bind:whiteBalls="latestData.whiteBalls"
      v-bind:goldMegaBall="latestData.megaBall"
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

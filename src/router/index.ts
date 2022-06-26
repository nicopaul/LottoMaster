import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/euro-jackpot",
      name: "euroJackpot",
      component: () => import("../views/EuroJackpotView.vue"),
    },
    {
      path: "/mega-millions",
      name: "megaMillions",
      component: () => import("../views/MegaMillionsView.vue"),
    },
  ],
});

export default router;

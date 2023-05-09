import { createRouter, createWebHistory } from "vue-router";

// Lazy loading implementation
const Home = () => import("../pages/Home.vue");
const CalcBasal = () => import("../pages/CalcBasal.vue");
const CalcImc = () => import("../pages/CalcImc.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/calc-basal", component: CalcBasal },
  { path: "/calc-imc", component: CalcImc },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };

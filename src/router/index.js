import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/components/views/Home.vue";
import Query from "/src/components/views/Query.vue";
import Result from "/src/components/views/Result.vue";

const routes = [
  {
    path: "/",
    names: "Home",
    component: Home,
  },
  {
    path: "/query",
    names: "Query",
    component: Query,
  },
  {
    path: "/result",
    names: "Result",
    component: Result,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

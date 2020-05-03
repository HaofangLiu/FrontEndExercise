import Vue from "vue";
import VueRouter from "vue-router";
import comA from "../components/comA";
import comB from "../components/comB";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/a",
      name: "comA",
      component: comA,
    },
    {
      path: "/b",
      name: "comB",
      component: comB,
    },
  ],
});

export default router;

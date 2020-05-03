import Vue from "vue";
import VueRouter from "vue-router";
import comA from "../components/comA"

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "comA",
      component: comA,
    },
  ],
});

export default router;

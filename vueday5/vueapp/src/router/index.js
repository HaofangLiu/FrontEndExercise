import VueRouter from "vue-router";
import Detail from "@/views/Detail";
import Main from "@/views/main";
import Test from "@/views/Test"
import Vue from "vue";

Vue.use(VueRouter);


const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    { path: "/", component: Main },
    { path: "/detail", component: Detail }, //每一个对象是一个路由
    { path: "/test", component: Test }, //每一个对象是一个路由
  ],
});

export default router;
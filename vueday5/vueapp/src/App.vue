<template>
  <div id="app">
    <div>lucas's page</div>
    <h1>this is a title</h1>
    <hr />
    <div>
      <!-- <a href="/">main page</a>
      <span> | </span>
      <a href="/detail">detail page</a> -->
      <router-link to="/" tag="button">main page</router-link>
      <span> | </span>
      <router-link to="/detail">detail page</router-link>
      <span> | </span>
      <router-link to="/test">test page</router-link>
    </div>
    <hr />
    <!-- 用来显示路由对象的组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
.router-link-exact-active {
  color: yellow;
}
</style>

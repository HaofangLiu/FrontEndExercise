<template>
  <div id="app">
    <h1>组件通信</h1>
    <hr />
    <ComponentA />
    <hr />
    <ComponentB />
  </div>
</template>

<script>
import ComponentA from "./components/comA";
import ComponentB from "./components/comB";

export default {
  name: "App",
  data() {
    return {
      appVal: "app1",
    };
  },
  components: {
    ComponentA,
    ComponentB,
  },
  methods: {},
};
</script>

<style></style>

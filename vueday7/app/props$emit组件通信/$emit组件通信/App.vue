<template>
  <div id="app">
    <h1>组件通信</h1>
    <ComponentA :dataqw="appVal" @emit="getSonData" />
    <hr />
  </div>
</template>

<script>
import ComponentA from "./components/comA";

export default {
  name: "App",
  data() {
    return {
      appVal: "app1123",
    };
  },
  components: {
    ComponentA,
  },
  methods: {
    getSonData(receivedValue) {
      console.log(receivedValue);
    },
  },
};
</script>

<style></style>

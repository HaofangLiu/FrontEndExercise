<template>
  <div id="app">
    <h1>组件通信</h1>

    <button @click="getCompontAData" ref="appBtn1">get data from component A</button>
    <hr />
    <ComponentA :dataqw="appVal" @emit="getSonData" ref="ca" />

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
    getCompontAData(){
      // console.log(this.$refs.appBtn1.onclick)
      console.log(this.$refs.ca)
    }
  },
};
</script>

<style></style>

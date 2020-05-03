<template>
  <div>
    <h2>component-B</h2>
  </div>
</template>

<script>
import bus from "@/eventbus.js";

export default {
  name: "ComponentB",
  components: {},
  props: [],
  data() {
    return {};
  },
  created() {
    bus.$on("sendValue",val => {
        console.log("comA pass this val to me", val )
    });
  },
  methods: {},
};
</script>

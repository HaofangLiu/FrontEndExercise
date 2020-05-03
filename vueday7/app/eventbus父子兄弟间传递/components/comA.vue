<template>
  <div>
    <h2>component-A</h2>
    <button @click="sendToB">pass to B</button>
  </div>
</template>

<script>
import bus from "@/eventbus.js";

// console.log(bus);

export default {
  name: "ComponentA",
  components: {},
  props: [],
  data() {
    return {
      sonVal: "A",
    };
  },
  methods: {
      sendToB(){
          bus.$emit('sendValue',this.sonVal)
      }
  },
};
</script>

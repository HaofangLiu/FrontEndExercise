<template>
  <div>
    <h2>component-A</h2>
    <button @click="sendDataToB">To B</button>
  </div>
</template>

<script>
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
      sendDataToB(){
          localStorage.setItem('val',this.sonVal)
          this.$router.push({name:'comB'})
      }
  },
};
</script>

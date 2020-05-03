<template>
  <div>
    <h2>component-A : props接收到的父级数据: {{ dataqw }}</h2>
    <button @click="$emit('emit',sonVal)">send data to father</button>
    <button @click="getParent">$parent</button>
  </div>
</template>

<script>
export default {
  name: "ComponentA",
  props: ["dataqw"],
  data(){
      return{
          sonVal: 'sonVal'
      }
  },
  methods:{
      getParent(){
          console.log(this.$parent)
      }
  }
};
</script>

<template>
  <div>
    <h2>component-B</h2>
    <div>{{val}}</div>
  </div>
</template>

<script>

export default {
  name: "ComponentB",
  components: {},
  props: [],
  data() {
    return {
        val:''
    };
  },
  created() {
      this.val = localStorage.getItem('val')
  },
  methods: {},
};
</script>

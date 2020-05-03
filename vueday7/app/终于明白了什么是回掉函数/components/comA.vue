<template>
  <div>
    <h2>component-A</h2>
    <p>this class :{{title}}</p>
    <ul>
      <li v-for="user of users" :key="user.id">
        {{ user.username }} -- {{ user.gender }}
      </li>
    </ul>
  </div>
</template>

<script>
// console.log(bus);

//映射函数，返回一个对象，
// data(){
//       // return this.$store.state.data;
//     }
import { mapState,mapGetters } from "vuex";

export default {
  name: "ComponentA",
  components: {},
  props: [],
  data() {
    return {};
  },
  methods: {},
  // computed: {
  //   data() {
  //     // return this.$store.state.data;
  //     //用mapState替换
  //   },
  // },
  // computed: {
  //   ...mapState(["users","title"]),
  // },
  computed: {
    title(){
      return this.$store.state.title
    },
    users(){
      return this.$store.getters.filterUsers('女')
    }
  },
};
</script>

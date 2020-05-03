<template>
  <div>
    <h2>component-A</h2>
    <p>this class :{{ title }}</p>
    <label>
      <input type="radio" value="男" v-model="gender" @click="changGender" />男
      <input type="radio" value="女" v-model="gender" @click="changGender" />女
      <input
        type="radio"
        value="All"
        v-model="gender"
        @click="changGender"
      />All
    </label>
    <ul>
      <li v-for="user of users" :key="user.id">
        {{ user.username }} -- {{ user.gender }}
      </li>
    </ul>

    <p>
      Name:
      <input type="text" v-model="addUser.username" />
    </p>
    <p>
      Gender:
      <select v-model="addUser.gender">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </p>
    <button @click="postUser">提交</button>
  </div>
</template>

<script>
// console.log(bus);

//映射函数，返回一个对象，
// data(){
//       // return this.$store.state.data;
//     }
import { mapState, mapGetters } from "vuex";

export default {
  name: "ComponentA",
  components: {},
  props: [],
  data() {
    return {
      gender: "All",
      addUser: {
        username: "",
        gender: "男",
      },
    };
  },
  methods: {
    changGender(e) {
      // console.log(e);
      this.gender = e.target.value;
    },
    postUser() {
      this.$store.commit("postNewUser", { ...this.addUser });
    },
  },
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
    title() {
      return this.$store.state.title;
    },
    users() {
      return this.gender === "All"
        ? this.$store.state.users
        : this.$store.getters.filterUsers(this.gender);
    },
  },
};
</script>

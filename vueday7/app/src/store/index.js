import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title: "classFrontEnd",
    users: [
      { id: 1, username: "lucas", gender: "男" },
      { id: 2, username: "ingrid", gender: "男" },
      { id: 3, username: "winsron", gender: "男" },
      { id: 4, username: "TFK", gender: "男" },
      { id: 5, username: "amandon", gender: "女" },
      { id: 6, username: "Allen", gender: "女" },
    ],
  },

  getters: {
    filterUsers: (state) => (gender) => {
      return state.users.filter((user) => user.gender === gender);
    },
  },

  mutations: {
    postNewUser: (state, data) => {
      //state.users.push(data);
      state.users = [...state.users, data];
    },
  },
});

export default store;

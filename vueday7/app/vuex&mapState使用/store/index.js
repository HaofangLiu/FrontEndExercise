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
});

export default store;

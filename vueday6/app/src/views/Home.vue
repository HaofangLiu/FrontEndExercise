<template>
  <div class="home">
    <h2>商品列表</h2>
    <select :value="sort" @change="goto">
      <option value="desc">从高到低</option>
      <option value="asc">从低到高</option>
    </select>
    <ul class="item-list">
      <li class="head">
        <span>名称</span>
        <span>价格</span>
        <span>操作</span>
      </li>
      <li v-for="item of items" :key="item.id">
        <span>
          <router-link :to="{ name: 'Item', params: { itemId: item.id } }">
            {{ item.name }}
          </router-link>
        </span>
        <span>{{ item.price | RMB }}</span>
        <span>
          <button>添加到购物车</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import RMB from "@/filters/RMB";

export default {
  name: "Home",
  data() {
    return {
      items: [],
      sort: "desc",
    };
  },
  filters: {
    RMB,
  },
  //请求后端：一般放在created生命周期里面，同时在data准备数据。
  async created() {
    // // axios({ url: "http://localhost:7777/items" }).then((res) => {
    // //   console.log(res);
    // // });
    // //代理模式设置请求后端为当前应用端口，然后为了区分路由，要加一个api
    // let res = await axios({ url: "http://localhost:8080/api/items" });
    // // console.log(res);
    // this.items = res.data;
    // // console.log(this.items);

    // console.log(this.$route.query.s);
    this.getItem();
  },
  watch: {
    $route(to, from) {
      // console.log("route changed.");
      this.getItem();
    },
  },
  methods: {
    async getItem() {
      this.sort = this.$route.query.s || "desc";
      let res = await axios({
        url: "http://localhost:8080/api/items",
        params: {
          sort: this.sort,
        },
      });
      this.items = res.data;
    },
    goto({ target }) {
      // console.log(target.value);
      //当url替换的时候，（路由切换的时候），若是使用的同一个组件，就是复用该组件。
      this.$router.push({
        name: "Home",
        query: {
          s: target.value,
        },
      });
    },
  },
};
</script>

<style>
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.item-list li {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px dotted #333;
}

.item-list li.head {
  font-weight: bold;
}

.item-list li span {
  min-width: 200px;
}
</style>

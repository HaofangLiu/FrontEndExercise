<template>
  <div class="Item">
    <h1>Item View</h1>
    <div v-if="err">
      <h2>没有该商品信息</h2>
    </div>
    <div v-else>
      <div v-if="item">
        <h2>商品详情 - {{ item.name }}</h2>
        <dt>ID</dt>
        <dd>{{ item.id }}</dd>
        <dt>名称</dt>
        <dd>{{ item.name }}</dd>
        <dt>价格</dt>
        <dd>{{ item.price | RMB }}</dd>
      </div>
      <div v-else>loading..</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RMB from "@/filters/RMB";

export default {
  name: "Item",
  data() {
    return {
      item: null,
      err: false,
    };
  },
  filters: {
    RMB,
  },
  async created() {
    try {
      //this.$router就是router初始化的路由表
      //this.$route就是当前匹配的路由对象
      //console.log(this.$route, this.$router);
      let dyRoute = this.$route.params.itemId;
      let res = await axios({
        url: "http://localhost:8080/api/item/" + dyRoute,
      });
      this.item = res.data;
    } catch (e) {
      this.err = true;
    }
  },
};
</script>

<style scoped>
dt,
dd {
  text-align: left;
}
</style>

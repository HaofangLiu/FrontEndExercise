const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/get", ctx => {
  //get through herf img src
  ctx.body = "get request";
});

router.get("/getData", ctx => {
  let data = [
    { name: "Lucas", age: 20 },
    { name: "ing", age: 20 }
  ];
  ctx.body = data;
});

//get  post   put  delete

//Restful
//增删改查
//http


//router 中间件放下面
app.use(router.routes());
app.listen(8989);

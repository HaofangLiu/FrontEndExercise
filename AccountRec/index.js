//main entrance 主入口
const Koa = require("koa");
const static = require("koa-static");
const views = require("koa-views");
const router = require("./routers");
// const billData = require('./model/bill')
// const cateData = require('./model/cate')

let app = new Koa();

app.use(static(__dirname + "/static"));
app.use(
  views(__dirname + "/views", {
    extension: "pug"
  })
);

router(app);

app.listen(8989);

const Koa = require("koa");
const static = require("koa-static");
const Router = require("koa-router");
const koaBody = require("koa-body");
// spa;单页面应用；
let app  = new Koa();
let router = new Router();
app.use(koaBody());
app.use(static(__dirname+"/static"));
router.get("/",ctx=>{
    ctx.body= "hello";
})
router.post("/post",ctx=>{
    console.log(ctx.request.body);
    ctx.body= {
        name:"张三"
    };
})
router.post("/xml",ctx=>{
    // ctx.set("content-type","text/xml");
    ctx.body= `<?xml version="1.0" encoding="utf-8" ?>
                <books>
                    <nodejs>nodejs从入门到精通</nodejs>
                    <vue>nodejs从入门到精通</vue>
                </books>
        `;
})


app.use(router.routes());
app.listen(8787);
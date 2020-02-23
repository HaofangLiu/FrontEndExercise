const Koa = require("koa");
const static = require("koa-static");
const Router = require("koa-router");
const koaBody = require("koa-body");
// spa;单页面应用；
let app  = new Koa();
let router = new Router();
app.use(koaBody({
    multipart:true
}));
app.use(static(__dirname+"/static"));
router.get('/',ctx => {
    ctx.body ='111'
})

router.post('/upload',ctx => {
    console.log(ctx.request.files)
    ctx.body = 'backend data provide'
})

app.use(router.routes());
app.listen(8989)
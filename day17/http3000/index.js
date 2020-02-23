const Koa = require("koa");
const static = require("koa-static");
const Router = require("koa-router");

let app  = new Koa();
let router = new Router();

app.use(static(__dirname+"/static"));
router.get('/',ctx => {
    ctx.body ='111'
})

router.get('/getAjax',ctx => {
    ctx.body ={
        name:'lucas',
        age:14
    }
})

app.use(router.routes());
app.listen(3000)
const Koa = require("koa");
const Router = require("koa-router");
const views = require('koa-views');

let app = new Koa();
let router = new Router();

app.use(views(__dirname + '/views'),{
    extension:'pug'
})

router.get('/get', async ctx =>{
    // ctx.body = 'some thing';
    await ctx.render('index.pug',{
        name : 'Lucas'
    }
    )
})

app.use(router.routes());

app.listen(8989);
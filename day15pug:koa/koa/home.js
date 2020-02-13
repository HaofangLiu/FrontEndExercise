const Koa = require('koa');
const app = new Koa();

//中间件--》 函数
// let static = require('koa-static');
let m1 = async function(ctx,next){
    console.log('m1,start')
    ctx.body = 'm2 body'//不会显示，已经转交
    // ctx.state = 10;//这个state会转交给下一个控制权（参数传递）
    await next();//没有这个next m2不会执行。 把控制权转移给下一个中间件---> m2()
    console.log('m1,end')
}
let m2 = async function(ctx,next){
    console.log('m2,start');
    // console.log(ctx.state);
    ctx.body = 'm2 body'
    await next();//----> m3()
    console.log('m2,end')
}
let m3 = async function(ctx,next){
    console.log('m3,start')
    ctx.body = 'm3 content body'
    await next();//--->final
    console.log('m3,end')
}

app.use(m1);
app.use(m2);
app.use(m3);
app.use(async ctx => {
    let result = await new Promise(resolve => {
        setTimeout(() => {
            resolve('异步输出')
        },1000)
    })
    console.log(result);
    ctx.body = result
})


app.listen(8383);
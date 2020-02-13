const Koa = require('koa');
const app = new Koa();

//ctx context 上下文；  req/res --> ctx把两个绑定到一个里面
//ctx.req == res.request
//ctx.res === res.response
app.use(async (ctx,next) => {
    console.log(ctx.request.query)
    //在body中的对象会自动转换为json
    //ctx.response.body（可以直接用下方的别名）
    ctx.body = {
        name: 'Hello World'
    }
  });

  app.listen(3000);
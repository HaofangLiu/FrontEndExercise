const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    ctx.status = 200;
    ctx.set('mycontent','txt')
    ctx.body('hello')
  });

  app.listen(8686);
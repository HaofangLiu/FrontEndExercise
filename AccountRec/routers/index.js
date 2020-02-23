const controller = require('../controller')
const Router = require("koa-router");
let router = new Router();

module.exports = function(app) {
    //redirect to same page.
  router.get("/", ctx => {
    ctx.redirect('/index')
  });

  router.get("/index", controller.index)
  app.use(router.routes());
};

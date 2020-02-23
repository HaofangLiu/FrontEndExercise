const Router = require("koa-router");
const newsController = require("../controller/news")
let router = new Router({
    prefix:"/news"
});
router.get("/",ctx=>{
    ctx.redirect("/news/index")
})
router.get("/index",newsController.index)

module.exports = router;
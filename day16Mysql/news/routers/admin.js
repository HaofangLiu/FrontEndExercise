const Router = require("koa-router");
const adminController = require("../controller/admin")
let router = new Router({
    prefix:"/admin"
});
router.get("/",ctx=>{
    ctx.redirect("/admin/index")
})
router.get("/index",adminController.index)
router.get("/addNews",adminController.addNews);
router.get("/newsList",adminController.newsList);
router.post("/addNewsData",adminController.addNewsData);
module.exports = router;

const adminRouter = require("./admin.js");
const newsRouter = require("./news.js");
module.exports = function(app){
    app.use(adminRouter.routes());
    app.use(newsRouter.routes());
}

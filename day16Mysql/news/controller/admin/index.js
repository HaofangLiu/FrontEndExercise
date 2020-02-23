let adminModel = require("../../service/admin");
module.exports = {
    index: async ctx => {
        // 加载主页；
        // ctx.body = "管理页面主页"
        await ctx.render("admin/index.pug");
    },
    addNews: async ctx => {
        // 加载新闻添加页面
        await ctx.render("admin/addNews.pug");
    },
    newsList: async ctx => {
        // 加载后端管理页面的新闻列表页面
        await ctx.render("admin/newsList.pug");
    },
    addNewsData: async ctx => {
        // console.log( ctx.request.body );
        // console.log( ctx.request.files);
        let result = await adminModel.addNewsData(ctx.request);
        //  console.log(result);
        let resultData;
        if (result.affectedRows > 0) {
            resultData = {
                info: "添加成功",
                status: 1
            }
        } else {
            resultData = {
                info: "添加失败",
                status: 0
            }
        }
        // ctx.body = resultData;
      await ctx.render("admin/message.pug",{
            resultData
        })
    }

}
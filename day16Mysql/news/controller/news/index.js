let newsModel = require("../../service/news");
module.exports = {
    index:async ctx=>{
        // ctx.body = "新闻页面主页"
        // 获取数据
        let newData = await newsModel.getData();
        // console.log(newData);
        await ctx.render("news/index.pug",{
            newData
        });
    }
}
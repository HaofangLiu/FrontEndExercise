const billData = require("../model/bill");
const cateData = require("../model/cate");
module.exports = {
  index: async ctx => {
    let dataRead = await billData.getData();
    let dataCate = await cateData.getData();
    dataRead.forEach((item) => {
        //deal with time
        item.time = new Date(parseInt(item.time)).toISOString();
        //deal with 0/1
        if (item.type === '0'){
            item.type = '收入'
        }else{
            item.type = '支出'
        }
        //change the category code according to second table to show the content
        let cateCode = item.category
        let found = dataCate.find(element => element.id === cateCode);
        // console.log(found)
        item.category = found.name
    })
    // console.log(typeof(dataRead[0].time))
    await ctx.render("index.pug", {
      dataRead
    });
  }
};

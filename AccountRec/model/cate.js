const csv = require("csv-parser");
const fs = require("fs");

module.exports = {
  async getData() {
    return await new Promise(resolve=>{
    let results = [];
       fs
      .createReadStream("./static/data/categories.csv")
      .pipe(csv())
      .on("data", data => results.push(data))
      .on("end", () => {
        // console.log(results);
        resolve(results);
      });
    })
    
  }
};

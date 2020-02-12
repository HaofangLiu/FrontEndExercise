//stream 流
const fs = require("fs");
let res = fs.readFileSync('1.txt');
console.log(res.toString());

//用文件流读
let resStr = fs.createReadStream('1.txt');
resStr.on('data',chunk => {
    console.log(chunk.toString());
})

//创建一个65kb的文件：
let buffer = Buffer.alloc(65 * 1024);
fs.writeFile('65kb',buffer,err => {
    if(err){
        return console.log(err);
    }
    console.log('写入成功');
})
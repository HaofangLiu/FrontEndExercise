const fs = require("fs"); //文件操作
//增删改查
//1. 文件操作 2. 目录操作
//文件操作：
//a:追加写入。 2： 写入 r：读取
// fs.writeFile('1.txt','THe content wrote',{flag:'a'},function(err){
//     if(err){
//         return console.log(err);
//     }
//     console.log('success');
// })

// //文件读取
// fs.readFile('1.txt','utf8',(err,data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// //所有文件操作，没有sync都是异步 否则是同步；
// let data = fs.readFileSync('1.txt');
// console.log(data);

// //修改（修改名称）
// fs.rename('1.txt','2.txt',err => {
//     if(err){
//         return console.log(err);
//     }
//     console.log('rename success');
// })

// //删除
// fs.unlink('2.txt',(err) => {
//     if(err){
//         return console.log(err);
//     }
//     console.log('delete success');
// })

// //复制: 先读，再写入
// fs.copyFile('2.txt','2Copy.txt',err => {
//     if(err){
//         return console.log(err)
//     }
//     console.log('copy success');
// })

//目录操作
//创建目录
// fs.mkdir('11',err => {
//     if(err){
//         return console.log(err)
//     }
//     console.log('create folder success');
// })

//重新命名
// fs.rename('11','22',err => {
//     if(err){
//         return console.log(err)
//     }
//     console.log('rename folder successs');
// })

//读取目录
// fs.readdir('22',(err,data) => {
//     if(err){
//         return console.log(err)
//     }
//     console.log(data);
// })

//删除目录(空文件夹)
// fs.rmdir('22',err => {
//     if(err){
//         return console.log(err)
//     }
//     console.log('delete success');
// })

//判断是否存在
// fs.exists('1.txt', exist => {
//     console.log(exist);
// })

//获取文件或者目录的详细信息
// fs.stat("1.txt", (err, stat) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(stat);
//   //判断是否是文件
//   let res = stat.isFile();
//   console.log(res);
//判断是否为文件夹
//   let res2 = stat.isDirectory();
//   console.log(res2);
// });

//删除非空目录
//先吧目录的文件删除--> 再删除空目录

function removeDir(path) {
  let data = fs.readdirSync(path);
  //['33','1.txt','2.html']
  for (let i = 0; i < data.length; i++) {
    //是文件或者是目录？是文件，直接删除，是目录，继续查找
    let url = path + "/" + data[i];
    let stat = fs.statSync(url);
    if (stat.isDirectory()) {
      //继续查找
      removeDir(url);
    } else {
      //文件删除
      fs.unlink(url);
    }
  }
  //删除空目录
  fs.rmdir(path);
}

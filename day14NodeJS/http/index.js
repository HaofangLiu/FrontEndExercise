const http = require("http");
const fs = require("fs");
const mime = require('./mime.json');
const path = require('path');

// console.log(mime);

let server = http.createServer((req, res) => {
  console.log(req.url);
  //spa单页应用，无刷
  // res.setHeader("Content-type","text/html;charset=utf-8");
//   res.writeHead(200, {
//     "Content-type": "text/html;charset=utf-8"
//   });
  if (req.url === "/index") {
    let indexData = fs.readFileSync("./index.html");
    res.end(indexData);
  } else if (req.url === "/product") {
    //文件读取
    // let productData = fs.readFileSync('./product.html');
    // res.end(productData);

    //通过流读取(节约性能)
    let rs = fs.createReadStream("./product.html");
    rs.pipe(res);
  }else{
      if(req.url !== '/favicon.ico'){
          // /index.css
          let extName = path.extname(req.url);
          res.setHeader('Content-type',mime[extName])
        let resData = fs.readFileSync('.' + req.url);
        res.end(resData);
      }
  }

  // }else if(req.url === '/index.css'){
  //     res.writeHead(200,{
  //         "Content-type":"text/css"
  //     })
  //     let cssData = fs.readFileSync('./index.css');
  //     res.end(cssData);
  // }
});

server.listen(1010);

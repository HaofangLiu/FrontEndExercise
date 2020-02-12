const http = require("http");
const fs = require("fs");
const mime = require("./data/mime.json");
const path = require("path");
const data = require("./data/data.json");
const cheerio = require("cheerio");
const url = require("url");

const server = http.createServer((req, res) => {
  //提取到真正的url（带参url）
  let objPath = url.parse(req.url, true);
  let pathName = objPath.pathname;
  // console.log(objPath);

  if (pathName === "/news") {
    res.setHeader("Content-type", "text/html;charset=utf-8");
    //分页相关
    //要知道当前页码（已知的）
    //每页现实多少条（已知的）
    //拿到数据
    const currentPage = objPath.query.currentPage || 1; //0-->4  ,  5-->10
    const amountOfEachPage = 5;
    let slicedData = JSON.parse(JSON.stringify(data)).splice(
      (currentPage - 1) * amountOfEachPage,
      amountOfEachPage
    );
    // console.log(slicedData);

    //生成页码
    let totalCount = data.length;
    let page = Math.ceil(totalCount / amountOfEachPage); //向上取整
    // console.log(page);

    //按照数据组装html
    //组装列表
    let newHTML = "";
    slicedData.forEach(element => {
      newHTML += `<li class="news">
        <a href="javascript:;">
            <img src="${element.imgUrl}" alt="">
        </a>
        <div>
            <h3>
                <a href="/detail?id=${element.id}">${element.title}</a>
            </h3>
            <div class="info">
                <span class="tips"><span>${element.from}</span></span>
                <!-- <span class="line"></span> -->
                <span class="time">| &nbsp;&nbsp;${element.newTime}</span>
            </div>
        </div>
    </li>`;
    });
    //组装分页
    let paginationHTML = `<a href="javascript:;" class="prev">⌜</a>`;
    for (let i = 1; i <= page; i++) {
      paginationHTML += `<a href="/news?currentPage=${i}">${i}</a>`;
    }
    paginationHTML += `<a href="javascript:;" class="next">⌝</a>`;

    //动态html处理
    let indexData = fs.readFileSync("./views/index.html"); //拿到html文件
    let $ = cheerio.load(indexData);
    $(".news-list").html(newHTML);
    $(".pagination").html(paginationHTML);
    res.end($.html());
  } else if (pathName === "/detail") {
    res.setHeader("Content-type", "text/html;charset=utf-8");
    //get data of news selected.
    //find method
    const newsSelected = data[objPath.query.id - 1];
    // console.log(idOfNewsSelected);
    // console.log(idOfNewsSelected.title)
    //assemble DOM
    let pageTitle = `<h1 class="title">${newsSelected.title}</h1>`;
    let newsDate = `<div class="article-info"> ${newsSelected.newTime}</div>`;
    let newContent = `<div class="content"> ${newsSelected.title}</div>`;

    //load
    let detailData = fs.readFileSync("./views/detail.html");
    let $ = cheerio.load(detailData);
    $(".title").html(pageTitle);
    $(".article-info").html(newsDate);
    $(".content").html(newContent);
    res.end($.html());
  } else {
    //render剩下的所有页面需要的配置，比如css，js等
    if (pathName !== "/favicon.ico") {
      res.setHeader("Content-type", "text/html;charset=utf-8");
      let extName = path.extname(req.url);
      res.setHeader("Content-type", mime[extName]);
      let resData = fs.readFileSync("." + req.url);
      res.end(resData);
    }
  }
});

server.listen(8787);

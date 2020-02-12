const Koa = require("koa");
const Router = require("koa-router");
const Views = require("koa-views");

let app = new Koa();
let router = new Router();
app.use
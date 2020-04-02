import React from "react";
import { nav } from "./router";
import { Pnav } from "./publicNav";

// 路由组件：被路由调用的组件（被Router调用的）
// 非路由组件：不是被路由（Route） 调用的组件
// 非路由组件中，正常情况下是没有办法拿到路由参数的（需要用到withRouter）
// withRouter 高阶函数[高阶路由](对组件进行包装，然后把路由参数传递给组件)：
// 调用这个函数时会返回一个新的函数（或对象，组件）
//调用时接收一个组件

function Nav(props) {
  return <Pnav className={"nav"} navData={nav}></Pnav>;
}
export default Nav;

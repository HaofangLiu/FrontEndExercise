import React from "react";
import {
  NavLink,
  useHistory,
  useLocation,
  useRouteMatch,
  useParams
} from "react-router-dom";

// 路由组件：被路由调用的组件（被Router调用的）
// 非路由组件：不是被路由（Route） 调用的组件
// 非路由组件中，正常情况下是没有办法拿到路由参数的（需要用到withRouter）
// withRouter 高阶函数[高阶路由](对组件进行包装，然后把路由参数传递给组件)：
// 调用这个函数时会返回一个新的函数（或对象，组件）
//调用时接收一个组件

function Nav(props) {
  let history = useHistory(); //注意不需要解构
  console.log(history);
  console.log(useLocation());
  console.log(useRouteMatch());//获取匹配
  console.log(useParams());//获取动态路由参数
  return (
    <nav>
      <NavLink to="/" exact activeStyle={{ color: "red" }}>
        index page
      </NavLink>
      <span> | </span>
      <NavLink to="/about" exact activeStyle={{ color: "red" }}>
        about page
      </NavLink>
      <span> | </span>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        go back
      </button>
    </nav>
  );
}
// Nav = withRouter(Nav);
export default Nav;

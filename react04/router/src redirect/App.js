import React from "react";
import { Route, Switch,Redirect } from "react-router-dom";
import IndexPage from "./view";
import AboutPage from "./view/about";
import Nav from "./nav";
import Page404Page from "./view/404";

/* 
  /首页
  /about 关于我们

  path要匹配的地址
  默认情况下（模糊匹配） 当前url是以path为开始的就会匹配成功

  exact精确匹配必须url和path 一致才可以匹配成功
*/

function App() {
  let user = "kkb";
  return (
    <div>
      <Nav></Nav>
      <Switch>
        <Route
          path="/"
          render={() => {
            // 如果想要给路由组件传参：记得使用Route render方法
            return <IndexPage user={user} />;
          }}
          exact
        />
        {/* 重定向 */}
        <Route
          path="/index"
          render={() => {
            return <Redirect to="/"/>;
          }}
          exact
        />
        <Route path="/about" component={AboutPage} />
        <Route component={Page404Page} />
      </Switch>

      {/* <Route path="/" render={() => {
        // 如果想要给路由组件传参：记得使用Route render方法
        return <IndexPage user = {user} />
      }} exact/>
      
      <Route path="/about" component={AboutPage} /> */}
    </div>
  );
}

export default App;

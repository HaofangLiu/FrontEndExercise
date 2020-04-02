import React from "react";
function IndexPage(props) {
  console.log(props);
  let { history } = props;
  /*}
history:
    go(nub)历史记录跳转几步
    goBack()回退一步
    goForward()前几一步
    push(url,传递给下一个视图的信息) 跳转视图
location:
    pathname:当前url
    search:当前的search（url请求中携带的参数）【在url中#后面携带的内容--叫hash   在？后携带的内容叫search】
    hash:当前的hash
    state 上个视图船体过来的信息
match:
    params动态路由的参数值
*/
  return (
    <div>
      main page
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Go Back
      </button>
      <button
        onClick={() => {
        //   history.goForward();
            history.push("/about","从首页跳来了")//跳转视图
        }}
      >
        Go Forward
      </button>
      {/* 还是刷新了的办法
      <a href="/about">About us</a> */}
    </div>
  );
}

export default IndexPage;

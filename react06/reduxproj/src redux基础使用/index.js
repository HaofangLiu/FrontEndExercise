import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

//纯函数
// function reduce(num1,num2){
//     return num1 + num2
// }

//createStore（reducer）创建状态仓库
//reducer：状态的操作函数（纯函数）
//纯函数：函数调用参数相同，则永远返回相同的结果
//不依赖于函数外部任何状态或者数据变化，必须依赖于其输入参数

function reducer(state = { num: 1 }, action) {
  console.log(state, action);
  switch (action.type) {
    case "add":
      //返回值是根据指令修改后的状态
      return {
        num: ++state.num
      };
    case "minus":
      //返回值是根据指令修改后的状态
      return {
        num: --state.num
      };
  }
  //state状态
  //action对状态的修改动作 --- 必须传type属性
  return state;
}

//创建仓库
let store = createStore(reducer); //创建状态仓库

//发起修改
setInterval(() => {
    //这是一个同步方法，通过dispatch发起修改请求
  store.dispatch({
    type: "add" //必须判定好行为
  });
}, 1000);

store.subscribe(() => {//监听state进行修改
    console.log(store.getState())
});
// console.log(store.getState());

/*

createStore---创建state仓库
reducer --- 根据action完成对state的修改
store.dispath（action） --- 发起一个action的修改

*/

ReactDOM.render(<h1>hello redux</h1>, document.getElementById("root"));

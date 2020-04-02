import { createStore } from "redux";

function reducer(state = { num: 1 }, action) {
//   console.log(state, action);
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

export default createStore(reducer);

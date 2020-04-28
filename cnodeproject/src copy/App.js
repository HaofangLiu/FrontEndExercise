import React,{useEffect} from "react";
import { connect, useSelector, useDispatch } from "react-redux";

//用高阶组件connect来调用store中的办法:
// 1: 需要用高阶组件 connect（）

// function App(props) {
//   console.log(props);//{name: "123", age: 10, dispatch: ƒ}
//   return (
//     <div className="App">
//     </div>
//   );
// }

// export default connect(state => ({...state}))(App);

//2. 用hooks（必须是函数组件）
function App() {
  let state = useSelector(state => state);
  // console.log(state);//{name: "123", age: 10}
  // console.log(useDispatch());
  let dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type:"edit_name",
        name:"chinesekkb"
      })
    },2000)
  },[]);

return <div className="App">{state.name}</div>;
}

export default connect(state => ({ ...state }))(App);

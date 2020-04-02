import React from "react";
import {connect} from "react-redux"

function App(props){
    console.log(props);
    let {num,dispatch} = props;
    return(<div>
        {num}
        <button onClick={() => {
            dispatch({type:"add"})
        }}> + </button>
        <button onClick={() => {
            dispatch({type:"minus"})
        }}> - </button>
    </div>)
}

/* 
connect(对state的回调函数)（要输入state的组件）
connect((state) => {state中需要传递给组件的数据}（获取数据的组件）)
state中需要传递给组件的数据 ==> 一定要返还一个新的引用（如果是对象类型的一定要返回一个新的引用）
*/
//用connnect接收参数传递
App = connect((state) => {
    return {...state}
})(App)

export default App;
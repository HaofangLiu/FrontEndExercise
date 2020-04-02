import http from "./http";
/*
    使用了 thunk 之后，dispatch 可以接收函数类型的参数:
        - 当参数类型是 对象时，直接调用 reducer 进行 state 的修改
        - 当参数类型是 函数时，调用该函数，并且把 dispatch 和 getState 方法传递给函数，不会调用 reducer
*/

function getData(dispatch,getState){
    dispatch({
      type:"loading"
    });
    http.get("/topic/5433d5e4e737cbe96dcef312").then((res)=>{
      dispatch({
        type:"loadover",
        data:res.data.data
      });
    })
}

export {getData}
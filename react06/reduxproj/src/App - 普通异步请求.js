import React, { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux";
import http from "./store/http";
function App() {
  let {loading,data} = useSelector(state=>state);
  let dispatch = useDispatch();
  useEffect(()=>{
    dispatch({
      type:"loading"
    });
    http.get("/topic/5433d5e4e737cbe96dcef312").then((res)=>{
      dispatch({
        type:"loadover",
        data:res.data.data
      });
    })
  },[]);
  return (
    <div className="App">
        {loading?"正在请求数据中":<div
          dangerouslySetInnerHTML={{
            __html:data.content
          }}
        ></div>}
    </div>
  );
}

export default App;

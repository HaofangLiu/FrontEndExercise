import React, { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getData} from "./store/action";
function App() {
  let {loading,data} = useSelector(state=>state);
  let dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getData);
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

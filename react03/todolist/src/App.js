import React, { useState } from 'react';
import Child from './child';
/*
  hook 钩子 -- 钩子函数
*/
function App(props){
    let [name,setName] = useState("kkb");
    let [showChild,setShow] = useState(true);
    return <div>
      {showChild?<Child
        name = {name}
        setName = {setName}
      />:""}
      <button onClick={()=>{
        setShow(false);
      }}>隐藏child</button>
    </div>
}
export default App;

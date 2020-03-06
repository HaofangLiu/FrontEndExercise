import React, { useState } from 'react';
import Child from './child';
/*
  hook 钩子 -- 钩子函数
*/
function App(props){
    let [name,setName] = useState("kkb");
    return <div>
      <Child
        name = {name}
        setName = {setName}
      />
    </div>
}
export default App;

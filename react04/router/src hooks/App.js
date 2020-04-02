import React, { useState, useEffect, useRef } from "react";
import Child from "./child";

function App() {
  const [name, setName] = useState("kkb");
  const [show, setShow] = useState(true);
  //副作用函数：一般说定时器，请求
  useEffect(() => {
    //组件挂载，组件更新，组件即将卸载
    // console.log("组件有变化");
  });

  return <div>
    {show ? <Child name={name} setName={setName} /> : ""}
    <button onClick = {() => {
      setShow(!show)
    }}>{show?'hide':'show'}</button>
    </div>;
}

export default App;

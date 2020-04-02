import React, { useState, useEffect, useRef } from "react";
let state = 0;
function Child(props) {
  let { name, setName } = props;
  let [age, setAge] = useState(9);

  let nameREf = useRef();
  //组件挂载完成
  useEffect(() => {
    // console.log(nameREf);
    console.log("组件挂载完成");
    return () => {
      //组件即将卸载
      console.log("组件即将卸载完成");
    };
  }, []);
  //组件更新完成
  useEffect(() => {
    console.log(state);
    state++;
    if (state > 1) {
      console.log("组件更新完成");
    }
  }, [name, age]);//如果[]不写，任何更新都会检测到

  return (
    <div>
      <p ref={nameREf}>姓名:{name}</p>
      <p>年龄:{age}</p>
      <button
        onClick={() => {
          setAge(++age);
        }}
      >
        长一岁
      </button>
      <button
        onClick={() => {
          setName("开课吧");
        }}
      >
        修改名字
      </button>
    </div>
  );
}

export default Child;

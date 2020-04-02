import React, { useState, useEffect, useRef } from "react";
function Child(props) {
  let { name, setName } = props;
  let [age, setAge] = useState(9);

  //1.当ref和DOM节点绑定时，dom更新了会自动帮助我们更新ref中存储的值
  //2.利用ref记录更新前的一些数据，数据有改变时，ref不会自动同步，需要手动进行同步；

  /*
  useREf（defaultValue）
  */
  let prevName = useRef(name);
  let prevAge = useRef(age);
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
    if (prevName.current === name && prevAge.current === age) {
      console.log("组件没有更新，说明是在挂载完成之后");
    }
    console.log("组件更新完成", prevAge, prevName, name, age);
    prevAge.current = age;
    prevName.current = name;
  }, [name, age]); //如果[]不写，任何更新都会检测到

  return (
    <div>
      <p>姓名:{name}</p>
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

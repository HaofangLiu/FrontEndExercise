import React, { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "kkb",
    age: 10
  });
  let {name, age} = data;
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <input
        type="text"
        value={name}
        onChange={({ target }) => {
          //只要调用了setData就会更新组件
          setData({
            //useState返回的这个修改状态的方法和setState不太一样，不会帮助我们合并state
            name : target.value,
            age
          });
        }}
      />
    </div>
  );
}

export default App;

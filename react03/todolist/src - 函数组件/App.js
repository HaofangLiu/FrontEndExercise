import React from 'react';
// 函数组件
/*
  函数本身就是组件，注意首字母大写
  return 定义该组件要输出的视图
  函数本身有一个参数接收 父级传递props
  函数组件没有生命周期，没有state 所以在 react 16.7 函数组件 也叫作纯渲染组件或纯视图组件 
*/
function App(props){
    return <h1>hello react</h1>
}
export default App;

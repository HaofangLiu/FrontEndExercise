import React,{useState} from 'react';
function Child(props){
    let {name,setName} = props;
    let [age,setAge] = useState(9);
    return <div>
        <p>姓名:{name}</p>
        <p>年龄:{age}</p>
        <button onClick={()=>{
            setAge(++age);
        }}>长一岁</button>
        <button onClick={()=>{
            setName("开课吧");
        }}>修改名字</button>
    </div>
}

export default Child;
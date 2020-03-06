import React,{useState,useEffect,useRef} from 'react';
/*
    useEffect(()=>{
        // 组件发生更新之后要做的事情
    },[监听哪些数据更新的时候才调用该副作用]);
*/
function Child(props){
    let {name,setName} = props;
    let [age,setAge] = useState(9);
    let p = useRef();
    useEffect(()=>{
        console.log("组件挂载完成之后");
        return ()=>{
            console.log("组件即将卸载");
        }
    },[]);
    useEffect(()=>{
        console.log("name挂载及更新");
        console.log(p.current);
    },[age])
    return <div>
        <p ref={p}>姓名:{name}</p>
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
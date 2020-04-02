import React,{useState} from 'react';
import {useDispatch} from "react-redux";
function Add(){
    let [name,setName] = useState("");
    let [price,setPrice] = useState("");
    let dispatch = useDispatch();
    return (<div>
        添加商品:
            <input 
                type="text" 
                placeholder="商品名称" 
                value={name}
                onChange={({target})=>{
                    setName(target.value);
                }}
            />
            <input 
                type="text" 
                value={price}
                onChange={({target})=>{
                    setPrice(target.value);
                }}
                placeholder="商品价格" 
            />
            <input 
                type="button" 
                id="btn" 
                onClick={()=>{
                    dispatch({
                        type: "add",
                        data:{
                           name,
                           price 
                        }
                    })
                }}
                value = "添加"
            />
    </div>)
}
export default Add;
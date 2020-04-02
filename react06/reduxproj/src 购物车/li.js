import React from 'react';
import {useDispatch} from "react-redux";
function Li(props){
    let {id,name,price,nub} = props;
    let dispatch = useDispatch();
    return (<li>{name} - {price}元/件 - 共
        <button
            onClick={()=>{
                dispatch({
                    type: "minus",
                    id
                }) 
            }}
        >-</button>
        {nub}
        <button
            onClick={()=>{
                dispatch({
                    type: "plus",
                    id
                }) 
            }}
        >+</button>
        件 - 共{price*nub}元</li>);
}

export default Li;

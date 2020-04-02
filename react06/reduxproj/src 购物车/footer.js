import React from 'react';
import {useSelector} from "react-redux";
function Footer(){
    let state = useSelector(state=>state);
    let allCount = state.reduce((n1,n2)=>{
        return n1 + n2.nub; 
    },0);
    let allPrice = state.reduce((n1,n2)=>{
        return n1 + n2.price*n2.nub;
    },0);
    let maxPrice = state.filter(item=>item.nub>0).reduce((n1,n2)=>{
        return Math.max(n1,n2.price);
    },0);
    return (<p>总计:{allCount}件商品,共计花费{allPrice}元,最贵单价为{maxPrice}元</p>);
}

export default Footer;

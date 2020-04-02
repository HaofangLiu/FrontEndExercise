import React from 'react';
import { useSelector } from 'react-redux';
import Li from "./li";
function List(){
    let data = useSelector(state=>state);
    return (<ul>{
        data.map(itemdata=><Li key={itemdata.id} {...itemdata} />)
    }</ul>);
}

export default List;

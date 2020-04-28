import React from "react";
import { useSelector,useDispatch } from "react-redux";

function HEG() {
  let { name, age } = useSelector(state => state.heg);
  let dispatch = useDispatch();
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={() => {
           dispatch({
            type:"heg_add"
        })
      }}>add age</button>
    </div>
  );
}

export default HEG;

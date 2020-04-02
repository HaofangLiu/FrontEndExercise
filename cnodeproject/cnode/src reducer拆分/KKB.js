import React from "react";
import { useSelector, useDispatch } from "react-redux";

function KKB() {
  let { name, age } = useSelector(state => state.kkb);
  let dispatch = useDispatch();
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={() => {
          dispatch({
              type:"kkb_add"
          })
      }}>add age</button>
    </div>
  );
}

export default KKB;

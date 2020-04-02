import React from "react";
import { useState } from "react";

function State(){
    const [state, setState] = useState({
        name:"lucas",
        age:10
    });
    let {name,age} = state
    return <div>
        name:{name},<br></br>
        age:{age},<br></br>
        <button onClick={() => {
            setState({
                age:++age,
                name
            })
        }}>
            add age
        </button>
    </div>
}

export default State;
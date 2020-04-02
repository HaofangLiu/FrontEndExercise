//保存状态以及对状态的一些操作方法，比如dispatch，监听等一些方法
import {createStore} from "redux";

function reducer(state = {
    name:"123",
    age:10
},action){
    switch(action.type){
        case "edit_name": 
            return {
                ...state,
                name:action.name
            }
    }
    return state;
}

let store = createStore(reducer);

export default store;

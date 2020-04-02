//保存状态以及对状态的一些操作方法，比如dispatch，监听等一些方法
import { createStore, combineReducers } from "redux";

function kkb(
  kkb = {
    name: "kkb",
    age: 8
  },
  action
) {
  switch (action.type) {
    case "kkb_add":
      return {
        ...kkb,
        age: ++kkb.age
      };
  }
  return kkb;
}

function heg(
  heg = {
    name: "heg",
    age: 12
  },
  action
) {
  switch (action.type) {
    case "heg_add":
      return {
        ...heg,
        age: ++heg.age
      };
  }
  return heg;
}

function reducer(state = {}, action) {
  return {
    kkb: kkb(state.kkb, action),
    heg: heg(state.heg, action)
  };
}

//拆分reducer
// function reducer(
//   state = {
//     kkb: { name: "kkb", age: 10 },
//     heg: { name: "heg", age: 19 }
//   },
//   action
// ) {
//   switch (action.type) {
//     case "edit_name":
//       return {
//         ...state,
//         name: action.name
//       };
//   }
//   return state;
// }

let store = createStore(
  combineReducers({
    heg,
    kkb
  })
);

export default store;

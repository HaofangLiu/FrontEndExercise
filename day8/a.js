//es6 模块化
//导入
// import{a as c, b, e} from './b.js';
// console.log(c,b,e);

// //import default
// import myobj from './b.js';
// console.log(myobj);

//import together
import NewNameObj,{a as c, b, e} from './b.js';
console.log(NewNameObj,c,b,e);

//通配符导入
// import * as obj from './b.js';
// console.log(obj);
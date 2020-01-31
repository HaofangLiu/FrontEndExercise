//导出（可以导出多个）
//方法1
export let a = 10;
export let b = 20;
const c = 33;
export{c as e }

//方法2:智能导出一个
const obj = {
    name: 'lucas',
    age: 10
}
export default obj;//only one
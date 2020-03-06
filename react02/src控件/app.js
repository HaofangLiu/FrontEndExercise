import React, { Component } from "react";
import Child from './child';

class App extends Component {
    state = {
        name:"kkb"
    }
    render(){
        let {name} = this.state;
        return <div>
            <Child 
                name = {name}
                editName = {this.editName}
            />
        </div>
    }

    editName = (newName) => {
        this.setState({
            name:newName
        })
    }




//   state = {
//     name: "kkb",
//     age: 9
//   };
//   render() {
//     console.log("解析jsx，生成虚拟dom，把生成的虚拟dom，添加到dom中");
//     let { name, age } = this.state;
//     return (
//       <div className="friend-list">
//         <p>name: {name}</p>
//         <p>age: {age}</p>
//         <button
//           onClick={() => {
//             age++;
//             //只传我们要修改的，setState会帮助我们进行合并。
//             this.setState({ age });
//           }}
//         >
//           change age
//         </button>
//         <button
//           onClick={() => {
//             name = "lajsnf";
//             //只传我们要修改的，setState会帮助我们进行合并。
//             this.setState({ name });
//           }}
//         >
//           change name
//         </button>
//         <button
//           onClick={() => {
//             //setState 是一个异步方法，调用后react会把这个时间所有的setState方法拿过来，合并后才回去操作state
//             age++;
//             this.setState({ name: "allTogether" });
//             this.setState({ age });

//             // setTimeout(() => {
//             //   console.log(this.state + '1');
//             // }, 1000);
//             // console.log(this.state);//这里拿不到数据，只有异步之后能拿到
//           }}
//         >
//           change together
//         </button>
//       </div>
//     );
//   }
}

export default App;

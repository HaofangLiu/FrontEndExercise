import React,{Component} from 'react';
class App extends Component{
    state = {
        name: "kkb",
        age:9
    }
    render(){
        console.log("解析JSX，生成虚拟DOM，然后把生成的虚拟DOM，挂载DOM中");
        let {name,age} = this.state;
        return <div className="friend-list">
            <p>name: {name}</p>
            <p>age: {age}</p>
            <button onClick={()=>{
                ++age;
                // setState 中可以只穿我们要修改的数据，setState 会帮助我们进行合并操作
                this.setState({
                    age
                });
            }}>修改年龄</button>
            <button onClick={()=>{
                // setState 中可以只穿我们要修改的数据，setState 会帮助我们进行合并操作
                this.setState({
                    name:"开课吧集团"
                });
            }}>修改名字</button>
            <button
                onClick={()=>{
                    ++age;
                    // 注意 setState 是一个异步方法，调用setState，react会把这个时间内的 setState 都拿过来 合并之后，才去修改 state
                    this.setState({
                        age
                    });
                    this.setState({
                        name:"开课吧集团"
                    });
                    console.log(this.state);
                }}
            >同时修改</button>
        </div>
    }
}

export default App;
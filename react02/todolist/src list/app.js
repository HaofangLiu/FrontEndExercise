import React,{Component} from 'react';
import "./index.css";
import data from "./data";
import Dl from './dl';
/*
    把父组件中的数据传递给子组件
*/
class App extends Component{
    state = {
        showName:"friend"
    }

    changeShow = (newName) => {
        this.setState({
            showName:newName
        })
    }

    render(){
        let {showName} = this.state
        return <div className="friend-list">
           {Object.keys(data).map((itemName,index)=>{
                //console.log(itemName);
                return <Dl 
                    key={index}
                    name={itemName}
                    showName = {showName}
                    data={data[itemName]}
                    changeShow = {this.changeShow}
                />
           })}
        </div>
    }
}

export default App;
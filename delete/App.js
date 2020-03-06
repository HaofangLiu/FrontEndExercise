import React,{PureComponent, Fragment} from 'react';
import Add from './add';
import Todos from './todos';
import Stats from './stats';

/*
  1. 完成视图
  2. 把数据和视图进行绑定
  3. 添加相应的功能
*/
class App extends PureComponent {
    state = {
      data: [
        {
          id: 0,
          txt: "数据内容",
          done: false
        },{
          id: 1,
          txt: "数据内容2",
          done: false
        },{
          id: 2,
          txt: "数据内容3",
          done: false
        }
      ]
    }
    // 添加一条新数据
    add = (txt)=>{
      let {data} = this.state;
      data.push({
        id: Date.now(),
        txt,
        done: false 
      });
      this.setState({
        data:[...data]
      })
    }
    // 修改完成状态
    changeDone=(id,done)=>{
      let {data} = this.state;
      for(let i = 0; i < data.length; i++){
          if(data[i].id == id){
            data[i].done = done;
            break;
          }
      }
      this.setState({
        data:[...data]
      })
    }
    // 根据id删除条目
    removeData=(id)=>{
      let {data} = this.state;
      this.setState({
        data:data.filter(item=>item.id!=id)
      })
    }
    // 修该内容
    editData = (id,txt)=>{
      let {data} = this.state;
      for(let i = 0; i < data.length; i++){
          if(data[i].id == id){
            data[i].txt = txt;
            break;
          }
      }
      this.setState({
        data:[...data]
      })
    }
    // 批量删除已完成
    removeDone = ()=>{
      let {data} = this.state;
      this.setState({
        data:data.filter(item=>!item.done)
      })
    }
    render(){
      let {data} = this.state;
      let {add,changeDone,removeData,editData} = this;
      console.log(data);
      return (<div id="todoapp">
          <div className="title">
              <h1>todo</h1>
          </div>
          <div className="content">
            <Add 
              add={add}
            />
            {
              data.length>1? 
              <Fragment>
                <Todos 
                data={data}
                changeDone = {changeDone}
                removeData = {removeData}
                editData = {editData}
              />
              <Stats
                data = {data}
              />
              </Fragment>
              :""
            }
           
          </div>
      </div>)
    }
};

export default App;

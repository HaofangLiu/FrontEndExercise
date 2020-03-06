import React, { PureComponent } from 'react';
class Li extends PureComponent {
    state={
        editState: false
    }
    // ref 用来标记 react 中的元素，在生命周期中可以通过 ref 来获取到这个元素
    componentDidUpdate(prevState){
        let {editState} = prevState;
        let nowEditState = this.state.editState;
        if((!editState)&&nowEditState){
            // 如果更新 编辑状态为 false， 当前的编辑为 true，说明现在进入编辑状态
            // 现在需要让复选框获得焦点
            //console.log();
            this.refs.todoInput.focus();
        }
    }
    render() {
        let {data,removeData,changeDone} = this.props;
        let {done,id,txt} = data;
        let {editState} = this.state;
        return (<li className={editState?"editing":""}>
                <div className={`todo ${done?"done":""}`}>
                    <div className="display">
                        <input 
                            className="check" 
                            type="checkbox" 
                            checked={done}
                            onChange={({target})=>{
                                changeDone(id,target.checked)
                            }}
                        />
                        <div 
                            className="todo-content"
                            onDoubleClick={()=>{
                                this.setState({
                                    editState:true
                                })
                            }}
                        >{txt}</div>
                        <span 
                            className="todo-destroy"
                            onClick={()=>{
                                removeData(id);
                            }}
                        ></span>
                    </div>
                    <div className="edit">
                    {/* 组件内部 ref 不能重名 */}
                        <input 
                            className="todo-input" 
                            type="text" 
                            value="213" 
                            ref="todoInput" 
                            onChange={()=>{
                                
                            }}
                            onBlur={()=>{
                                this.setState({
                                    editState:false
                                })
                            }}
                        />
                    </div>
                </div>
            </li>)
      }
  };
  
  export default Li;

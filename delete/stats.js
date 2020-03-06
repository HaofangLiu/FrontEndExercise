import React,{PureComponent} from 'react';
class Stats extends PureComponent {
    render(){
      let {data} = this.props;
      let unDoneData = data.filter(item=>!item.done);
      let doneData = data.filter(item=>item.done);
      return (<div id="todo-stats">
            <span className="todo-count">
                <span className="number">{unDoneData.length}</span> 
                <span className="word">项待完成</span>
            </span>
            {doneData.length>0?<span className="todo-clear"><a>Clear <span>{doneData.length}</span> 已完成事项</a></span>:""}
            
        </div>)
    }
};

export default Stats;

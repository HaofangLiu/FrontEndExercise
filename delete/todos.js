import React,{PureComponent} from 'react';
import Li from './li';
class Todos extends PureComponent {
    render(){
      let {data} = this.props;
      console.log(1);
      return (<ul id="todo-list">
          {
              data.map((itemData)=>{
                  /* 
                    key 该怎么取值 
                    在列表渲染时，如果列表中内容顺序会发生变化，key 一定不能用index,要用id
                 */
                  itemData = {...itemData}; 
                  return <Li 
                      {...this.props}
                      data = {itemData}
                      key = {itemData.id}
                  />
              })
          }
      </ul>)
    }
};

export default Todos;

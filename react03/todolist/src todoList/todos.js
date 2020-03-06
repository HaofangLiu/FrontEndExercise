import React, { PureComponent } from "react";
import Li from "./li";
class Todos extends PureComponent {
  state = {
    data: {}
  };
  render() {
    let { data } = this.props;
    //   console.log(data);
    return (
      <ul id="todo-list">
        {data.map((dataItem) => {
          dataItem = {...dataItem}
          //key怎么取值：在列表渲染时，如果列表内容发生变化，key一定不能用index
          //1. 不推荐用index
          //2. 发生变化（删除）时，index会变为下一个
          return <Li {...this.props} data={dataItem} key={dataItem.id} />;
        })}
      </ul>
    );
  }
}

export default Todos;

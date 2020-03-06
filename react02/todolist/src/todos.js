import React, { Component } from "react";
import Li from "./li";
class Todos extends Component {
  render() {
    let { data,changeDone } = this.props;
    return (
      <div className="todos">
        <ul id="todo-list">
          {data.map((dataItem, index) => {
            return <Li key={index} data={dataItem} changeDone = {changeDone} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Todos;

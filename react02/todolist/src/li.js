import React, { Component } from "react";
class Li extends Component {
  render() {
    let { data, changeDone } = this.props;
    let { id,title, done } = data;
    return (
      <li>
        <div className={`todo ${done ? "done" : ""}`}>
          <div className="display">
            <input 
            className="check" 
            type="checkbox"
            checked={done}
            onChange = {({target}) => {
                changeDone(id,target.checked);
            }} />
            <div className="todo-content">{title}</div>
            <span className="todo-destroy"></span>
          </div>
        </div>
      </li>
    );
  }
}

export default Li;

import React, { PureComponent } from "react";

class StateTodo extends PureComponent {
  render() {
    let { data,removeComplete } = this.props;
    let dataDone = data.filter(item => item.done);
    let dataUndone = data.filter(item => !item.done);
    return (
      <div id="todo-stats">
        <span className="todo-count">
          <span className="number">{dataUndone.length}</span>
          <span className="word">item</span> left.
        </span>
        <span className="todo-clear">
          <a onClick = {() => {
              removeComplete();
          }}>
            Clear <span className="number-done">{dataDone.length}</span>
            completed <span className="word-done">item</span>
          </a>
        </span>
      </div>
    );
  }
}

export default StateTodo;

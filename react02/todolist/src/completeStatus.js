import React, { Component } from "react";
class CompleteStatus extends Component {
  state = {
    unchecked: 0,
    checked: 0
  };

  render() {
    let { unchecked, checked } = this.state;
    let { data, deleteItem } = this.props;

    for (const item of data) {
      if (!item.done) {
        unchecked = unchecked + 1;
      } else {
        checked += 1;
      }
    }

    return (
      <div id="todo-stats">
        <span className="todo-count">
          <span className="number">{unchecked}</span>
          <span className="word"> items</span> left.
        </span>

        <span className="todo-clear">
          <a href="#" onClick={() => {
            //   console.log(data)
            data.forEach(element => {
                if(element.done){
                    deleteItem(element.id)
                }
            });
          }}>
            Clear <span className="number-done">{checked} </span>
            completed <span className="word-done"> item</span>
          </a>
        </span>
      </div>
    );
  }
}

export default CompleteStatus;

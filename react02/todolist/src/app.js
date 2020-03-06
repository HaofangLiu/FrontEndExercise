import React, { Component } from "react";
import "./index.css";
import Title from "./title";
import Add from "./add";
import Todos from "./todos";
import CompleteStatus from "./completeStatus";
class App extends Component {
  state = {
    data: [
      {
        id: 1,
        title: "first data",
        done: true
      },
      {
        id: 2,
        title: "second data",
        done: false
      }
    ]
  };

  //add todos
  add = val => {
    let { data } = this.state;
    data.push({
      id: Date.now(),
      title: val,
      done: false
    });
    this.setState({
      data
    });
  };

  //checkbox
  changeDone = (id, done) => {
    let { data } = this.state;
    data.forEach(item => {
      if (item.id === id) {
        item.done = done;
      }
    });
    this.setState({
      data
    });
  };

  deleteItem = id => {
    let { data } = this.state;
    data.forEach((item,index) => {
      if (item.id == id) {
        data.splice(index, 1);
      }
    });
    this.setState({
      data
    });
  };

  render() {
    let { data } = this.state;
    return (
      <div id="todoapp">
        <Title />
        <div className="content">
          <Add add={this.add} />
          <Todos data={data} changeDone={this.changeDone} />
          <CompleteStatus data={data} deleteItem={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default App;

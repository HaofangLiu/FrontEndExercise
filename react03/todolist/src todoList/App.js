import React, { PureComponent, Fragment } from "react";
import Add from "./Add";
import Todos from "./todos";
import StateTodo from "./todo-state";

class App extends PureComponent {
  state = {
    data: [
      {
        id: 0,
        txt: "data1",
        done: false
      },
      {
        id: 1,
        txt: "data2",
        done: false
      },
      {
        id: 2,
        txt: "data3",
        done: false
      }
    ]
  };

  //add todos
  add = txt => {
    let { data } = this.state;
    data.push({
      id: Date.now(),
      txt,
      done: false
    });
    this.setState({
      data: [...data]
    });
  };

  //change todo state
  changeDone = (id, done) => {
    let { data } = this.state;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i].done = done;
        break;
      }
    }
    this.setState({
      data: [...data]
    });
  };

  //delete todo
  removeTodo = id => {
    let { data } = this.state;
    this.setState({
      data: data.filter(item => item.id !== id)
    });
  };

  //change content
  editTodo = (id, txt) => {
    let { data } = this.state;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i].txt = txt;
        break;
      }
    }
    this.setState({
      data: [...data]
    });
  };

  //clear complete items
  removeComplete = () => {
    let { data } = this.state;
    this.setState({
      data: data.filter(item => !item.done)
    });
  }

  render() {
    let { data } = this.state;
    let { add, changeDone, removeTodo, editTodo,removeComplete } = this;
    return (
      <div id="todoapp">
        <div className="title">
          <h1>Todos</h1>
        </div>
        <div className="content">
          <Add add={add} />
          {data.length > 0 ? (
            <Fragment>
              <Todos
                data={data}
                changeDone={changeDone}
                removeTodo={removeTodo}
                editTodo={editTodo}
              />
              <StateTodo 
              data={data} 
              removeComplete = {removeComplete}/>
            </Fragment>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default App;

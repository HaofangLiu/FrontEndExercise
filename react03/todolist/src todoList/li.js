import React, { PureComponent, createRef } from "react";

class Li extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editState: false,
      val: props.data.txt
    };
  }

  //新版ref用法
  todoInput = createRef();
  //
  componentDidUpdate(prevState) {
    // console.log(prevState);
    let { editState } = prevState;
    let nowEditstate = this.state.editState;
    //如果更新编辑状态为false，当前的编辑为true，说明现在进入编辑状态
    if (!editState && nowEditstate) {
      //   console.log(this.todoInput.current);
      //现在需要让复选框获得焦点
      this.todoInput.current.focus();
    }
  }

  //老版本写法：stringRef
  //ref用来标记react中的元素，在生命周期中可以用ref来获取这个元素
  //   componentDidUpdate(prevState) {
  //     console.log(prevState);
  //     let { editState } = prevState;
  //     let nowEditstate = this.state.editState;
  //     //如果更新编辑状态为false，当前的编辑为true，说明现在进入编辑状态
  //     if (!editState && nowEditstate) {
  //       console.log(this.refs.todoInput);
  //       //现在需要让复选框获得焦点
  //       this.refs.todoInput.focus();
  //     }
  //   }

  render() {
    let { data, removeTodo, changeDone, editTodo } = this.props;
    let { id, done, txt } = data;
    let { editState, val } = this.state;
    // console.log(data);
    return (
      <li className={editState ? "editing" : ""}>
        <div className={`todo ${done ? "done" : ""}`}>
          <div className="display">
            <input
              className="check"
              type="checkbox"
              checked={done}
              onChange={({ target }) => {
                changeDone(id, target.checked);
              }}
            />
            <div
              className="todo-content"
              onDoubleClick={() => {
                this.setState({
                  editState: true
                });
              }}
            >
              {txt}
            </div>
            <span
              className="todo-destroy"
              onClick={() => {
                removeTodo(id);
              }}
            ></span>
          </div>
          <div className="edit">
            <input
              className="todo-input"
              type="text"
              value={val}
              // ref组件内不能重名
              ref={this.todoInput}
              onChange={({ target }) => {
                this.setState({
                  val: target.value
                });
              }}
              onBlur={() => {
                if (!val.trim()) {
                  this.setState({
                    val: txt
                  });
                } else {
                  editTodo(id, val);
                }
                this.setState({
                  editState: false
                });
              }}
            />
          </div>
        </div>
      </li>
    );
  }
}

export default Li;

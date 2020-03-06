import React, { Component } from "react";

export default class Child extends Component {
  state = {
    age: 55
  };
  render() {
    //props接收父级传回来的数据
    // console.log(this.props)
    let { name,editName } = this.props;
    let { age } = this.state;
    return (
      <div>
        <p>name: {name}</p>
        <p>age: {age}</p>

        <button
          onClick={() => {
            this.setState({
              age: ++age
            });
          }}
        >
          change age
        </button>
        <br />
        <button onClick = {() => {
            //子集没有办法修改父级数据，需要在父级中设置好修改的方法，一起传给子集，子集就可以调用这个方法去修改
            editName('changedNaem')
        }}>change name</button>
      </div>
    );
  }
}

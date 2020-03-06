import React, { Component } from "react";
class Add extends Component {
  state = {
    val: ""
  };
  render() {
    let { add } = this.props;
    let { val } = this.state;
    return (
      <div id="create-todo">
        <input
          id="new-todo"
          placeholder="what need to be done?"
          type="text"
          value={val}
          onChange={({target}) => {
            this.setState({
              val: target.value
            });
          }}
          onKeyDown = {({keyCode}) => {
            if(keyCode === 13){
                add(val)
            }
          } 
          }
        ></input>
      </div>
    );
  }
}
export default Add;

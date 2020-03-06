import React,{PureComponent, Fragment} from 'react';

//PureComponent，注意：本身是浅对比；如果对象类型，记得返回新的对象
//返回新对象的方法(两种)：
//data = {...data}
//data = Object.assign({},data)
class App extends PureComponent {
  state = {
    name:'kkf'
  }
  //生命周期，走到这里检测是否相同去更新视图
  // shouldComponentUpdate(){
  //   console.log('here i am!!!')
  //   return false;//false不会继续走
  // }
  render(){
    let {name} = this.state
    return(
      <Fragment>
        <div>{name}</div>
        <button onClick = {() => {
          // name = "sss"
          this.setState({
            name
          })
        }}>
          change
        </button>
      </Fragment>
    )
  }
}

export default App;

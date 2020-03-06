import React,{PureComponent} from 'react';
class Add extends PureComponent {
    state = {
      val:""
    }
    render(){
      let {val} = this.state;
      let {add} = this.props;
      return (<div id="create-todo">
            <input 
                id="new-todo" 
                placeholder="What needs to be done?" 
                autoComplete="off" 
                type="text" 
                value={val}
                onChange={({target})=>{
                    this.setState({
                        val:target.value 
                    })
                }}
                onKeyDown={({keyCode,target})=>{
                    if(keyCode == 13){
                        if(!(val.trim())){
                            alert("请输入内容");
                            target.focus();
                        } else {
                            add(val);
                            this.setState({
                                val:""
                            })
                        }
                    }
                }}
            />
      </div>)
    }
};

export default Add;

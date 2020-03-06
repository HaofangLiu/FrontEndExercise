import React,{Component} from 'react';
// props 用来接收父组件传递过来的数据 对象

/*
    state 用于组件内部，在state存储该组件内部的一些数据
    props
*/

export default class Dl extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         isShow:false
    //     }
    // }
    // state = {
    //     isShow: false
    // }
    render(){
        let {data,showName,name,changeShow} = this.props;
        console.log(showName,name)
        // let {isShow} = this.state;
        return (
            <dl 
                className={`friend-group ${showName == name ? 'expanded':"" }` }
                onClick={()=>{
                    //this.setState.isShow = !isShow;
                    // this.setState({
                    //     isShow: !isShow
                    // });
                    changeShow(showName == name ? "" : name)
                }}
            >
                <dt>{data.title}</dt>
                {
                    data.list.map((item,index)=>{
                        return <dd key={index}>{item.name}</dd>
                    })
                }
            </dl>
        )
    }
}
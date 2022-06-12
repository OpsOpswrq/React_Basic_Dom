import React,{Component} from "react";

class Demo extends Component{
    state = {count:0}
    addOne = ()=>{
        this.setState((state,props)=>{  // 这里的state是之前的值,props是外组件传递过来的
            // console.log(state,props)
            return {count:state.count+1}
        },()=>{
            // console.log(this.state.count)
        })
    }
    render(){
        const {count} = this.state
        return (
            <div>
                <h1>当前求和为:{count}</h1>
                <button onClick={this.addOne}>点我加一</button>
            </div>
        )
    }
}
export default Demo;
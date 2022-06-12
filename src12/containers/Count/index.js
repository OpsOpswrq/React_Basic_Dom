// 引入仓库内容
// import Store from "../../redux/store";
// 引入UI组件
import React,{Component} from "react";
import {connect} from "react-redux";
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/action/count";

class Count extends Component{
    // componentDidMount() {
    //     // 挂载事件，监听redux的变化
    //     Store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }
    // increment = ()=> {
    //     const {value:number} = this.selectNum
    //     Store.dispatch(createIncrementAction(number*1))
    // }
    // decrement = ()=>{
    //     const {value:number} = this.selectNum
    //     Store.dispatch(createDecrementAction(number*1))
    // }
    // incrementIfOdd = ()=>{
    //     const preNumber = Store.getState()*1
    //     if(Math.abs(preNumber)%2===1){
    //         const {value:number} = this.selectNum
    //         Store.dispatch(createIncrementAction(number*1))
    //     }
    //
    // }
    // incrementAsync = ()=>{
    //     const {value:number} = this.selectNum
    //     Store.dispatch(createIncrementAsyncAction(number*1,1000))
    // }
    increment = ()=>{
        const {value:number} = this.selectNum
        const {incrementRedux} = this.props
        incrementRedux(number*1)
    }
    decrement = ()=>{
        const {value:number} = this.selectNum
        const {decrementRedux} = this.props
        decrementRedux(number*1)
    }
    incrementIfOdd = ()=>{
        const {value:number} = this.selectNum
        const {incrementRedux,count} = this.props
        if(Math.abs(count)%2===1){
            incrementRedux(number*1)
        }
    }
    incrementAsync = ()=>{
        const {value:number} = this.selectNum
        const {incrementAsync} = this.props
        incrementAsync(number*1,1000)
    }
    render(){
        const {count,personList} = this.props
        return (
            <div>
                <h1>我是Count组件</h1>
                <h2>当前的求和为:{count},下方组件的人数为:{personList.length}</h2>   {/*初始值的获取*/}
                <select ref={(currentNode)=>{this.selectNum = currentNode;}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select><br/>
                <button onClick={this.increment}>+</button><br/>
                <button onClick={this.decrement}>-</button><br/>
                <button onClick={this.incrementIfOdd}>当前求和为奇数在加</button><br/>
                <button onClick={this.incrementAsync}>异步加</button><br/>
            </div>
        )
    }
}
// 引入connect用于链接UI组件与redux
// 创建容器组件
// 传递两个函数参数
// 第一个参数返回状态，给props的，返回一个对象
// 第二个参数返回动作参数，返回一个对象
const CountContainer = connect((state)=>{ // 已经有state参数了
    return {count:state.countReducer,personList:state.personReducer}
},(dispatch)=>{ // 已经有dispatch参数了
    return {
        incrementRedux:(data)=>{dispatch(createIncrementAction(data))},
        decrementRedux:(data)=>{dispatch(createDecrementAction(data))},
        incrementAsync:(data,timeOut)=>{dispatch(createIncrementAsyncAction(data,timeOut))}
    } // 直接传递数据
})(Count)

export default CountContainer;
import React,{Component} from "react";

class Count extends Component{
    state = {count:0}
    increment = ()=> {
        const {value:number} = this.selectNum
        const {count:preNumber} = this.state
        this.setState({count:preNumber+number*1})
    }
    decrement = ()=>{
        const {value:number} = this.selectNum
        const {count:preNumber} = this.state
        this.setState({count:preNumber-number*1})
    }
    incrementIfOdd = ()=>{
        const {count:preNumber} = this.state
        if(Math.abs(preNumber)%2===1){
            const {value:number} = this.selectNum
            this.setState({count:preNumber+number*1})
        }

    }
    incrementAsync = ()=>{
        setTimeout(()=>{
            const {value:number} = this.selectNum
            const {count:preNumber} = this.state
            this.setState({count:preNumber+number*1})
        },1000)
    }
    render(){
        const {count} = this.state
        return (
            <div>
                <h1>当前的求和为:{count}</h1><br/>
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
export default Count;
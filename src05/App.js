import React,{Component} from "react";
import Search from "./Search";
import List from "./List";
class App extends Component{
    state = {
        users:[], // users初始化为数组
        isFirst:true, // 是否为第一次打开页面
        isLoading:false, // 标识是否处于加载中
        err:'' // 存储相关的错误信息
    }
    updateStateApp = (stateObj)=>{
        this.setState(stateObj)
    }
    render() {
        return (
            <div>
                <Search updateStateApp={this.updateStateApp}/>
                <List {...this.state}/>
            </div>
        )
    }
}
export default App;
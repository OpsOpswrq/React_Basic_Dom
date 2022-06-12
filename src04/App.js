import React,{Component} from "react";
import axios from "axios";
class App extends Component{
    demo = ()=>{
        // 发送axios请求
        axios.request({
            method:"get",
            url:'http://localhost:3000/api/test'
        }).then((res)=>{
            console.log(res.data)
        },(err)=>{
            console.log(err.message)
        })
    }
    render(){
        return (
            <div>
                <button onClick={this.demo}>点我发请求</button>
            </div>
        )
    }
}
export default App;
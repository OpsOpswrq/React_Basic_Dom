// 建立React核心库
import React from "react";
import Hello from "./components/Hello/Hello";
// 使用类组件
class App extends React.Component{
    render(){
        return (
            <Hello/>
        )
    }
}
export default App;
import React,{Component} from "react";
import './css/App.css'
import {Link,Route} from 'react-router-dom'
import about from "./component/About";
import Home from "./component/Home";
class App extends Component{
    render(){
        return (
            <div>
                <h1>React_Router_Dom</h1>
                {/*<BrowserRouter>/!*浏览器的路由包含块--编写路由链接*!/ /!*BrowserRouter全体包裹，实现通信*!/*/}
                    <Link className="router" to="/about">About</Link><br/>
                    <Link className="router" to="/home">Home</Link>
                    <Route path="/about" component={about}/>
                    <Route path="/home" component={Home}/>
                {/*</BrowserRouter>*/}
            </div>
        )
    }
}
export default App;
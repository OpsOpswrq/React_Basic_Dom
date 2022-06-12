import React,{Component} from "react";
import {Redirect, Route, Switch} from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";

class App extends Component{
    render(){
        return (
            <div>
                <Header/> {/*一般组件*/}
                {/*<BrowserRouter>/!*浏览器的路由包含块--编写路由链接*!/ /!*BrowserRouter全体包裹，实现通信*!/*/}
                <MyNavLink to="/home">Home</MyNavLink>
                <MyNavLink to="/about">About</MyNavLink>
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                    <Redirect to="/about"/>
                </Switch>
                {/*</BrowserRouter>*/}
            </div>
        )
    }
}
export default App;
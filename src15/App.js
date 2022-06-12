import React,{Component,lazy,Suspense} from "react";
import {Redirect, Route, Switch} from 'react-router-dom'
// import About from "./pages/About";
// import Home from "./pages/Home";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";
import Loading from "./pages/Loading";

const Home = lazy(() =>import('./pages/Home'));
const About = lazy(()=>import("./pages/About"));
class App extends Component{
    render(){
        return (
            <div>
                <Header/> {/*一般组件*/}
                {/*<BrowserRouter>/!*浏览器的路由包含块--编写路由链接*!/ /!*BrowserRouter全体包裹，实现通信*!/*/}
                <MyNavLink to="/home">Home</MyNavLink>
                <MyNavLink to="/about">About</MyNavLink>
                <Switch>
                    <Suspense fallback={<Loading/>}> {/*当用户的网络比较慢的时候，调用这个界面*/}
                        <Route path="/about" component={About}/>
                        <Route path="/home" component={Home}/>
                        <Redirect to="/about"/>
                    </Suspense>
                </Switch>
                {/*</BrowserRouter>*/}
            </div>
        )
    }
}
export default App;
import React,{Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
import Messages from "./Messages";
import News from "./News";

class Home extends Component{
    render() {
        return (
            <div>
                Home...
                {/*<BrowserRouter>*/}
                <MyNavLink to={"/home/news"}>News</MyNavLink>
                <MyNavLink to={"/home/messages"}>Messages</MyNavLink>
                <Switch>
                    <Route path="/home/news" component={News}/>
                    <Route path="/home/messages" component={Messages}/>
                    <Redirect to="/home/news"/>
                </Switch>
                {/*</BrowserRouter>*/}
            </div>
        )
    }
}
export default Home;
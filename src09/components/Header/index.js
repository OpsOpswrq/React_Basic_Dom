import React,{Component} from "react";
import {withRouter} from "react-router-dom";

class Header extends Component{
    render() {
        return (
            <div>
                <h1>React_Router_Dom</h1>
            </div>
        )
    }
}
export default withRouter(Header);
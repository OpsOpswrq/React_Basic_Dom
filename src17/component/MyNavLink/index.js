import React,{Component} from "react";
import {NavLink} from "react-router-dom";

class MyNavLink extends Component{
    render(){
        const {to,children} = this.props
        // 这里出现了改变
        return (
            <NavLink to={to} className="router" activeclassname="active">{children}</NavLink>
        )
    }
}
export default MyNavLink;
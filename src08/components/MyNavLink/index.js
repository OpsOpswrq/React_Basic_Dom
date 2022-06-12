import React,{Component} from "react";
import {NavLink} from "react-router-dom";

class MyNavLink extends Component{
    render(){
        const {children} = this.props
        // console.log(this.props)
        return(
            <div>
                <NavLink activeClassName="active" className="router" {...this.props} children={children}/>
            </div>
        )
    }
}
export default MyNavLink;
import React from "react";
import './Hello.css'
class Hello extends React.Component {
    /*这样就可以做到样式的区分*/
    render() {
        return (
            <h1 className='title'>Hello World</h1>
        )
    }
}
export default Hello;
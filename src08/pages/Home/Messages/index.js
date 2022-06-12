import React,{Component} from "react";
import {Link, Route} from "react-router-dom";
import Detail from "./Detail";

class Messages extends Component{
    state = {messages:
            [
                {id:'01',title:'消息1'},
                {id:'02',title:'消息2'},
                {id:'03',title:'消息3'},
            ]
    }
    render(){
        const {messages} = this.state
        return (
            <div>
                {
                    messages.map((message)=>{
                        return (
                            <div key={message.id}>
                                {/*传递params参数*/}
                                {/*<Link className="router" to={`/home/messages/detail/${message.id}/${message.title}`}>{message.title}</Link><br/>  /!*restFul风格加上模糊匹配*!/*/}
                                {/*传递search参数*/}
                                {/*<Link className="router" to={`/home/messages/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link>*/}
                                {/*传递state参数*/}
                                <Link className="router" to={{pathname:'/home/messages/detail',state:{id:message.id,title:message.title}}}>{message.title}</Link>
                            </div>
                        )
                    })
                }
                {/*按照要求传递*/}
                {/*<Route path="/home/messages/detail/:id/:title" component={Detail}/>*/}
                {/*<Route path="/home/messages/detail" component={Detail}/>*/}
                <Route path="/home/messages/detail" component={Detail}/>
            </div>
        )
    }
}
export default Messages;
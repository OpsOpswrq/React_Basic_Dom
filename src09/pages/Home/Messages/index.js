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
    replaceShow = (id,title)=>{
        return ()=>{
            this.props.history.replace(`/home/messages/detail/${id}/${title}`)
        }
    }
    pushShow = (id,title)=>{
        return ()=>{
            this.props.history.push(`/home/messages/detail/${id}/${title}`)
        }
    }
    back = ()=>{
        this.props.history.goBack()
    }
    forward = ()=>{
        this.props.history.goForward()
    }
    go = ()=>{
        this.props.history.go(2)
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
                                <Link className="router" to={`/home/messages/detail/${message.id}/${message.title}`}>{message.title}</Link><br/>  {/*restFul风格加上模糊匹配*/}
                                <button onClick={this.pushShow(message.id,message.title)}>push查看</button>
                                <button onClick={this.replaceShow(message.id,message.title)}>replace查看</button>
                                {/*传递search参数*/}
                                {/*<Link className="router" to={`/home/messages/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link>*/}
                                {/*传递state参数*/}
                                {/*<Link replace={true} className="router" to={{pathname:'/home/messages/detail',state:{id:message.id,title:message.title}}}>{message.title}</Link>*/}
                            </div>
                        )
                    })
                }
                {/*按照要求传递*/}
                <Route path="/home/messages/detail/:id/:title" component={Detail}/>
                {/*<Route path="/home/messages/detail" component={Detail}/>*/}
                {/*<Route path="/home/messages/detail" component={Detail}/>*/}
                <button onClick={this.back}>后退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>go</button>
            </div>
        )
    }
}
export default Messages;
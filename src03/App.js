import React,{Component} from "react";
import Header from "./component/Header/Header";
import List from "./component/List/List";
import Footer from "./component/Footer/Footer";
import {nanoid} from "nanoid/non-secure";
class App extends Component{
    // 状态在哪，修改状态的方法就在哪
    state = {todos:[
            {id:1,name:'吃饭',done:true},
            {id:2,name:'写作业',done:false}
        ]
    }
    addTodo = (data)=>{
        const {todos} = this.state
        const todo = {id:nanoid(),name:data,done:false}
        this.setState({todos:[todo,...todos]})
    }
    handleChecked = (id,flag)=> {
        const {todos} = this.state
        const newTodos = todos.map((element)=>{
            if(element.id===id){
                return {...element,done:flag} // 直接进行属性覆盖，然后更新属性
            }
            return element
        })
        this.setState({todos:newTodos})
    }
    deleteTodo = (id)=>{
        const {todos} = this.state
        const newTodos = todos.filter((todo)=>{
            return todo.id !== id
        })
        this.setState({todos:newTodos})
    }
    updateAllTodos = (flag)=>{
        const {todos} = this.state
        const newTodos = todos.map((element)=>{
            return {...element,done:flag}  // 直接进行属性覆盖，然后更新属性
        })
        this.setState({todos:newTodos})
    }
    deleteAllTodos = ()=>{
        const {todos} = this.state
        const newTodos = todos.filter((element)=>{
            return !element.done
        })
        this.setState({todos:newTodos})
    }
    render() {
        const {todos} = this.state
        return (
            <div>
                <Header addTodo={this.addTodo}/>
                <List todos={todos} handleChecked={this.handleChecked} deleteTodo={this.deleteTodo}/>
                <Footer todos={todos} updateAllTodos={this.updateAllTodos} deleteAllTodos={this.deleteAllTodos}/>
            </div>
        )
    }
}
export default App;
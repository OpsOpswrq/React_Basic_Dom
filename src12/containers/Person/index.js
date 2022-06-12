import React,{Component} from "react";
import {connect} from "react-redux";
import {createAddPersonAction} from "../../redux/action/person";
class Person extends Component{
    addPerson = ()=> {
        const {value:name} = this.name
        const {value:age} = this.age
        if(name.trim()!==""||age.trim()!=="") {
            const {addPersonRedux} = this.props
            addPersonRedux({name: name, age: age*1})
            this.name.value = ""
            this.age.value = ""
        }
    }
    render(){
        const {personList,count} = this.props
        return (
            <div>
                <h1>我是Person组件</h1>
                <h2>上方组件的count值为:{count}</h2>
                <input ref={(currentNode)=>{this.name=currentNode}} type="text" placeholder="输入名字"/><br/>
                <input ref={(currentNode)=>{this.age=currentNode}}type="text" placeholder="输入年龄"/><br/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        personList.map((element)=>{
                            return (
                                <li key={element.id}>{element.name}--{element.age}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


const PersonContainer = connect((state)=>{
    return {personList:state.personReducer,count:state.countReducer}
},(dispatch)=>{
    return {
        addPersonRedux:(personObj)=>{dispatch(createAddPersonAction(personObj))}
    }
})(Person)

export default PersonContainer;
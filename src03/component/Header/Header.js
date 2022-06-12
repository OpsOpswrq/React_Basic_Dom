import React,{Component} from "react";
import PropTypes from 'prop-types'
import './Header.css'
class Header extends Component{
    // 限制传递的属性进行限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }
    handleTodo = (event)=>{
        const {keyCode,target} = event
        const {addTodo} = this.props
        if(keyCode === 13){
            if(target.value.trim()!==""){
                addTodo(target.value.trim())
                target.value = ""
            }
        }
    }
    render() {
        return (
            <div>
                <input onKeyUp={this.handleTodo} type='text' className='title' placeholder='请输入你的任务'/>
            </div>
        )
    }
}
export default Header;
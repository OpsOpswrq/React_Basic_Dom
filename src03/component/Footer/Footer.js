import React,{Component} from "react";
import PropTypes from "prop-types";
class Footer extends Component{
    static propTypes = {
        todos:PropTypes.array.isRequired,
        updateAllTodos:PropTypes.func.isRequired,
        deleteAllTodos:PropTypes.func.isRequired
    }
    updateAllTodos = (event)=>{
        const {updateAllTodos} = this.props
        const {checked} = event.target
        if(checked){
            updateAllTodos(checked)
        }else{
            updateAllTodos(checked)
        }
    }
    deleteAllTodos = ()=>{
        const {deleteAllTodos} = this.props
        deleteAllTodos()
    }
    render() {
        const {todos} = this.props
        const checkedTodosLength = todos.reduce((pre,current)=>{return pre+(current.done?1:0)},0)
        const total = todos.length
        const flag = total===checkedTodosLength && total!==0
        return (
            <div>
                <input type='checkbox' checked={flag} onChange={this.updateAllTodos}/>&emsp;&emsp;&emsp;&emsp;
                <span>已完成了 {checkedTodosLength}</span>/全部 {total}&emsp;&emsp;&emsp;&emsp;
                <button onClick={this.deleteAllTodos}>清除已完成的任务</button>
            </div>
        )
    }
}
export default Footer;
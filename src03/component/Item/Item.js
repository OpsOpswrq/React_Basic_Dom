import React,{Component} from "react";
import PropTypes from "prop-types";
class Item extends Component{
    state = {mouse:false}
    static propTypes = {
        deleteTodo:PropTypes.func.isRequired,
        handleChecked:PropTypes.func.isRequired,
        element:PropTypes.object.isRequired
    }
    handleMouse = (LeaveOrEnter)=>{
        return ()=>{
            this.setState({mouse:LeaveOrEnter})
        }
    }
    handleChange = (id)=>{
        const {handleChecked} = this.props
        return (event)=>{
            handleChecked(id,event.target.checked)
        }
    }
    deleteTodo = (id)=>{
        const {deleteTodo} = this.props
        if(window.confirm('确定删除吗?')){  // confirm是window上的方法
            deleteTodo(id)
        }
    }
    render() {
        const {element} = this.props
        const {mouse} = this.state
        return (
            <div onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)} style={{backgroundColor:mouse?'#ddd':'white',width:'600px'}}>
                <input type='checkbox' checked={element.done} onChange={this.handleChange(element.id)}/>&emsp;&emsp;&emsp;&emsp;&emsp;
                <span>{element.name}</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <button onClick={()=>{this.deleteTodo(element.id)}} style={{display:mouse?'block':'none'}}>删除</button>
            </div>
        )
    }
}
export default Item;
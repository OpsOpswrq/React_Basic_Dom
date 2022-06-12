import React,{Component} from "react";
import PropTypes from "prop-types";
import Item from "../Item/Item";
class List extends Component{
    // 对传递的属性进行限制
    static propTypes = {
        todos:PropTypes.array.isRequired,
        handleChecked:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }
    render() {
        const {todos,handleChecked,deleteTodo} = this.props
        return (
            <div>
                {
                    todos.map((element)=>{
                        return (
                            <Item key={element.id} element={element} handleChecked={handleChecked} deleteTodo={deleteTodo}/>
                        )
                    })
                }
            </div>
        )
    }
}
export default List;
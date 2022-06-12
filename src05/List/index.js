import React,{Component} from "react";
import Item from "../Item";
import PropTypes from "prop-types";
class List extends Component{
    static propsTypes = {
        users:PropTypes.array.isRequired,
        isFirst:PropTypes.bool.isRequired,
        isLoading:PropTypes.bool.isRequired,
        err:PropTypes.string.isRequired,
    }
    render() {
        const {users,isFirst,isLoading,err} = this.props
        return (
            // 最强三元表达式
            <div>
                {
                    isFirst?<h2>欢迎使用</h2>:
                        isLoading?<h2>Loading...</h2>:
                            err ? <h2>{err}</h2>:
                                users.map((element)=>{
                                    return (<Item key={element.id} user={element}/>)
                                })
                }
            </div>
        )
    }
}
export default List;
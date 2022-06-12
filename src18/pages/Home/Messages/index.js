import {useState} from "react";
import {Link,Outlet,useNavigate} from "react-router-dom";

function Messages(){
    const navigate = useNavigate()
    const [messages] = useState([
        {id:'001',title:'消息1',content:'我是消息1'},
        {id:'002',title:'消息2',content:'我是消息2'},
        {id:'003',title:'消息3',content:'我是消息3'},
        {id:'004',title:'消息4',content:'我是消息4'},
    ])
    function showDetails(element){
        navigate('details',{
            replace:false,
            state:{
                id:element.id,
                title:element.title,
                content:element.content,
            }
        })
    }
    return (
        <div>
            <ul>
                {
                    messages.map((element)=>{
                        return (
                            <li key={element.id}>
                                <Link to="details" state={{id:element.id,title:element.title,content:element.content}} className="router">{element.title}</Link>
                                <button onClick={()=>{showDetails(element)}}>点我看详情</button>
                            </li>
                        )
                    })
                }
            </ul>
            <Outlet/>  {/*显示子组件*/}
        </div>
    )
}
export default Messages;
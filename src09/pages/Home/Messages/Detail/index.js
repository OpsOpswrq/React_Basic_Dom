import React,{Component} from "react";
// import qs from "query-string";

const DetailData = [
    {id:'01',content:'我是消息1'},
    {id:'02',content:'我是消息2'},
    {id:'03',content:'我是消息3'},
]
class Detail extends Component{
    render(){
        // 接收params参数
        const {id,title} = this.props.match.params
        // 接收search参数
        // const {search} = this.props.location
        // const {id,title} = qs.parse(search.slice(1)) // 截取字符
        // 接收state参数
        // const {id,title} = this.props.location.state || {}
        const findContent = DetailData.find((element)=>{
            return element.id === id
        }) || {}
        return (
            <div>
                <p>id:{id}</p>
                <p>title:{title}</p>
                <p>content:{findContent.content}</p>
            </div>
        )
    }
}
export default Detail;
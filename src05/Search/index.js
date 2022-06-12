import React,{Component} from "react";
import axios from "axios";
import PropTypes from "prop-types";
class Search extends Component{
    static propsTypes = {
        updateStateApp:PropTypes.func.isRequired,
    }
    search = ()=>{
        const {updateStateApp} = this.props
        updateStateApp({isFirst:false,isLoading:true}) // 直接传递state中的属性，直接覆盖属性
        const {keyWord:{value:val}} = this // keyWord没有赋值，也就是没有具体的值，这个是连续赋值，在这个中还可以改名字
        axios.request({
            method:'get',
            url:`/api/search/users?q=${val}` // 仅限在本地的服务器下可以这样省略网站头
        }).then((res)=>{
            updateStateApp({users:res.data.items,isLoading:false})  // 直接传递state中的属性，直接覆盖属性
        },(err)=>{
           updateStateApp({isLoading:false,err:err.message}) // 直接传递state中的属性，直接覆盖属性
        })
    }
    render() {
        return (
            <div>
                <input ref={element=>{this.keyWord=element}} type='text' name='username' placeholder='请输入用户名'/>
                <button onClick={this.search}>搜索</button>
            </div>
        )
    }
}
export default Search;
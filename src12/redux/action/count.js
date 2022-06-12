// 该文件专门为Count组件生成action对象
// 同步action   object
// import Store from "./store";
import {INCREMENT,DECREMENT} from "../constant";
const createIncrementAction = (data) => ({type:INCREMENT,data})  // 单一对象返回
function createDecrementAction(data){
    return {type:DECREMENT,data}
}
// 异步action  function
const createIncrementAsyncAction = (data,timeOut) => {
    return (dispatch)=>{
        setTimeout(()=>{
            // Store.dispatch(createIncrementAction(data)) // 只有函数体中才能使用其他函数,最后都得转换为对象类型的
            dispatch(createIncrementAction(data))
        },timeOut)
    }
}
export {createIncrementAction,createDecrementAction,createIncrementAsyncAction};
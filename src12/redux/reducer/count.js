// reducer的本质就是一个函数
import {INCREMENT, DECREMENT} from "../constant";
// 维护一个count的参数值
const initState = 0
function countReducer(preState=initState,action){ // 默认参数
    const {type,data} = action
    switch (type){
        case INCREMENT: // 如果是加
            return preState+data
        case DECREMENT: // 如果是减
            return preState-data
        default:
            return preState // 首先返回初始值
    }
}
export default countReducer;
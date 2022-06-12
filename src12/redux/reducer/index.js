import countReducer from "./count";
import personReducer from "./person";
import {combineReducers} from "redux";
// 汇总所有的reducers组成一个reducer
const allReducers = combineReducers({
    countReducer,
    personReducer,
})
export default allReducers;
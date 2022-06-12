import {ADD_PERSON} from "../constant";
import {nanoid} from "nanoid";

const initState = []
function personReducer(preState=initState,action){
    const {type,data} = action
    switch (type){
        case ADD_PERSON:
            return [{id:nanoid(),name:data.name,age:data.age},...preState]
        default:
            return preState
    }
}
export default personReducer;
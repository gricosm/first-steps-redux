import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import taskReducer from "./taskReducer";

const mainReducer = combineReducers({
    token: loginReducer,
    task: taskReducer
})

export default mainReducer;
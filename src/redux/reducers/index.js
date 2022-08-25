import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    todos: todoReducer,
    counter: counterReducer
});

export default rootReducer;
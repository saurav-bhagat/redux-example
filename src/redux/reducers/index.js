import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";
import { combineReducers } from "redux";
import githubReducers from "./githubReducer";


const rootReducer = combineReducers({
    todos: todoReducer,
    counter: counterReducer,
    github: githubReducers
});

export default rootReducer;
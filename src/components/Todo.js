import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/todoAction";


const Todo = ({ todo }) => {

    const dispatch = useDispatch();
    console.log(todo.complete);

    return (
        <p 
            onClick={() => dispatch(toggleTodo(todo.id))}
            className={todo.complete ? 'todo-complete': ''}
        >
            {todo.title}
        </p>
    );
};

export default Todo;
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoAction";
import Todo from "./Todo";


const TodoList = () => {

    const [ currentTodo, setCurrentTodo ] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const handleAddTodo = () => {
        setCurrentTodo('');
        const todoObj = {
            title: currentTodo,
            id: Date.now(),
            complete: false
        };
        dispatch(addTodo(todoObj));
    };

    return (
        <div>
            <h1>Todos</h1>

            <input 
                type="text" 
                onChange={(e) => setCurrentTodo(e.target.value)} 
                value={currentTodo}
            />
            <button onClick={handleAddTodo}>Add todo</button>

            <br/><br/>

            {
                todos.map((todo) => {
                return <Todo key={todo.id} todo={todo} />
            })}
        </div>
    );
};

export default TodoList;
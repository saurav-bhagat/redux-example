import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementAction, decrementAction } from "../redux/actions";
import { Link } from "react-router-dom";


const Counter = () => {

    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);
    const todos = useSelector((state) => state.todos);

    return (
        <div className="counter-wrapper">
            <p>Count: {count}</p>
            <br />
            <button onClick={() => dispatch(incrementAction())}>Increment</button>
            <button onClick={() => dispatch(decrementAction())}>Decrement</button>
            <br /><br />
            <Link to="/todo">Todo List</Link>
        </div>
    );
};

export default Counter;
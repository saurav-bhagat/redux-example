

const addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: todo
    };
};

const toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO",
        payload: id
    };
};

export {
    addTodo,
    toggleTodo
};
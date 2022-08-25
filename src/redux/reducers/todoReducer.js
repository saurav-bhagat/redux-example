

const initialState = [];

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TODO":
            return [...state, action.payload]
        case "TOGGLE_TODO":
            return state.map((todo) => {
                if(todo.id === action.payload){
                    todo.complete = !todo.complete;
                }
                return todo;
            });
        default:
            return state;
    }
};

export default todoReducer;
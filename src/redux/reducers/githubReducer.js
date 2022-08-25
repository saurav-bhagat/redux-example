

const initialState = {};

const githubReducers = (state = initialState, action) => {
    switch(action.type) {
        case "GET_USER_DETAILS":
            return action.payload;
        default:
            return state;
    }
}

export default githubReducers;
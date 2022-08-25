
// redux actions are pure functions which returns object containing 
// action type and payload

const incrementAction = () => {
    return {
        type: "INCREMENT"
    }
}

const decrementAction = () => {
    return {
        type: "DECREMENT"
    }
}

export {
    incrementAction, 
    decrementAction
};
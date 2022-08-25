import axios from "axios";


const callUserApi = (userName) => {
    return (dispatch) => {
        axios.get(`https://api.github.com/users/${userName}`)
        .then((res) => {
            dispatch(getUserDetails(res.data))
        })
        .catch((err) => console.log(err));
    }
     
};

const getUserDetails = (details) => {
    return {
        type: "GET_USER_DETAILS",
        payload: details
    }
};

export {
    callUserApi,
    getUserDetails
};
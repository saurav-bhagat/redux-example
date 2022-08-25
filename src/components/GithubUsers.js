import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callUserApi } from "../redux/githubActions";

const GithubUsers = () => {

    const [ userName, setUserName ] = useState('');
    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.github);

    const handleGetUser = () => {
        if(userName === ""){
            alert("Please enter valid user");
            return;
        }
        dispatch(callUserApi(userName));
    };

    return (
        <div>
            <h2>Get github user details</h2>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={handleGetUser}>Get details</button>

            <div className="user-details-wrapper">
                <h2>User Details</h2>
                <img src={userDetails.avatar_url} alt="avtar"></img>
                <p>{userDetails.name}, {userDetails.location}</p>
                <p>Twitter Username: <a href={`https://twitter.com/${userDetails.twitter_username}`}>{userDetails.twitter_username}</a></p>
                <p>Blog: <a href={userDetails.blog}>{userDetails.blog}</a></p>
            </div>
        </div>
    );
};

export default GithubUsers;
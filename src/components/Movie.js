import React from "react";


const Movie = ({ title, releaseDate }) => {

    console.log("Movie component rendered");

    return (
        <div>
            <h1>Movie {title} was released on {releaseDate}</h1>
        </div>
    );
};

export default React.memo(Movie);
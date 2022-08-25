import Movie from "./Movie";



const MovieViewsRealTime = ({ views, title, releaseDate }) => {
    return (
        <div>
            <Movie
                title={title}
                releaseDate={releaseDate}
            />
            <h2>Movie Views: {views}</h2>
        </div>
    );
}

export default MovieViewsRealTime;
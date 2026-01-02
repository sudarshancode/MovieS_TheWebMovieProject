import { useLocation } from "react-router-dom";
import Header from "../component/Header";

function MovieDetails(){
    const location=useLocation();
    const {movie} =location.state;

    return (
        <>
            <Header />
            <div className="movie-details">
                <h1>{movie.original_title}</h1>
                <img src={movie.poster_path}/>
                <div>
                    <h5>Overview:{movie.overview}</h5>
                    <h5>Release: {movie.release_date}</h5>
                    <h5>Language: {movie.original_language}</h5>

                </div>

            </div>
        </>
    )
}
export default MovieDetails;
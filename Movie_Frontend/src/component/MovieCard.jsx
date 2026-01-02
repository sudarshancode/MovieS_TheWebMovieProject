import { useNavigate } from "react-router-dom";

const MovieCard=({movie})=>{
    const navigate=useNavigate();
    const handleClicked=()=>{
        navigate(`/movie/${movie.id}`,{state:{movie}})
    }
    return (
        <div className="card-body" onClick={handleClicked}>
            <img src={movie.poster_path} />
            <div className="card-container">
                <h2>{movie.original_title}</h2>
            </div>
        </div>
    )
}
export default MovieCard;
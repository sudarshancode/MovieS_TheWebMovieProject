import { useEffect, useState } from "react";
import MovieCard from "../component/MovieCard";

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page,setPage]=useState(1);

    useEffect(() => {
        fetch(`https://jsonfakery.com/movies/simple-paginate?page=${page}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setMovies(prev=>[...prev,...data.data]);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }, [page]);
    if (loading) {
        return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading Movies......</p>
    }
    return (
        <div className="movie-container">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
            <div className="load-more-wrapper">
                <button onClick={() => setPage(page+1)}>Load More</button>
            </div>
        </div>
    )
}
export default MovieList;
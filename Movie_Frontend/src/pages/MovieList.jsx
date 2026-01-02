import { useEffect, useState } from "react";
import MovieCard from "../component/MovieCard";

function MovieList(){
    const [movies,setMovies]=useState([]);

    useEffect(()=>{
        fetch('https://jsonfakery.com/movies/simple-paginate')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log("API RESPONSE 👉", data);
            setMovies(data.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);
    return (
       <div className="movie-container">
        {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
       </div> 
    )
}
export default MovieList;
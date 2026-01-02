import { useLocation } from "react-router-dom";
import Header from "../component/Header";
import { FastAverageColor } from "fast-average-color";
import { useEffect, useState } from "react";

function MovieDetails() {
    const location = useLocation();
    const { movie } = location.state;
    const [bgColor, setBgColor] = useState("#000");

    useEffect(() => {
        const fac = new FastAverageColor();
        const safePosterUrl = movie.poster_path.replace(
            "/original/",
            "/w500/"
        );

        fac.getColorAsync(safePosterUrl,{ crossOrigin: "anonymous" })
            .then(color => {
                setBgColor(color.rgba);
            })
            .catch(err => console.log(err))
    }, [movie.poster_path]);
    return (
        <>
            <div
            className="movie-details"
            style={{
                "--bg-color": bgColor,
                "--bg-image": `url(${movie.poster_path})`
            }}
            >
                <Header />

                <div className="overlay" />

                <div className="content">
                    <img
                    className="poster"
                    src={movie.poster_path}
                    alt={movie.original_title}
                    />

                    <div className="info">
                    <h1>{movie.original_title}</h1>
                    <p>{movie.overview}</p>
                    <p>Release: {movie.release_date}</p>
                    <p>Language: {movie.original_language}</p>
                    </div>
                </div>
            </div>
            <div className="cast-div" style={{backgroundColor: bgColor}}>
                    <h2>Cast :</h2>
                    <ul>
                        {movie.casts.slice(0,4).map(cast => (
                        <li key={cast.id}>
                            <img
                            src={cast.profile_path}
                            alt={cast.name}
                            />
                            <div>
                            <p>{cast.name}</p>
                            <p style={{ opacity: 0.7 }}>{cast.character}</p>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
        </>
    )
}
export default MovieDetails;
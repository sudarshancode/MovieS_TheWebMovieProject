import Header from "../component/Header";
import MovieList from "./MovieList";

function HomePage(){
    return (
        <>
            <Header />
            <h1>Home Page</h1>
            <MovieList />
        </>
    )
}
export default HomePage;
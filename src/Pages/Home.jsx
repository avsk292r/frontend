import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");

const movies = [
    {id: 1, title: "The Shawshank Redemption", releaseDate: "1994"},
    {id: 2, title: "The Godfather", releaseDate: "1972"},
    {id: 3, title: "The Dark Knight", releaseDate: "2008"},
];

const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
}


  return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search movies..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <button type="submit">🔍︎</button>
        </form>

        <div className="movie-grid">
            {movies.map((movie) => ( /*Routing*/
                movie.title
                .toLowerCase() /*updating state when searching*/
                .startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />)
                ))}
        </div>
    </div>
  );
}

export default Home;
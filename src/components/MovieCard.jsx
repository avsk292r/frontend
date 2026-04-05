import '../css/MovieCard.css'

function MovieCard({movie}){

function onFavoriteClick(){
    alert(`You favorited ${movie.title}!`)
}

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>ꨄ︎</button>
                </div>
                <img src={movie.url} alt={movie.title} />
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.releaseDate}</p>
                <p>{movie.description}</p>
            </div>
        </div>
    )
}

export default MovieCard
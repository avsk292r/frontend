import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      <MovieCard movie={{
        title: "The Shawshank Redemption",
        releaseDate: "1994",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        url: "https://example.com/shawshank.jpg"
      }} />
    </>
  )
}


export default App

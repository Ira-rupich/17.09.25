import { useEffect, useState } from 'react'
import './App.css'
import Movie from './components/Movie'
import { genres } from './utils/genres.js'

function App() {
  const [movie, setMovie] = useState("")
  const [score, setScore] = useState(2)
  const [desc, setDesc] = useState("")
  const [movies, setMovies] = useState(() => {
    return JSON.parse(localStorage.getItem("movies"))
    || []
  })

  const [filteredMovies, SetFilteredMovies] = useState(movies)
  const [filterString, SetFilterString] = useState("")

  const [genre, setGenre] = useState(Object.entries(genres)[0][0])

 useEffect(() => {
SetFilteredMovies(movies.filter((movie) => movie.name.includes(filterString )))
}, [filterString, movies])


useEffect(() => {
  localStorage.setItem("movies", JSON.stringify(movies))
}, [movies])



  const handleAdd = (e) => {
    e.preventDefault()
    const newMovie = {
      id: crypto.randomUUID(),
      name: movie,
      score,
      genre,
      description: desc
    }
    setMovies((oldValue) => [newMovie, ...oldValue])
    setMovie("")
    setScore("")
    setDesc("")
    setGenre("")
  }

  return (
    <div className='app'>
      <h1>Movie DB </h1>
      <form onSubmit={handleAdd} action="" className="movie-form">
        <input type='text' onChange={(value) => setMovie(value.target.value)}
          value={movie}
        />
        <input type='range' name='' id='' min={0} max={4} value={score} onChange={(v) => setScore(v.target.value)} />
        {+score + 1}

        <select onChange={(value) => setGenre(value.target.value)}
          value={genre}>
          {Object.entries(genres).map((genre) => (
            <option value={genre[0]}>{genre[1]}</option>
          ))}
        </select>

        <textarea onChange={(value) => setDesc(value.target.value)}
          value={desc}
        ></textarea>
        <button className="add-movie"> Добавить</button>
      </form>

      <div className='search'>
        <h2>Поиск</h2>
        <input type='text' value={filterString} onChange={
          (v) => SetFilterString(v.target.value)
        } />
      </div>
      <div className="movie-list">
        {filteredMovies.map((el) => (
          <Movie key={el.id} {...el} />
        ))}
      </div>
    </div>
  )
}

export default App

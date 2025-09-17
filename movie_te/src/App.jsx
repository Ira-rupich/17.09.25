import { useState } from 'react'
import './App.css'

function App() {
const [movie, setMovie] = useState("")
const [movies, setMovies] = useState([])

const handleAdd = (e) => {
  e.preventDefault()
  setMovies([movie, ...movies])

}

  return (
   <div className='app'>
    <h1>Movie DB </h1>
    <form onSubmit={handleAdd} action="" className="movie-form">
     <input type='text' onChange= { (value) => setMovie(value.target.value)} 
    value={movie}
    />
     <button className="add-movie"> Добавить</button>
     </form>
    <div className="movie-list">
      {movies}
    </div>
   </div>
  )
}

export default App

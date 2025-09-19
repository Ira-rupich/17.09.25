import { genres } from '../utils/genres'
import './Movie.css'

const Movie = ({name, genre, score, description}) => {
    return (
        <div className="movie">
<h4>{name}</h4>
<p>{description}</p>
<p>{genres[genre]}</p>
<div className='movie__score'>
{Array(5).fill().map((_, i) => score < i ? "☆" : "★")}
</div>
        </div>
    )
}
export default Movie
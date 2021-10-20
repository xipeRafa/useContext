import Movie from './Movie'
import { useContext } from 'react/cjs/react.development';
import MoviesContext from '../../context/MoviesContext';

const MovieList = () => {

      const {movies}=useContext(MoviesContext)

      return (
            <div className="movieList">
                  {movies.map((el, i)=>(
                        <div key={i} className="movie">
                                <Movie el={el}/>
                        </div>
                             
                  ))}
                       
            </div>
      )
}

export default MovieList

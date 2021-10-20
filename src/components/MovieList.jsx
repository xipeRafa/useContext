import Movie from './Movie'
import initialMovies from "./consts/initialMovies";

const MovieList = () => {
      return (
            <div className="movieList">
                  {initialMovies.map((el, i)=>(
                        <div key={i} className="movie">
                                <Movie el={el}/>
                        </div>
                             
                  ))}
                       
            </div>
      )
}

export default MovieList

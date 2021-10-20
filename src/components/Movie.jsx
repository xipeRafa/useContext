import React, { useContext } from "react"
import UserContext from "../../context/UserContext"

const Movie = ({el}) => {
 
      const {user, toggleFavoriteMovieToUser}=useContext(UserContext)

      const imgStyles={
            width: '100%',
            height: '500px',
            objectFit: 'cover',
            objectPosition: 'top',
            marginBottom: '20px'
      }

            const isFavorite = user?.isFavorite?.includes(el.id)
      
     
      return (
            <div>

                  <p>{el.title}</p>

                  <img src={el.imageUrl} alt={el.title} style={imgStyles} />

                  { user?.id  && 
                        <button 
                              onClick={()=> toggleFavoriteMovieToUser(el.id)}
                              className={`${isFavorite ? 'favoriteButton' : 'noFavoriteButton' }`} >
                                    Favorite
                        </button>
                  }
            </div>
      )
}

export default Movie

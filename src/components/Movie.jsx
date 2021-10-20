const Movie = ({el}) => {

      const imgStyles={
            width: '100%',
            height: '500px',
            objectFit: 'cover',
            objectPosition: 'top',
            marginBottom: '20px'
      }

            const isFavorite = true
      
     
      return (
            <div>

                  <p>{el.title}</p>

                  <img src={el.imageUrl} alt={el.title} style={imgStyles} />

                  <button className={`${isFavorite ? 'favoriteButton' : 'noFavoriteButton' }`} >
                        Favorite
                  </button>
            </div>
      )
}

export default Movie

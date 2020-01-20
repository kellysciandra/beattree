import axios from 'axios'

export const loadBeats = () => {
    return(dispatch) => {
      axios 
        .get('http://localhost:3001/artists', { withCredentials: true})
        .then(response => { 
          dispatch({ type: 'LOAD_BEATS', 
          beats: response.data.artists})
        })
    }
  }


  export const addToFavorites = (favorite_artist_id, current_artist_id, link) => { 
    return(dispatch) => {
      axios
      .post(  
        'http://localhost:3001/favorites', 
        {
            favorite_artist_id: favorite_artist_id,
            artist_id: current_artist_id, 
            link: link
        },
      { withCredentials: true },
    )
    .then(response => { console.log(response)
      dispatch({
        type: 'ADD_TO_FAVORITES',
        favorites: response.data.favorites.favorite_artist_id
      })
    })
    }
  }



  export const fetchFavorites = () => {
    return(dispatch) => { 
     axios
      .get('http://localhost:3001/favorites', { withCredentials: true})
      .then(response => { console.log(response)
        dispatch({
          type: 'DISPLAY_FAVORITES',
          favorites: response.data.favorites
        })
      })
    }
}
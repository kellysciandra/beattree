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


  export const addToFavorites = (action) => { console.log(action)
    return(dispatch) => {
      axios
      .post(  
        'http://localhost:3001/favorites', 
        {
            favorite_artist_id: action.favorite_artist,
            artist_id: action.current_artist
        },
      { withCredentials: true },
    )
    .then(response => console.log(response))
    }
  }
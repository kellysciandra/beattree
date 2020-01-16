import axios from 'axios'

export const loadBeats = () => {
    return(dispatch) => {
      axios 
        .get('http://localhost:3001/artists', { withCredentials: true})
        .then(response => { console.log(response.data.artists)
          dispatch({ type: 'LOAD_BEATS', 
          beats: response.data.artists})
        })
    }
  }
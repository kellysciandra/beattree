import axios from 'axios'


export const fetchArtist = () => {
    return(dispatch) => {
     axios
      .get('http://localhost:3001/logged_in', { withCredentials: true})
      .then(response => { 
          if (
              response.data.logged_in 
          ) {
            dispatch({ type: 'FETCH_ARTIST', 
            artist: response.data.artist,
            loggedIn: response.data.logged_in})
          }
      })
    }
}


export const createArtist = (artist) => {
    return(dispatch) => { 
        axios
        .post(  
          'http://localhost:3001/artists', 
          {
            artist: {
              id: artist.id,
              email: artist.email,
              password: artist.password, 
              city: artist.city, 
              state: artist.state,
              link: artist.link
            }
          },
        { withCredentials: true },
      )
        .then(response => { 
            if (response.data.status === 'created' ) {
                dispatch({ type: 'CREATE_ARTIST', artist: response.data.artist})
          }     
        })
    }
}

export const editArtist = (artist) => { console.log(artist)
  return(dispatch) => {
    axios
    .patch(
      'http://localhost:3001/artists/`#{artist.id}`', 
      {
        artist: {
          id: artist.id,
          email: artist.email,
          password: artist.password, 
          city: artist.city, 
          state: artist.state,
          link: artist.link
        }
      },
      { withCredentials: true },
    )
    .then(response => {
      console.log(response)
    })
  }
}

export const loginArtist = (artist) => { console.log(artist)
    return(dispatch) => { 
        axios
        .post(  
          'http://localhost:3001/sessions', 
          {
            artist: {
              id: artist.id,
              email: artist.email,
              password: artist.password,
            }
          },
        { withCredentials: true },
      )
        .then(response => { 
            if (response.data.logged_in) {
                dispatch({ 
                    type: 'LOGIN_ARTIST', 
                    artist: response.data.artist,
                    loggedIn: response.data.logged_in})
          } else {
                dispatch({
                  type: 'LOGIN_FAILED'
                })
          }    
        })
    }
}

export const logoutArtist = (artist) => { console.log(artist)
    return(dispatch) => { 
        axios
        .delete(  'http://localhost:3001/logout', { withCredentials: true },)
        .then(response => { 
            if (response.data.logged_in) {
                dispatch({ type: 'LOGOUT_ARTIST', artist: response.data.artist.id})
          }     
        })
    }
}





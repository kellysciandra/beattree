

const artistsReducer = (state = {artist: {}, loggedIn: false}, action) => {
    switch(action.type) {
        case 'FETCH_ARTIST':
            // console.log(action.loggedIn)
            return {
                ...state,
                artist: action.artist,
                loggedIn: action.loggedIn
            }
        case 'CREATE_ARTIST':
            // console.log(action.loading)
            return {
                ...state,
                artist: action.artist,
                loggedIn: action.loggedIn
            }
        case 'LOGIN_ARTIST':
            // console.log(action.artist)
            return {
                ...state, 
                artist: action.artist, 
                loggedIn: action.loggedIn
            }
        case 'LOGOUT_ARTIST':
            return {artist: state.artist.id !== action.id }  
            
        default:
            return state 
    }
  
}

export default artistsReducer
const artistsReducer = (state = {artist: {}, loggedIn: false, authError: null}, action) => {
    switch(action.type) {
        case 'FETCH_ARTIST':
            return {
                ...state,
                artist: action.artist,
                loggedIn: action.loggedIn,
            }
        case 'CREATE_ARTIST':
            // console.log(action.loading)
            return {
                ...state,
                artist: action.artist,
                loggedIn: action.loggedIn
            }
        case 'LOGIN_ARTIST':
            console.log('login success')
            return {
                ...state, 
                artist: action.artist, 
                loggedIn: action.loggedIn,
                authError: 'LOGIN SUCCESS'
            }
        case 'LOGIN_FAILED': 
        console.log('login failed')
            return {
                ...state, 
                authError: 'LOGIN FAILED'
            }
        case 'LOGOUT_ARTIST':
            return {
                ...state,
                artist: state.artist.id !== action.id,
                authError: 'LOGOUT SUCCESS' 
            }
        default:
            return state 
    }
}

export default artistsReducer
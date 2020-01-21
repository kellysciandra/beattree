const artistsReducer = (state = {artist: {}, favorites: {}, messages: {}, loggedIn: false, authError: null}, action) => {
    switch(action.type) {
        case 'FETCH_ARTIST':
            console.log('fetch success', action)
            return { 
                ...state,
                artist: action.artist,
                favorites: action.favorites,
                messages: action.messages,
                loggedIn: action.loggedIn,
                authError: 'ACTIVE_USER'
            }
        case 'CREATE_ARTIST':
            return {
                ...state,
            }
        case 'LOGIN_ARTIST':
            // console.log('login success', action)
            return {
                ...state, 
                authError: 'LOGIN SUCCESS'
            }
        case 'LOGIN_FAILED': 
        console.log('login failed')
            return {
                ...state, 
                authError: 'LOGIN FAILED'
            }
        case 'LOGOUT_ARTIST':
            console.log(action)
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
const artistsReducer = (state = {artist: [], favorites: {}, loggedIn: false, authError: null}, action) => {
    switch(action.type) {
        case 'FETCH_ARTIST':
            console.log('fetch success', action)
            return { 
                artist: action.artist,
                favorites: action.favorites,
                messages: action.messages,
                loggedIn: action.loggedIn
            }
            
        case 'CREATE_ARTIST':
            console.log('created', action)
            return {
                artist: action.artist, 
                loggedIn: true,
                favorites: action.favorites,
                messages: action.messages, 
                authError: 'SIGNUP SUCCESS'
            }

        case 'LOGIN_ARTIST':
            console.log('login success', action)
            return {
                artist: action.artist, 
                loggedIn: action.loggedIn,
                favorites: action.favorites,
                messages: action.messages, 
                authError: 'LOGIN SUCCESS'
            }

        case 'LOGIN_FAILED': 
        console.log('login failed')
            return {
                authError: 'LOGIN FAILED'
            }

        
        case 'SIGNUP_FAILED': 
        console.log('login failed')
            return {
                authError: 'SIGNUP FAILED'
            }

        case 'LOGOUT_ARTIST':
            console.log(action)
            return {
                loggedIn: false,
                authError: 'LOGOUT SUCCESS' 
            }

        default:
            return state 
    }
}

export default artistsReducer
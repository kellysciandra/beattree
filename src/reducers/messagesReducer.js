const messagesReducer = (state = {messages: []}, action) => {
    switch(action.type) { 
        case 'ADD_MESSAGE':
            return {
                ...state,
                artist_favorites: action.favorites
            }
        default:
            return state 
    }
}
export default messagesReducer
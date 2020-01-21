const messagesReducer = (state = {messages: []}, action) => {
    switch(action.type) { 
        // case 'LOAD_MESSAGES':
        //     console.log(action)
        //     return {
        //         messages: action.messages
        //     }
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
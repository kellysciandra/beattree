const beatsReducer = (state = {beats: [], artist_favorites:[]}, action) => {
    switch(action.type) { 
        case 'LOAD_BEATS':
            return {
                beats: action.beats
            }

            case 'ADD_TO_FAVORITES':
      
                return {
                    ...state,
                 artist_favorites: action.favorites
                }

            case 'DISPLAY_FAVORITES':
                    console.log(action.favorites)
                return {
                    ...state, 
                artist_favorites: action.favorites
                }
        default:
            return state 
    }
}

export default beatsReducer
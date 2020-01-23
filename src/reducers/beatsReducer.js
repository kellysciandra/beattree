const beatsReducer = (state = {beats: [], favorites:[]}, action) => {
    switch(action.type) { 
        case 'LOAD_BEATS':
            return {
                beats: action.beats
            }

        case 'ADD_TO_FAVORITES': 
            console.log(action)
            return {
                ...state,
            //  artist_favorites: action.favorites
            }
            
        default:
            return state 
    }
}

export default beatsReducer
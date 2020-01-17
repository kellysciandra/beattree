const beatsReducer = (state = {beats: []}, action) => {
    switch(action.type) { 
        case 'LOAD_BEATS':
            return {
                beats: action.beats
            }

            case 'ADD_TO_FAVORITES':
                console.log('titty')
                return {
                    ...state, 
                }
        default:
            return state 
    }
}

export default beatsReducer
const beatsReducer = (state = {beats: []}, action) => {
    switch(action.type) { 
        case 'LOAD_BEATS':
            console.log(action.beats)
            return {
        
                beats: action.beats
            }
        default:
            return state 
    }
}

export default beatsReducer
import artistsReducer from './artistsReducer'
import beatsReducer from './beatsReducer'
import { combineReducers } from 'redux'


const rootReducer =  (combineReducers)({   
  beat: beatsReducer,
  artist: artistsReducer,
})

export default rootReducer
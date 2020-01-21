import artistsReducer from './artistsReducer'
import beatsReducer from './beatsReducer'
import messagesReducer from './messagesReducer'
import { combineReducers } from 'redux'


const rootReducer =  (combineReducers)({   
  beat: beatsReducer,
  artist: artistsReducer,
  message: messagesReducer
})

export default rootReducer
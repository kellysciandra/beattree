import axios from 'axios'

export const sendMessage = ( current_artist_id, favorite_artist_id, message) => { 
    return(dispatch) => { 
      axios
      .post(  
        'http://localhost:3001/messages', 
        {
            sender_id: current_artist_id,
            artist_id: favorite_artist_id, 
            message: message
        },
      { withCredentials: true },
    )
    .then(response => {  console.log(response)
        dispatch({
            type: 'ADD_MESSAGE',
            message: response.data.messages.message
        })
    })
    }
  }


  export const loadMessages = () => {
    return(dispatch) => { 
     axios
      .get('http://localhost:3001/messages', { withCredentials: true})
      .then(response => { console.log(response.data.messages)
        dispatch({ type: 'LOAD_MESSAGES', 
        messages: response.data.messages})
      })
    }
}

import axios from 'axios'

export const sendMessage = (reciever, message) => { 
    return(dispatch) => {  
      axios
      .post(  
        'http://localhost:3001/messages', 
        {
            artist_id: reciever, 
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



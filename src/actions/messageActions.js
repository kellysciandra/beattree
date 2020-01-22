import axios from 'axios'

export const sendMessage = ( reciever, message) => { 
    return(dispatch) => {  console.log(reciever, message)
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


//   export const loadMessages = () => {
//     return(dispatch) => { 
//      axios
//       .get('http://localhost:3001/messages', { withCredentials: true})
//       .then(response => { console.log(response.data.messages)
//         dispatch({ type: 'LOAD_MESSAGES', 
//         messages: response.data.messages})
//       })
//     }
// }

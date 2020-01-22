import React from 'react'

const MessageBoard = (props) => {

     const messages= props.messages ?  props.messages.map((message,id) => message.message) : <div>LOADINGGGGG</div>
        return (
            <div>
              {messages.map((message) => <div className='messages'>{message}</div>)}
            </div>
        )
}

export default MessageBoard



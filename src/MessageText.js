import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './MessageText.css'
const MessageText=forwardRef(({id,content:{
    timestamp,displayName,email,message,photo,uid
}},ref)=> {
    const user=useSelector(selectUser)
    return (
        <div ref={ref} className={`messageText ${user.email === email && 'message__sender'}`}>
            <Avatar className='messgae__photo' src={photo} />
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    )
})

export default MessageText

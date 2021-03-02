import React, { useEffect, useState } from 'react'
import './Chat.css'
import MicNoneIcon from '@material-ui/icons/MicNone';
import {IconButton} from '@material-ui/core'
import MessageText from './MessageText';
import { selectChatId, selectChatName } from './features/chatSlice';
import { useSelector } from 'react-redux';
import db from './firebase'
import firebase from 'firebase'
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move'
function Chat() {
    const user=useSelector(selectUser)
    const [input,setInput]=useState('')
    const [messages,setMessages]=useState([])
    const chatName=useSelector(selectChatName)
    const chatId=useSelector(selectChatId)
    useEffect(()=>{
        if(chatId)
       { db.collection('chats')
        .doc(chatId)
        .collection('messages')
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot)=>
        setMessages(
            snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            }))
        )
        )}
    },[chatId])
    console.log(chatId)
    const sendMessage=(e)=>{
        e.preventDefault()
        db.collection('chats').doc(chatId).collection('messages').add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            uid:user.uid,
            photo:user.photo,
            email:user.email,
            displayName:user.displayName
        })
        setInput('')
    }
    return (
        <div className='chat'>
            <div className='chat__header'>
                <h4>TO : <span className='chat__name'>{chatName}</span></h4>
                <strong>Details</strong>
            </div>
            <div className='chat__messages'>
                <FlipMove>
                {messages.map(({id,data}) =>(
                    <MessageText key={id} content={data} />
                ))}
                </FlipMove>
                
            </div>
            <div className='chat__input'>
                <form>
                    <input type='text' placeholder='Message..' value={input} onChange={(e)=> setInput(e.target.value)} />
                    <button onClick={sendMessage} className='btn'>Send Message</button>
                    <IconButton >
                    <MicNoneIcon className='chat__mic' style={{color:'black'}}/>
                    </IconButton>
                </form>
            </div>
        </div>
    )
}

export default Chat

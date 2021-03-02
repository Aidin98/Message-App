import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth,provider} from './firebase'
function Login() {
    const signIn =()=>{
        auth.signInWithPopup(provider)
        .catch((error)=>{
            alert(error.message)
        })
    }
   return (
        <div className='login'>
           
            <div className='login__logo'>
                <img src='https://icons.iconarchive.com/icons/froyoshark/enkel/512/iMessage-icon.png' alt='message' />
                <h1>Message App</h1>
                
            </div>
            <Button onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login

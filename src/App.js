import React, { useEffect } from 'react';

import {useDispatch, useSelector} from 'react-redux'
import './App.css';
import { selectUser,login,logout } from './features/userSlice';
import Login from './Login';
import Message from './Message';
import {auth} from './firebase'
function App() {
  const user=useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      if(authUser){
          dispatch(login({
            uid:authUser.displayName,
            photo:authUser.photoURL,
            email:authUser.email,
            displayName:authUser.displayName
          }))
      }else{
        dispatch(logout())
      }
    }) 
  },[])
  console.log(user)
  return (
    <div className="app">
      {
        user ?    <Message /> : <Login />
      }
   
     {/*chat component */}
    </div>
  );
}

export default App;

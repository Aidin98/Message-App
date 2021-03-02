
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyD74Rd5Xfcwg6uZRVs0GYrFF7gi7YI7lQ0",
  authDomain: "message-6209a.firebaseapp.com",
  projectId: "message-6209a",
  storageBucket: "message-6209a.appspot.com",
  messagingSenderId: "480171671072",
  appId: "1:480171671072:web:babe316b2598f2dd22c645"
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db =firebaseApp.firestore()
const auth=firebase.auth()
const provider=new firebase.auth.GoogleAuthProvider()
export {auth,provider}
export default db
import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

require("dotenv").config()
require("firebase/firestore")

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: "myroomie-2f3c7",
// };
const firebaseConfig = {
  apiKey: "AIzaSyBK9mB9z57qLTOKXS-T9EgZzSJhT0PigiI",
  authDomain: "myroomie-2f3c7.firebaseapp.com",
  databaseURL: "https://myroomie-2f3c7-default-rtdb.firebaseio.com",
  projectId: "myroomie-2f3c7",
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore() // NEW

export const SignedinUser = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      let uid = user.uid
      console.log(uid)
      // ...
    } else {
      // User is signed out
      // ...
    }
  })
}

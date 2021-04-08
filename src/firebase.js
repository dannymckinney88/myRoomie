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
  apiKey: "AIzaSyDu4WwLguVbkc0QN52cKR4CVJgZGp-H5Ho",
  authDomain: "my-roomie-91425.firebaseapp.com",
  projectId: "my-roomie-91425",
  storageBucket: "my-roomie-91425.appspot.com",
  messagingSenderId: "149193244209",
  appId: "1:149193244209:web:054e98ed6f14a6b0cbdf10",
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

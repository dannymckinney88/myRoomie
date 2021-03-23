import firebase from 'firebase';
import 'firebase/firestore';
import "firebase/auth"

//require('dotenv').config()
require('firebase/firestore')

const firebaseConfig = {
    apiKey: 'AIzaSyBK9mB9z57qLTOKXS-T9EgZzSJhT0PigiI',
    authDomain: 'myroomie-2f3c7.firebaseapp.com',
    databaseURL: 'https://myroomie-2f3c7-default-rtdb.firebaseio.com',
    projectId: "myroomie-2f3c7",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const db = firebase.firestore(); // NEW
export default {firebase, firebaseConfig, auth}

export const SignUp = (email, password) => {
    //console.log('inside the SIGNUP FUNCTION export')
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        let user = userCredential.user;
    })
    .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
    })
}


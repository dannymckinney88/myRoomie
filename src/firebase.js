import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth"

require('dotenv').config()
require('firebase/firestore')

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: "myroomie-2f3c7",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const db = firebase.firestore(); // NEW
export default {firebase, firebaseConfig}

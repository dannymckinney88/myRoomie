import {React, useState} from 'react'
import 'firebase/auth'
const firebase = require('firebase')

//Signin user
const Signin = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential) => {
        let user = userCredential.user
    })
    .catch((error) =>{
        let errorCode = error.code;
        let errorMessage = error.message;
    })
    return(
        <form>
            <label>Signin
            <input/>
            </label>
        </form>
    )
}

export default Signin
import "firebase/auth"
import firebaseConfig from "../firebase"
const firebase = require('firebase')

//Create new user
const SignUp = (email, password) => {
    console.log('inside the SIGNUP FUNCTION export')
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        let user = userCredential.user;
    })
    .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
    })
}

export default SignUp
import 'firebase/auth'
const firebase = require('firebase')

//Create new user
const SignUp = () => {
    let email;
    let password;
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
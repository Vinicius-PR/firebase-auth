import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config'

export default function signUpCredential(email: string, password: string) {
  let result = null

  result = createUserWithEmailAndPassword(auth, email, password).catch(function (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  })
  

  return result
}
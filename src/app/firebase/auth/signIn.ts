import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config'

export default function signInCredential(email: string, password: string) {
  let result = null
 
  result = signInWithEmailAndPassword(auth, email, password).catch(function (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });
  

  return result
}
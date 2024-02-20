import {auth} from "../config/firebase-config"
import {createUserWithEmailAndPassword, signOut} from 'firebase/auth'
import {useState} from "react"
import {signInWithEmailAndPassword } from "firebase/auth";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const createAccount = async () =>{
            await createUserWithEmailAndPassword(auth, email, password);
    }
    
    const logout = async () => {
        try {
          await signOut(auth);
        } catch (err) {
          console.error(err);
        }
      };

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

    return(
        <div>
            <input placeholder = "Email" onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder = "password" 
            type = "password"
            onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={createAccount}>Create Account</button>
            <button onClick={() => signInWithEmailAndPassword(auth,email,password)}>Sign In</button>
            <button onClick={logout}>Log Out</button>
        </div>
    );
};
import { useEffect, useState } from "react";
import {Auth} from "../components/auth"
import {collection, getDocs, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";
import {db} from "../config/firebase-config"

function CreateAccount() {
    const [newEmail, setEmail] = useState("");
    const [newPassword, setPassword] = useState("");
    const [newName, setName] = useState("");
    const userRef = collection(db, "Users")


    const onAddUser = async () => {
      try{
      await addDoc(userRef, {Email: newEmail,
        Password: newPassword,
        Name: newName,
        Blocked: false,
        Points: 0})
      }catch{
        
      }
    }

  return (
      <div className="App">
        <h1>Recycle App</h1>
        <input placeholder = "Email" onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder = "password" 
            type = "password"
            onChange={(e) => setPassword(e.target.value)}/>
            <input placeholder = "Name" onChange={(e) => setName(e.target.value)}/>
            <button onClick={onAddUser}>Create Account</button>
        <a href = "/"><button>Home</button></a>
      </div>
    );
  }
  
  export default CreateAccount;
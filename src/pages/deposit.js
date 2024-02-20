import { useEffect, useState } from "react";
import {collection, getDocs, addDoc, deleteDoc, updateDoc, doc, where} from "firebase/firestore";
import {db} from "../config/firebase-config"
function Deposit() {
  const [email, setEmail] = useState("")
  const [points, setPoints] = useState(0)
  const [usersList, setUsersList] = useState([]);
  const usersCollection = collection(db, "Users");

  useEffect(() => {
    const getUsersList = async () =>{
      try{
        const data = await getDocs(usersCollection);
        const filteredData = data.docs.map((doc) => ({...doc.data(),
        id: doc.id
        }))
        setUsersList(filteredData);
        console.log(data);
           }catch(err){
        console.log(err);
      }
    }

    getUsersList();
  }, [])

  const updateUserPoints = async (id) => {
    const userDoc = doc(db, "Users", id);
    const newPoints = doc.Points + points;

    console.log(doc.Points)
    await updateDoc(userDoc, { Points: newPoints });
  };


  const submit = async () =>{
    usersList.map((user) =>{
      if(user.Email == email){
        updateUserPoints(user.id)
        console.log("hello")
      }
    })
  }
  

    return (
      <div className="App">
        <h1>Deposit Recyclables</h1>
        <p>Enter your email below:</p>
        <input onChange={(e) => setEmail(e.target.value)}></input>
        <p>Enter the amount of points below:</p>
        <input onChange={(e) => setPoints(e.target.value)}></input>
        <p><button onClick={submit}>Submit</button></p>
        <p><a href = "/"><button>Home</button></a></p>
      </div>
    );
  }
  
  export default Deposit;
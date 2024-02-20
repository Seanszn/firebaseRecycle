import { useEffect, useState } from "react";
import {collection, getDocs, addDoc, deleteDoc, doc} from "firebase/firestore";
import {db} from "../config/firebase-config"

function Deposit() {
  const [email, setEmail] = useState("")

    return (
      <div className="App">
        <h1>Deposit Recyclables</h1>
        <p>Enter your email below:</p>
        <input></input><button>Enter</button>
        <p>Enter the amount of recyclables below:</p>
        <input></input><button>Enter</button>
        <p><a href = "/"><button>Home</button></a></p>
      </div>
    );
  }
  
  export default Deposit;
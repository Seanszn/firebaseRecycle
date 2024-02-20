import { useEffect, useState } from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../config/firebase-config"

function Bins() {
  const [binList, setBinList] = useState([]);

  const binsCollection = collection(db, "Bins")

  useEffect(() => {
    const getBinList = async () =>{
      try{
        const data = await getDocs(binsCollection);
        const filteredData = data.docs.map((doc) => ({...doc.data(),
        id: doc.id
        }))
        setBinList(filteredData);
        console.log(data);
           }catch(err){
        console.log(err);
      }
    }

    getBinList();
  }, [])
    return (
      <div className="App">
        <h1>Bins</h1>
        <button> Make Deposit</button>
        <div> 
          {binList.map((Bin) => (
            <div>
              <h1>{Bin.Name}</h1>
              <p>{Bin.Location}</p>
              <p>{Bin.Hours}</p>
            </div>
          
          ))}
        </div>
        <a href="/"><button>LogIn Page</button></a>
      </div>
    );
  }
  
  export default Bins;
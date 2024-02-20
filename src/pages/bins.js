import { useEffect, useState } from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../config/firebase-config"

function Bins() {
  //sets up function and collection to create a list of bins
  const [binList, setBinList] = useState([]);
  const binsCollection = collection(db, "Bins")
  //creates the bins list that is used in the html
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
        <a href = "/deposit"><button> Make Deposit</button></a>
        <div> 
        <p>note: bins in red are full.</p>
          {binList.map((Bin) => (
            <div>
              <h1 style = {{color: Bin.Full ? "red" : "black" }}>
                {Bin.Name}</h1>
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
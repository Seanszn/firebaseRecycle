import { useEffect, useState } from "react";
import {collection, getDocs, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";
import {db} from "../config/firebase-config"

function BinManage() {
  //sets up function and collection to view list of bins
  const binRef = collection(db, "Bins")
  const [binList, setBinList] = useState([]);
  //sets up functions to create new bins
  const [newBinName,setNewBinName] = useState("")
  const [newBinLocation,setNewBinLocation] = useState("")
  const [newBinHours,setNewBinHours] = useState("")
  const [newBinStatus, setNewBinStatus] = useState(false)

  

  useEffect(() => {
    const getBinList = async () =>{
      try{
        const data = await getDocs(binRef);
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
  
  const onAddBin = async () => {
    try{
    await addDoc(binRef, {Name: newBinName,
      Location: newBinLocation,
      Hours: newBinHours,
      Full: newBinStatus})
    }catch{

    }
  } 

  const deleteBin = async (id) => {
    const binDoc = doc(db, "Bins", id);
    await deleteDoc(binDoc);
  };

  const fullBin = async (id) => {
    const binDoc = doc(db,"Bins",id)
    await updateDoc(binDoc, {Full: true})
  }

  const emptyBin = async (id) => {
    const binDoc = doc(db,"Bins",id)
    await updateDoc(binDoc, {Full: false})
  }


    return (
      <div className="App">
        <h1>Bin Manager</h1>
        <div>
            <h2>Add Bins:</h2>
            <input placeholder = "Name" onChange={(e) => setNewBinName(e.target.value)}></input>
            <input placeholder = "Location" onChange={(e) => setNewBinLocation(e.target.value)}></input>
            <input placeholder = "Hours" onChange = {(e) => setNewBinHours(e.target.value)}></input>
            <input type = "checkbox" onChange = {(e) => setNewBinStatus(e.target.checked)}></input>
            <label>Full?</label>
            <button onClick={onAddBin}>Add Bin</button>
        </div>
        <h2>Bins List:</h2>
        <p>note: bins in red are full.</p>
        <div> 
          {binList.map((Bin) => (
            <div>
              <h1 style = {{color: Bin.Full ? "red" : "black" }}>{Bin.Name}</h1>
              <p>{Bin.Location}</p>
              <p>{Bin.Hours}</p>
              <button onClick={() => deleteBin(Bin.id)}>delete bin</button>
              <button onClick={() => fullBin(Bin.id)}>Fill bin</button>
              <button onClick={() => emptyBin(Bin.id)}>Empty bin</button>
            </div>
          
          ))}
        </div>
        <p><a href = "/"><button>Log-In</button></a></p>
      </div>
    );
}

export default BinManage;
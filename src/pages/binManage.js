import { useEffect, useState } from "react";
import {collection, getDocs, addDoc, deleteDoc} from "firebase/firestore";
import {db} from "../config/firebase-config"

function BinManage() {

  const [binList, setBinList] = useState([]);
  const [newBinName,setNewBinName] = useState("")
  const [newBinLocation,setNewBinLocation] = useState("")
  const [newBinHours,setNewBinHours] = useState("")
  const [newBinStatus, setNewBinStatus] = useState(false)

  const binRef = collection(db, "Bins")

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
    const binDoc = (db, "Bins", id)
    await deleteDoc(binDoc)
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
        <div> 
          {binList.map((Bin) => (
            <div>
              <h1>{Bin.Name}</h1>
              <p>{Bin.Location}</p>
              <p>{Bin.Hours}</p>
              <button onClick={() => deleteBin(Bin.id)}>delete bin</button>
            </div>
          
          ))}
        </div>
      </div>
    );
}

export default BinManage;
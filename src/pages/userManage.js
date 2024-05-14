import { useEffect, useState } from "react";
import {collection, getDocs, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";
import {db} from "../config/firebase-config"



function UserManage() {
  //sets up function and collection to create a list of users
  const [usersList, setUsersList] = useState([]);
  const usersCollection = collection(db, "Users");
  //creates the users list that is used in the html
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
  })

  const blockUser = async (id) => {
    const userDoc = doc(db,"Users",id);
    await updateDoc(userDoc, { Blocked: true });
  }
  const unblockUser = async (id) => {
    const userDoc = doc(db,"Users",id);
    await updateDoc(userDoc, { Blocked: false });
  }
    //displays the list of users alongside a button to block said user BUTTON NOT CREATED YET
    return (
      <div className="App">
        <h1>Users List</h1>
        <p>Note: Blocked users appear in red</p>
        <div>
        {usersList.map((User) => (
            <div>
              <h1 style = {{color: User.Blocked ? "red" : "black" }}>{User.Name}</h1>
              <p>{User.Email}</p>
              <p>{User.Points + ' points'}</p>
              <p>
              <button onClick={() => blockUser(User.id)}>Block User</button>
              <button onClick={() => unblockUser(User.id)}>Unblock User</button>
              </p>
            </div>
          ))}
        </div>
        <p>
        <a href = "/admin"><button>Admin Functions</button></a>
        <a href = "/"><button>Home</button></a>
        </p>
      </div>
    );
}
  export default UserManage;
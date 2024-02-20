import { useEffect, useState } from "react";
import {Auth} from "../components/auth"
import {collection, getDocs} from "firebase/firestore";
import {db} from "../config/firebase-config"


function Home() {
    return (
      <div className="App">
        <h1>Recycle App</h1>
        <Auth></Auth>
        <a href = "/Bins"><button>View Bins</button></a>
        <p><a href = "/admin"><button>Admin Functions</button></a></p>
      </div>
    );
  }
  
  export default Home;

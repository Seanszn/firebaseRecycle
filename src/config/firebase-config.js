// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA0GCfjkAWQ3LqHQi7Aj25oPmEshU-3gxU",
  authDomain: "reactrecycle-658c1.firebaseapp.com",
  projectId: "reactrecycle-658c1",
  storageBucket: "reactrecycle-658c1.appspot.com",
  messagingSenderId: "134612165551",
  appId: "1:134612165551:web:1174b0469495035695c55a",
  measurementId: "G-2GP9EZYS8W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
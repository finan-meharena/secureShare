

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getStorage} from 'firebase/storage'
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU_zRK-kT3VICek4VoylLLs-QZughh8JY",
  authDomain: "share-d2d3e.firebaseapp.com",
  projectId: "share-d2d3e",
  storageBucket: "share-d2d3e.appspot.com",
  messagingSenderId: "832484625555",
  appId: "1:832484625555:web:fe83b1b345058a28945166"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app)
export const database = getFirestore(app)
export const storage = getStorage()



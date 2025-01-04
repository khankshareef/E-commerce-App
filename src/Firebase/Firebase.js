import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDBKTYeVlrNZBfprzmBRSebY-jBz9IhLIo",
  authDomain: "login-f108d.firebaseapp.com",
  projectId: "login-f108d",
  storageBucket: "login-f108d.appspot.com",
  messagingSenderId: "203523139283",
  appId: "1:203523139283:web:ad64abd0a9de26c7c09626",
  databaseURL: "https://login-f108d-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const db = getFirestore(app); // Initialize Firestore

export { app, auth, database, db }; // Export Firestore instance

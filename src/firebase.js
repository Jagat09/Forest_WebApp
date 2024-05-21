// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZx3Jpg5DHLnWs0rDLbs0WM_t-8JfIAYg",
  authDomain: "forest-35982.firebaseapp.com",
  projectId: "forest-35982",
  storageBucket: "forest-35982.appspot.com",
  messagingSenderId: "483059151352",
  appId: "1:483059151352:web:2994a62e58179d42b9e60d",
  measurementId: "G-SW5BJ4LEK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

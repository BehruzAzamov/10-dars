// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKiW9evR5r3pS_FdTI75zgniKyMZGp0gc",
  authDomain: "my-kitchen-c6661.firebaseapp.com",
  projectId: "my-kitchen-c6661",
  storageBucket: "my-kitchen-c6661.appspot.com",
  messagingSenderId: "223929340523",
  appId: "1:223929340523:web:77a03d86c0b040e0c8972e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
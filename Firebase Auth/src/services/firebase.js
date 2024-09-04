// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-8d_HDwwabcwPj6Mq2mqZeet8QuKQfAA",
  authDomain: "email-627c6.firebaseapp.com",
  projectId: "email-627c6",
  storageBucket: "email-627c6.appspot.com",
  messagingSenderId: "63585762532",
  appId: "1:63585762532:web:386fb58b4a654ec1fb00f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();
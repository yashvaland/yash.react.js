// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdz1PuUXxu_FdP1mns4xghRs5O1z-i-xM",
  authDomain: "fir-projects-5e9a9.firebaseapp.com",
  projectId: "fir-projects-5e9a9",
  storageBucket: "fir-projects-5e9a9.appspot.com",
  messagingSenderId: "626987237119",
  appId: "1:626987237119:web:3a32769b944f9b2d1d96ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// ###
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();




// // ############################################
// // Import the functions you need from the SDKs you need
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAfNHIzI7Uun2do76SOdj1qTgQ2wOglZMU",
//   authDomain: "email-18e70.firebaseapp.com",
//   projectId: "email-18e70",
//   storageBucket: "email-18e70.appspot.com",
//   messagingSenderId: "1093222645682",
//   appId: "1:1093222645682:web:430aace629b85726a3aeab",
//   measurementId: "G-8T5HQYCJBW"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth=getAuth(app);
// export const provider = new GoogleAuthProvider();



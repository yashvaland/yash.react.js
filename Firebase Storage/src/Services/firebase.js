// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
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
export const db = getFirestore(app);
// const usersCollection = collection(db, "users");

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCdz1PuUXxu_FdP1mns4xghRs5O1z-i-xM",
//   authDomain: "fir-projects-5e9a9.firebaseapp.com",
//   projectId: "fir-projects-5e9a9",
//   storageBucket: "fir-projects-5e9a9.appspot.com",
//   messagingSenderId: "626987237119",
//   appId: "1:626987237119:web:3a32769b944f9b2d1d96ca"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
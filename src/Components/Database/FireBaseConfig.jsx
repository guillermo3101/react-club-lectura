// Import the functions you need from the SDKs you need

//import { getAnalytics } from "firebase/analytics";
//import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCePcR9-Gw6ymfMw-_A1NP2zwqucdJR7DQ",
  authDomain: "club-lectura-664a7.firebaseapp.com",
  projectId: "club-lectura-664a7",
  storageBucket: "club-lectura-664a7.appspot.com",
  messagingSenderId: "580207586648",
  appId: "1:580207586648:web:37cdb824af075441a7892d",
  measurementId: "G-1L3C2Z3F91"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


export default app
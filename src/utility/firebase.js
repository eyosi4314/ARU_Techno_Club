// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZvVUxtYAIEoRsTqRez60lfchrqP0rmOU",
  authDomain: "arutechclub.firebaseapp.com",
  projectId: "arutechclub",
  storageBucket: "arutechclub.firebasestorage.app",
  messagingSenderId: "292075294746",
  appId: "1:292075294746:web:48114b48f78110076dc1a3",
  measurementId: "G-SKRG115HW3",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = firebase.firestore();
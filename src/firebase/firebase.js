import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT6HOcjcu3dGHdmtDD93-OvwIGrHqZtao",
  authDomain: "blind-sparta.firebaseapp.com",
  projectId: "blind-sparta",
  storageBucket: "blind-sparta.appspot.com",
  messagingSenderId: "779504293089",
  appId: "1:779504293089:web:ceb4e4ad6da9fe12aed3a0",
  measurementId: "G-BTD7DP9SG3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

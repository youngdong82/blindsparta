// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBytM96plJVL8XddpYgEbYvlTcpEfqoc6M",
  authDomain: "react-project-90083.firebaseapp.com",
  databaseURL:
    "https://react-project-90083-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-project-90083",
  storageBucket: "react-project-90083.appspot.com",
  messagingSenderId: "804517228816",
  appId: "1:804517228816:web:0947fb30754d5173697595",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 필요한 곳에서 사용할 수 있도록 내보내기
export { db };

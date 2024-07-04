// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-7BQ_957jkS8FeMjU0sAtpnvuuGiDVTc",
  authDomain: "advanced-firebase-1.firebaseapp.com",
  projectId: "advanced-firebase-1",
  storageBucket: "advanced-firebase-1.appspot.com",
  messagingSenderId: "440109342501",
  appId: "1:440109342501:web:ceed9f94d656cca86644cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

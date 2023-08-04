// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgnnL2BXL8dNJY-WVvS4Q4d7bdTt4sa6I",
  authDomain: "cuet-insiders.firebaseapp.com",
  projectId: "cuet-insiders",
  storageBucket: "cuet-insiders.appspot.com",
  messagingSenderId: "101439161818",
  appId: "1:101439161818:web:988e793661e4adedab6ce3",
  measurementId: "G-X5S04EQY91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default app;
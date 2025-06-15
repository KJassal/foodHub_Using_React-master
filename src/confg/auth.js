// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDFY3lp1GqD-S8RcRunVQWAmG-hqmcdLM",
  authDomain: "food-hub-ea438.firebaseapp.com",
  projectId: "food-hub-ea438",
  storageBucket: "food-hub-ea438.firebasestorage.app",
  messagingSenderId: "645396877420",
  appId: "1:645396877420:web:e3d0c0126c87962e81c849",
  measurementId: "G-T0WMYC0L6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  auth = getAuth(app)
export const provider = new GoogleAuthProvider();

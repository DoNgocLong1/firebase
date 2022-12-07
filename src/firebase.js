// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSuKicXGTW-NtVvTBTehKnx3BxwF0HxSM",
  authDomain: "api-firebase-bad97.firebaseapp.com",
  projectId: "api-firebase-bad97",
  storageBucket: "api-firebase-bad97.appspot.com",
  messagingSenderId: "54669357311",
  appId: "1:54669357311:web:9c6b8e15eb478d9a86dcca",
  measurementId: "G-ZFED64X75F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
const analytics = getAnalytics(app);
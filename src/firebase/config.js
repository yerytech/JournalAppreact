// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBqhs7E3EmN84biEOXkgklgqsk2vLkC2U",
  authDomain: "journal-app-5d2d3.firebaseapp.com",
  projectId: "journal-app-5d2d3",
  storageBucket: "journal-app-5d2d3.appspot.com",
  messagingSenderId: "249374355509",
  appId: "1:249374355509:web:31d68ebe35546b9c9e817c",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

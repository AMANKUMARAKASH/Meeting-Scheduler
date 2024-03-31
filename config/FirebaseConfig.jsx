// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meeting-scheduler-20798.firebaseapp.com",
  projectId: "meeting-scheduler-20798",
  storageBucket: "meeting-scheduler-20798.appspot.com",
  messagingSenderId: "991995369640",
  appId: "1:991995369640:web:050b197f43525f84f38a9d",
  measurementId: "G-DWG5ZFH5J1"
};

// Initialize Firebase
  export const app = initializeApp(firebaseConfig);

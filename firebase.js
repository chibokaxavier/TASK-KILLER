// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getStorage } from "@firebase/storage";
import { initializeApp, getApp, getApps } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7Wxt8EYPGTSXVKZEkJ4O7xyuHYUncPzw",
  authDomain: "task-killer-5d22b.firebaseapp.com",
  projectId: "task-killer-5d22b",
  storageBucket: "task-killer-5d22b.appspot.com",
  messagingSenderId: "405527831493",
  appId: "1:405527831493:web:512f377d45ee2efd8321ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
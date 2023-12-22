// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDpr4hGfxoOlxP0Yk8wY6Woq8r2qMpVfHg",
  authDomain: "wie-code.firebaseapp.com",
  projectId: "wie-code",
  storageBucket: "wie-code.appspot.com",
  messagingSenderId: "393157109937",
  appId: "1:393157109937:web:5cc456495810a098c4da90",
  measurementId: "G-VJE4DPJVJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export default app
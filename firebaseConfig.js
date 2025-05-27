// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUCOZg5wgY3-DDshVxlTP82Nv--cUpU4I",
  authDomain: "final-project-a8e6b.firebaseapp.com",
  projectId: "final-project-a8e6b",
  storageBucket: "final-project-a8e6b.firebasestorage.app",
  messagingSenderId: "194998643982",
  appId: "1:194998643982:web:edbee94c81bb8282d53b5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const database = getDatabase(app)

export {app,database}
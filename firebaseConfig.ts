// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtbH-Fe5leoDczc_5GhykmHt4AJ54hBNk",
  authDomain: "projeto-teste-7a118.firebaseapp.com",
  projectId: "projeto-teste-7a118",
  storageBucket: "projeto-teste-7a118.firebasestorage.app",
  messagingSenderId: "308576652824",
  appId: "1:308576652824:web:03daf6c680c4b7bc347d6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
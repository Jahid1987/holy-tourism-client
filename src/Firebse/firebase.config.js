// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd7UYgcxhGx0IRdHTKNbvoRS9BaYt3A8I",
  authDomain: "holy-tourism.firebaseapp.com",
  projectId: "holy-tourism",
  storageBucket: "holy-tourism.appspot.com",
  messagingSenderId: "303604251001",
  appId: "1:303604251001:web:ad1d7d13ebcc4bbba657a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

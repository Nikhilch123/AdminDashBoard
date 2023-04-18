// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnXdwMAbhtffhU8CPnAwY3HLJ8mumU6eg",
  authDomain: "dashboard-8771d.firebaseapp.com",
  projectId: "dashboard-8771d",
  storageBucket: "dashboard-8771d.appspot.com",
  messagingSenderId: "783354176714",
  appId: "1:783354176714:web:b4043871d7ade2c8830033"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}
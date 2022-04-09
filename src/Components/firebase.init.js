// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRUd3nOEwCUoDybVWlsc1_BZGBA4jo2Dw",
  authDomain: "emma-jhon-phero.firebaseapp.com",
  projectId: "emma-jhon-phero",
  storageBucket: "emma-jhon-phero.appspot.com",
  messagingSenderId: "184797411647",
  appId: "1:184797411647:web:14880802d63017a4cafb8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

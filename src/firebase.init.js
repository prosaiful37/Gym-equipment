// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4xd_6xpESE6aYD1NlUYvwx-iZDC9UcEg",
  authDomain: "gym-equipment-1b303.firebaseapp.com",
  projectId: "gym-equipment-1b303",
  storageBucket: "gym-equipment-1b303.appspot.com",
  messagingSenderId: "555270927902",
  appId: "1:555270927902:web:9f11d34c304dc41d15e00f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
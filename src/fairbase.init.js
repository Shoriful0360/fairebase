
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsU5Ue0SNpiQIbLvrvt6UfHn8y5NZO97Q",
  authDomain: "singup-database-e4fb3.firebaseapp.com",
  projectId: "singup-database-e4fb3",
  storageBucket: "singup-database-e4fb3.firebasestorage.app",
  messagingSenderId: "353118862948",
  appId: "1:353118862948:web:78ca8fe1c5442b41ef2971"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB94y_SeTUrJOIgZOHUSn43nHpyCrOykB8",
  authDomain: "muvi-database.firebaseapp.com",
  projectId: "muvi-database",
  storageBucket: "muvi-database.appspot.com",
  messagingSenderId: "823846549972",
  appId: "1:823846549972:web:5376664093e32ed53c3e41"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)
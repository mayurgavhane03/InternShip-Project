// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-W3qIsvA46AeaHegt-dYF2VoN7Lmfq6c",
  authDomain: "foodvilla-4e3b9.firebaseapp.com",
  projectId: "foodvilla-4e3b9",
  storageBucket: "foodvilla-4e3b9.appspot.com",
  messagingSenderId: "439235221791",
  appId: "1:439235221791:web:90b1bb6d59519ea511b82a", 
  measurementId: "G-6R0ZGRN5N2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth()


export const provider =  new GoogleAuthProvider();
 
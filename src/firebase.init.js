// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF1wv3kkoHCJe-9KeSdFYnqR3Q8fDrNN8",
  authDomain: "ema-john-simple-4ce52.firebaseapp.com",
  projectId: "ema-john-simple-4ce52",
  storageBucket: "ema-john-simple-4ce52.appspot.com",
  messagingSenderId: "131836450859",
  appId: "1:131836450859:web:b6a125e97ed7299c1b726e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
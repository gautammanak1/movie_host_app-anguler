// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA7XLaRZ5eMQsivj_LJIInJSrMHNOiunY",
  authDomain: "movie-app-7dbb0.firebaseapp.com",
  projectId: "movie-app-7dbb0",
  storageBucket: "movie-app-7dbb0.appspot.com",
  messagingSenderId: "24876614843",
  appId: "1:24876614843:web:29df45da80e91e51fed59e",
  measurementId: "G-S7F91HN5GZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
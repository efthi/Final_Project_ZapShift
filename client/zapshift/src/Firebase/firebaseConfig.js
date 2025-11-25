// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2iqpbpxwlOiwUuEGh-Ni00QSxPlbslwE",
  authDomain: "zapshift-5b2aa.firebaseapp.com",
  projectId: "zapshift-5b2aa",
  storageBucket: "zapshift-5b2aa.firebasestorage.app",
  messagingSenderId: "774315840092",
  appId: "1:774315840092:web:0f98755578444f54554c99",
  measurementId: "G-96W9QSETM7"
};

// এখানে চেক করো
console.log("Firebase Config Loaded:", firebaseConfig);
console.log("API Key আছে কি?", !!firebaseConfig.apiKey);
console.log("API Key এর প্রথম ১০ অক্ষর:", firebaseConfig.apiKey?.substring(0, 10) + "...");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

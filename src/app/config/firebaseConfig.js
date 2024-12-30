// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKKgDOPCs0UcRt2u4XAdcubJ69Wjd0uQA",
  authDomain: "wlsc280blogproject.firebaseapp.com",
  databaseURL: "https://wlsc280blogproject-default-rtdb.firebaseio.com",
  projectId: "wlsc280blogproject",
  storageBucket: "wlsc280blogproject.firebasestorage.app",
  messagingSenderId: "261964898489",
  appId: "1:261964898489:web:7288f9f29e56f75e3c7b68"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
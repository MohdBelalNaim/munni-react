// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVMz20kC7bxBQUrYX8drxMHvDa-bbug-g",
  authDomain: "munni-app.firebaseapp.com",
  projectId: "munni-app",
  storageBucket: "munni-app.appspot.com",
  messagingSenderId: "942123430344",
  appId: "1:942123430344:web:6c5cd2b352c2e2b12990fd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

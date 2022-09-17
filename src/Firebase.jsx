import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7zp2rl_hCv-sSDF4SPn1vzaLjoFHgHBc",
  authDomain: "talks-2819d.firebaseapp.com",
  projectId: "talks-2819d",
  storageBucket: "talks-2819d.appspot.com",
  messagingSenderId: "325934987198",
  appId: "1:325934987198:web:912bbfb93c6017a7bd2bef",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

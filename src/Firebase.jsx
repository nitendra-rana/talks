// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import {getFirestore} from "firebase/firestore"




const firebaseConfig = {
  apiKey: "AIzaSyBqCESkLVHBZ8WNCx7Syw82nACdkvAvLuU",
  authDomain: "talks-87735.firebaseapp.com",
  projectId: "talks-87735",
  storageBucket: "talks-87735.appspot.com",
  messagingSenderId: "395985582986",
  appId: "1:395985582986:web:238ef0fa7437a595fb6673",
  measurementId: "G-NKS3WNVFGV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
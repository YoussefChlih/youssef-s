// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATMhReV58EQ1eibjvTW_8AWnils99dZok",
  authDomain: "youssef-portfolio-7f28c.firebaseapp.com",
  projectId: "youssef-portfolio-7f28c",
  storageBucket: "youssef-portfolio-7f28c.firebasestorage.app",
  messagingSenderId: "1074999869082",
  appId: "1:1074999869082:web:83f2c97d560533dcec6923",
  measurementId: "G-7Z7C9SD5Q2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Analytics and get a reference to the service (only in browser)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjsocSpgaTMIfQaDc9HPlscTyMwvNnS08",
    authDomain: "fir-taskmanager-bd4c8.firebaseapp.com",
    projectId: "fir-taskmanager-bd4c8",
    storageBucket: "fir-taskmanager-bd4c8.appspot.com",
    messagingSenderId: "378066818153",
    appId: "1:378066818153:web:5b5d9fe471029735f93ef8",
    measurementId: "G-Q908GB9YS8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
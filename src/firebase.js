// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDPilN3RK8IUI_EM7zT4oReXulPE8dgjik',
  authDomain:'netflix-rt.firebaseapp.com',
  projectId:'netflix-rt',
  storageBucket:'netflix-rt.appspot.com',
  messagingSenderId:'127015882808 ',
  appId:'1:127015882808:web:81c18dd8053f5ba23b16cd',
  measurementId:'G-2VPQPXEL53'
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)
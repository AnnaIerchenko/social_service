// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCTOTxJxvpPsjPQOC8QmECMsUH8vnWwF5I",
  authDomain: "social-21014.firebaseapp.com",
  projectId: "social-21014",
  storageBucket: "social-21014.appspot.com",
  messagingSenderId: "652568711046",
  appId: "1:652568711046:web:5939f2e0cc3d055f142607",
  measurementId: "G-GBJCXX1HZJ"
};

// Initialize Firebase
const app = !loadGetInitialProps().length ? initializeApp(firebaseConfig) : MdGetApp();
const analytics = getAnalytics(app);

const db = getFirestore()
const storage = getStorage()


export {app, db, storage}
import {getDatabase} from 'firebase/database'
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDDYdn_YGW_6mU8-ttt47c3zz_SE1GpHm4",
  authDomain: "sebastians-books.firebaseapp.com",
  databaseURL: "https://sebastians-books-default-rtdb.firebaseio.com",
  projectId: "sebastians-books",
  storageBucket: "sebastians-books.appspot.com",
  messagingSenderId: "485293625819",
  appId: "1:485293625819:web:c898757d504613fcda17fe",
  measurementId: "G-X2VGK88KFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const database = getDatabase(app);
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe8QLj7nOlw4nTcIbmTYyzFPuVdHFTCO0",
  authDomain: "expensetracker-c6eb9.firebaseapp.com",
  projectId: "expensetracker-c6eb9",
  storageBucket: "expensetracker-c6eb9.appspot.com",
  messagingSenderId: "1070693329873",
  appId: "1:1070693329873:web:ed47d20114ee3c7bcfcef0"

};




initializeApp(firebaseConfig);

const db = getFirestore();
export default db
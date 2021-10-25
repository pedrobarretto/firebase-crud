import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPdgkchEg4hoED46lt_cmxKSlr8u7GOdA",
  authDomain: "fir-crud-12530.firebaseapp.com",
  projectId: "fir-crud-12530",
  storageBucket: "fir-crud-12530.appspot.com",
  messagingSenderId: "552952191119",
  appId: "1:552952191119:web:30d8c1549d52f78fcf78fa",
  measurementId: "G-1BDNZBPLG2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

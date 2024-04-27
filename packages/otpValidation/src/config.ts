import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAPnlFUgqpaAkHizxl45iGuQCeijzCSxBU",
  authDomain: "paytm-wallet-f0c98.firebaseapp.com",
  projectId: "paytm-wallet-f0c98",
  storageBucket: "paytm-wallet-f0c98.appspot.com",
  messagingSenderId: "661748212417",
  appId: "1:661748212417:web:dd36f9a5b04a0601a1aa40",
  measurementId: "G-NYKBQG4C3M",
};

const app = initializeApp(firebaseConfig);
export { app };

import { FirebaseConfig } from "otp-validation/config";

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY?.toString(),
  authDomain: process.env.FIREBASE_AUTH_DOMAIN?.toString(),
  projectId: process.env.FIREBASE_PROJECT_ID?.toString(),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET?.toString(),
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID?.toString(),
  appId: process.env.FIREBASE_API_ID?.toString(),
  measurementId: process.env.FIREBASE_MEASUREMENT_ID?.toString(),
};

export default firebaseConfig;

import { initializeApp } from "firebase/app";

export interface FirebaseConfig {
  apiKey: string | undefined;
  authDomain: string | undefined;
  projectId: string | undefined;
  storageBucket: string | undefined;
  messagingSenderId: string | undefined;
  appId: string | undefined;
  measurementId: string | undefined;
}

const FirbaseAuth = (firebaseConfig: FirebaseConfig) => {
  const app = initializeApp(firebaseConfig);
  return app;
};

export default FirbaseAuth;
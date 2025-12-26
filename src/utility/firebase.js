// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Load configuration from environment variables (Vite uses VITE_* prefixes)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Validate required Firebase env variables (Vite uses VITE_* prefixes)
const requiredEnvKeys = {
  apiKey: "VITE_FIREBASE_API_KEY",
  authDomain: "VITE_FIREBASE_AUTH_DOMAIN",
  projectId: "VITE_FIREBASE_PROJECT_ID",
  appId: "VITE_FIREBASE_APP_ID",
};
const missingKeys = Object.keys(requiredEnvKeys).filter(
  (k) => !firebaseConfig[k]
);

let app = null;
let analytics = null;
export let auth = null;
export let db = null;

if (missingKeys.length > 0) {
  console.warn(
    `Firebase environment variables not found: ${missingKeys
      .map((k) => requiredEnvKeys[k])
      .join(", ")}. Add them to your .env (Vite uses VITE_* prefixes).`
  );
} else {
  // Initialize Firebase
  app = firebase.initializeApp(firebaseConfig);
  try {
    analytics = getAnalytics(app);
  } catch (e) {
    // Ignore analytics initialization errors (e.g., server-side or missing measurementId)
  }
  auth = getAuth(app);
  db = getFirestore(app);
}

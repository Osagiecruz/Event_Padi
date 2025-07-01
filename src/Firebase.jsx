import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDvOulnr6SCDJsB7K2XGcTFXKS9jvlGyzM",
  authDomain: "event-padi-6171c.firebaseapp.com",
  projectId: "event-padi-6171c",
  storageBucket: "event-padi-6171c.firebasestorage.app",
  messagingSenderId: "532035885254",
  appId: "1:532035885254:web:9741864ffffd9f9412dfc7",
  measurementId: "G-BNRG99CD88"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { app };
export { provider }
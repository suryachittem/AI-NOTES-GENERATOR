import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "examnotesauthai.firebaseapp.com",
  projectId: "examnotesauthai",
  storageBucket: "examnotesauthai.firebasestorage.app",
  messagingSenderId: "941868696936",
  appId: "1:941868696936:web:8703f244c691ceae8402dd",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };

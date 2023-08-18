import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  // connectAuthEmulator,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcin1uyNtVCVewGf6Qtm1oLT4Q62-qo68",
  authDomain: "portals-e509a.firebaseapp.com",
  projectId: "portals-e509a",
  storageBucket: "portals-e509a.appspot.com",
  messagingSenderId: "278011396544",
  appId: "1:278011396544:web:741b8bb244c4757bd58825",
  measurementId: "G-RSNR9BW9HQ",
};
// console.log("gaoga;ognao;gnwpogw");

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const authProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

// connectAuthEmulator(auth, "http://127.0.0.1:9099");
